const express = require('express');
const { validateUser } = require('./middlewares');
const UserController = require('./controllers/UserController');
const app = express();

const bodyParser = express.json(); // request.body

const PORT = 5000;

// роут на реєстрацію
app.post('/user', bodyParser, validateUser, UserController.registerUser);
// роут на отримання всіх користувачів
app.get('/users', UserController.getAllUsers); // http://localhost:5000/users
// роут на отримання якогось конкретного юзера
app.get('/user/:userId', UserController.getOneUser);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


// маршрут + метод = роут


/*

Задача: Зареєструвати (створити) юзера

Декомпозиція задачі:

+ 1. Прийняти запит на певний роут
+ 2. Розпарсити дані, які прийшли з запитом
+ 3. Перевірити (валідувати) дані
+ 4. Зберегти ці дані
+ 5. Надіслати відповідь клієнту


*/