document.addEventListener("DOMContentLoaded", function () {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuote = document.getElementById("newQuote");
  const addQuoteBtn = document.getElementById("addQuoteBtn");

  const defaultQuotes = [
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

  let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

  let allQuotes = defaultQuotes.concat(savedQuotes);

  function addQuotes() {
    // Adds quotes to the array list
    const newQuoteText = document.getElementById("newQuoteText");
    const newQuoteCategory = document.getElementById("newQuoteCategory");

    const textInput = newQuoteText.value.trim();
    const categoryInput = newQuoteCategory.value.trim();

    savedQuotes.push({ text: textInput, category: categoryInput });

    console.log(defaultQuotes);

    newQuoteText.value = "";
    newQuoteCategory.value = "";

    createAddQuoteForm(textInput, categoryInput);

    localStorage.setItem("quotes", JSON.stringify(savedQuotes));
  }

  let headingAdded = false;

  function createAddQuoteForm(textInput, categoryInput) {
    // Creates a form that displays the newly added quotes
    const quoteForm = document.getElementById("quoteForm");

    if (!headingAdded) {
      const heading = document.createElement("h2");
      heading.textContent = "Newly Added Quotes";
      quoteForm.appendChild(heading);
      headingAdded = true;
    }

    const paragraph = document.createElement("p");
    paragraph.textContent = textInput + " - " + categoryInput;

    quoteForm.appendChild(paragraph);
  }

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * allQuotes.length); //Helps generate a random array index number based on the length of the array to produce a random quote.
    const randomQuote = allQuotes[randomIndex].text;
    const quoteCategory = allQuotes[randomIndex].category;

    quoteDisplay.innerHTML = randomQuote + " - " + quoteCategory;
  }
  savedQuotes.forEach((q) => createAddQuoteForm(q.text, q.category));

  addQuoteBtn.addEventListener("click", addQuotes);
  newQuote.addEventListener("click", showRandomQuote);
});
