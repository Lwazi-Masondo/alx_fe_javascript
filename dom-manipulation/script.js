document.addEventListener("DOMContentLoaded", function () {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuote = document.getElementById("newQuote");
  const addQuoteBtn = document.getElementById("addQuoteBtn");

  let quotes = [
    {
      text: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
      category: "Inspiration",
    },
    {
      text: "When love is not madness it is not love.",
      category: "Romantic",
    },
    {
      text: "It does not do to dwell on dreams and forget to live.",
      category: "Life",
    },
    {
      text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      category: "Wisdom",
    },
    {
      text: "Learn the rules like a pro, so you can break them like an artist.",
      category: "Motivation",
    },
  ];

  function createAddQuoteForm() {
    const newQuoteText = document.getElementById("newQuoteText");
    const newQuoteCategory = document.getElementById("newQuoteCategory");

    const textInput = newQuoteText.value;
    const categoryInput = newQuoteCategory.value;

    quotes.push({ text: textInput, category: categoryInput });

    console.log(quotes);

    newQuoteText.value = "";
    newQuoteCategory.value = "";
  }

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].text;
    const quoteCategory = quotes[randomIndex].category;

    quoteDisplay.innerHTML = randomQuote + " - " + quoteCategory;
  }

  addQuoteBtn.addEventListener("click", createAddQuoteForm);
  newQuote.addEventListener("click", showRandomQuote);
});
