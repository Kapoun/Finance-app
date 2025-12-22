import YahooFinance from "yahoo-finance2";

async function test() {
  try {
    // create instance
    const yahooFinance = new YahooFinance();

    // fetch quote
    const data = await yahooFinance.quote("AAPL");
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

test();
