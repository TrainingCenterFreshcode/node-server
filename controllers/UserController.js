const User = require('../models/User');

// метод контроллера на реєстрацію
module.exports.registerUser = (req, res, next) => {
    const { body } = req;
    const user = new User(body);
    user.addUser();

    delete user.password;
    res.status(201).send(user);
}

// метод контроллера на отримання всіх користувачів
module.exports.getAllUsers = (req, res, next) => {
    const usersArray = User.findAll();
    res.status(200).send(usersArray);
}

// метод контроллера на отримання конкретного користувача
module.exports.getOneUser = (req, res, next) => {
    const { userId } = req.params;
    const user = User.findOne(Number(userId));

    if(user) { // якщо юзер існує, тобто, якщо він не undefined
        res.status(200).send(user);
    } else {
        res.status(404).end();
    }
}

// метод контроллера на видалення конретного користувача
module.exports.deleteOneUser = (req, res, next) => {
    /*
    + 1. Потрібно методом findOne знайти потрібного користувача
    + 2. У знайденого екзмпляра викликаємо метод deleteUser
    + 3*. Реалізувати обробку ситуації, якщо у вас користувача, якого хочуть видалити - немає в БД
    */
    const { userId } = req.params;
    const user = User.findOne(Number(userId));

    if(user) {
        user.deleteUser();
        res.status(200).send(user);
    } else {
        res.status(404).end();
    }
}

// метод контроллера на оновлення інформації про якогось конкретного юзера
module.exports.updateUser = (req, res, next) => {
    const { body, params: { userId } } = req;
    const user = User.findOne(Number(userId));

    if(user) {
        const updatedUser = user.updateUser(body);
        res.status(200).send(updatedUser);
    } else {
        res.status(404).end();
    }
}