const db = new Map();

class User {
    constructor({firstName, lastName, email, password, isSubscribed = false}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isSubscribed = isSubscribed;
        this.createdAt = new Date();
        this.id = db.size + 1;
    }

    addUser() {
        db.set(this.id, this);
    }

    static findOne(userId) {
        return db.get(userId);
    }

    static findAll() {
        return [...db.values()];
    }

    deleteUser() {
        return db.delete(this.id);
    }

    updateUser(updatedFields) {
        /*
            1. Знайти юзера за його айдішником, отримати екземпляр юзера
            2. У HTTP запиті ми будемо приймати ті поля, які ми будемо оновлювати
            Задача на цьому етапі: оновити інформацію, при цьому не втративши інші дані
            Зробити новий об'єкт на основі старих даних, і доповнити (перезаписати) цей об'єкт новими даними
            3. Встановити в мапу ЗАМІСТЬ старого об'єкта, оцей новий об'єкт, який ми створили на кроці 2
        */
        db.set(this.id, {...this, ...updatedFields});
        return db.get(this.id);
    }
}

module.exports = User;