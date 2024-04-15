const express = require('express');
const yup = require('yup');
const app = express();

const bodyParser = express.json(); // request.body

const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isSubscribed: yup.boolean().required()
});

const PORT = 5000;

app.post('/user', bodyParser, async (req, res, next) => {
        try {
            const value = await validationSchema.validate(req.body);
            console.log(value);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


// маршрут + метод = роут


/*

Задача: Зареєструвати (створити) юзера

+ 1. Прийняти запит на певний роут
+ 2. Розпарсити дані, які прийшли з запитом
3. Перевірити (валідувати) дані
4. Зберегти ці дані
5. Надіслати відповідь клієнту


*/