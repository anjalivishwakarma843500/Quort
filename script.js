// const quote = document.querySelector(".quote");
// const generate = document.getElementById("generate");
// const category = document.getElementById("category");
// const likeQuoteBtn = document.getElementById("likeQuote");
// const likeList = document.getElementById("likeList");
// const copyBtn = document.querySelector(".fa-copy");

// let currentQuote = "";
// let currentAuthor = "";

// // Fetch quote from API
// function generateQuotes() {
//     quote.innerHTML = `Loading new quote...`;

//     fetch("https://api.api-ninjas.com/v1/quotes", {
//         headers: {
//             "X-Api-Key": "2RhxTjwyFQSkJgfQCT/cDA==a5ndohfy7D1PqcvI"
//         }
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         quote.innerHTML = "";
//         const div = document.createElement("div");

//         currentQuote = data[0].quote;
//         currentAuthor = data[0].author;

//         div.innerHTML = `
//             <i class="fa-solid fa-quote-left"></i> &nbsp;
//             ${currentQuote}
//             &nbsp;<i class="fa-solid fa-quote-right"></i>
//             <div class="author">— ${currentAuthor}</div>
//         `;
//         quote.appendChild(div);

//         category.innerHTML = data[0].category.toUpperCase();

//         // Reset like icon on new quote
//         likeQuoteBtn.classList.remove("fa-solid");
//         likeQuoteBtn.classList.add("fa-regular");
//     })
//     .catch((err) => {
//         quote.innerHTML = "Failed to fetch quote. Please try again.";
//         console.error(err);
//     });
// }

// // Like quote function
// function likeQuote() {
//     likeQuoteBtn.classList.toggle("fa-solid");
//     likeQuoteBtn.classList.toggle("fa-regular");
//     likeQuote.setAttribute("class","fa-solid fa-heart);

//     if (likeQuoteBtn.classList.contains("fa-solid")) {
//         alert("Liked quote:\n" + `"${currentQuote}" — ${currentAuthor}`);
//         // Optional: Save to localStorage or add to likeList display
//     } else {
//         alert("Unliked.");
//     }
// }

// // Copy quote function
// function copyQuote() {
//     const textToCopy = `"${currentQuote}" — ${currentAuthor}`;
//     navigator.clipboard.writeText(textToCopy)
//         .then(() => {
//             alert("Quote copied to clipboard!");
//         })
//         .catch(() => {
//             alert("Failed to copy!");
//         });
// }

// // Event listeners
// generate.addEventListener("click", generateQuotes);
// likeQuoteBtn.addEventListener("click", likeQuote);
// copyBtn.addEventListener("click", copyQuote);

// // Initial load
// generateQuotes();







const quote = document.querySelector(".quote");
const generate = document.getElementById("generate");
const category = document.getElementById("category");
const likeQuoteBtn = document.getElementById("likeQuote");
const likeList = document.getElementById("likeList");
const copyBtn = document.querySelector(".fa-copy");

let currentQuote = "";
let currentAuthor = "";

// Fetch quote from API
function generateQuotes() {
  quote.innerHTML = `Loading new quote...`;

  fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "X-Api-Key": "2RhxTjwyFQSkJgfQCT/cDA==a5ndohfy7D1PqcvI"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = "";
      const div = document.createElement("div");

      currentQuote = data[0].quote;
      currentAuthor = data[0].author;

      div.innerHTML = `
        <i class="fa-solid fa-quote-left"></i> &nbsp;
        ${currentQuote}
        &nbsp;<i class="fa-solid fa-quote-right"></i>
        <div class="author">— ${currentAuthor}</div>
      `;
      quote.appendChild(div);

      category.innerHTML = data[0].category.toUpperCase();

      // Reset like icon
      likeQuoteBtn.classList.remove("fa-solid");
      likeQuoteBtn.classList.add("fa-regular");
    })
    .catch((err) => {
      quote.innerHTML = "Failed to fetch quote. Please try again.";
      console.error(err);
    });
}

// Like quote
function likeQuote() {
  likeQuoteBtn.classList.toggle("fa-solid");
  likeQuoteBtn.classList.toggle("fa-regular");

  if (likeQuoteBtn.classList.contains("fa-solid")) {
    alert(`Liked:\n"${currentQuote}"\n— ${currentAuthor}`);
  } else {
    alert("Unliked.");
  }
}

// Copy quote to clipboard
function copyQuote() {
  const text = `"${currentQuote}" — ${currentAuthor}`;
  navigator.clipboard.writeText(text)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(() => alert("Copy failed."));
}

// Event listeners
generate.addEventListener("click", generateQuotes);
likeQuoteBtn.addEventListener("click", likeQuote);
copyBtn.addEventListener("click", copyQuote);

// On load
generateQuotes();

