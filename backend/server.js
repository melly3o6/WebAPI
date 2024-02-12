const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const crypto = require('crypto');

const secretKey1 = crypto.randomBytes(32).toString('hex');
const secretKey2 = crypto.randomBytes(32).toString('hex');

console.log('Secret Key 1:', secretKey1);
console.log('Secret Key 2:', secretKey2);

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: "api-session",
        keys: [secretKey1, secretKey2],
        httpOnly: true,
        sameSite: 'strict'
    })
);

// database

//!const db = require("./app/models");
//!const Role = db.role;

//!db.sequelize.sync();

// routes

app.get("/", (req, res) => {
    res.json({ message: "Welcome to API test DB"});
});

//!require("./app/routes/auth.routes")(app);
//!require("./app/routes/user.routes")(app);

// set PORT, listen for requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({
        id: 1,
        name: "user",
    });

    Role.create({
        id: 2,
        name: "admin",
    });

    Role.create({
        id: 3,
        name: "moderator",
    });
}
