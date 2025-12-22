import express from "express";
import YahooFinance from "yahoo-finance2";
import Register from "./src/Register/Register";

const app = express();
const PORT = 5000;


// Register a user 
  function register(userData) {
    // Here you would typically send a request to your backend server
    const { fullName, email, phoneNumber, password, confirmPassword } = userData;
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    } else {
      // Simulate a successful registration
      return { success: true, message: "User registered successfully" };
    }
  }


  function login(email, password) {
    // Here you would typically send a request to your backend server
    if (email === "email") && (password === "password") { 
     return { success: true, message: "User logged in successfully" };
    }  else {
      throw new Error("Invalid email or password");
    }
  }

// create a yahoo finance instance
const yahooFinance = new YahooFinance();

app.get("/api/stock/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();

    const result = await yahooFinance.quote(symbol);

    res.json({
      symbol: result.symbol,
      price: result.regularMarketPrice,
      currency: result.currency,
      change: result.regularMarketChange,
      changePercent: result.regularMarketChangePercent,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch stock info" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
