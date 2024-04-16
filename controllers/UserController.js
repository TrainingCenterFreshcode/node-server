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
    console.log(req.query);
}