import express from "express";
import db from "./db.js";          // or wherever your db lives
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/Login", async (req, res) => {

    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.send("Login successful");
            console.log("password or username is missing");
        } else {
            res.send("Login failed");
            console.log("password or username is missing");
        }
        // Query database to find user with matching email
        const result = await db.query("SELECT * FROM users WHERE username = $1", [
            username,
        ]);

        // Check if user exists
        if (result.rows.length === 0) {
            return res.status(401).send({ message: "Invalid email or password" });
        }

        // Compare passwords
        const user = result.rows[0];
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).send({ message: "Invalid email or password" });
        }

        // If credentials are valid, generate token or session
        // For example, using JSON Web Tokens (JWT)
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
        });

        res.send({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});



app.listen(5000, () => {
    console.log("Server running on port 5000");
});
