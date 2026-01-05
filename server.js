import express from "express";
import db from "./db.js";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


async function validateUserInput(username, password, db) {
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  const result = await db.query(
    "SELECT * FROM Register WHERE email = $1",
    [username]
  );

  if (result.rows.length === 0) {
    throw new Error("Invalid username or password");
  }

  return result.rows[0];
}


app.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  try {
    const user = await validateUserInput(username, password, db);
    res.status(200).json({ message: "Login successful", username });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/register", async (req, res) => {
  const { full_name, email, phone_number, password, confirm_password } = req.body;
  console.log("📥 Incoming data:", req.body);

  try {
    const result = await db.query(

      "INSERT INTO register (full_name, email, phone_number, password, confirm_password) VALUES ($1, $2, $3, $4, $5)",
      [full_name, email, phone_number, password, confirm_password]
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
