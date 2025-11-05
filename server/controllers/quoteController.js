const quotes = [
      { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "Act as if what you do makes a difference. It does.", author: "William James" },
      { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
      { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
      { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
      { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    ];


export const getQuote = async (req, res) => {
  try {
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    res.status(200).json(quote);
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ error: "Failed to fetch quote" });
  }
};
