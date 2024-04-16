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
}

module.exports = User;

/*

ДЗ:

+ Спробуйте створити роут на отримання всіх ваших юзерів

Декомпозиція задачі:

1. Спочатку прописати роут в index.js
2. Створити новий метод контроллеру UserController, у якому викликати метод метод findAll з моделі

*/