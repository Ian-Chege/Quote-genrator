const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//show newQuote
const newQuote = () => {
    //pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    //Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
       authorText.textContent = quote.author; 
    }
    //Check Quote length to determine styling
    if (quote.text.length>120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    
    quoteText.textContent = quote.text;
}

//Get Quotes from API
const getQuotes = async () => {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try{
        //read the JSON
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        //output
        newQuote();
    } catch (error) {
        //Catch error here
        alert(err);
    }
};

//Tweet Quote
tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
} 

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//on Load
getQuotes();