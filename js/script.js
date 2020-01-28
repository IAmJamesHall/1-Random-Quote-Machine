/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
JavaScript by James Hall 
******************************************/

//Array of quote objects
var quotes = [
    {
        quote: "Java is to JavaScript what car is to Carpet.",
        source: "Chris Heilmann",
        tag: "programming"
    },
    {
        quote: "Code is like humor. When you have to explain it, it’s bad.",
        source: "Cory House",
        tag: "programming"
    },
    {
        quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        source: "Bill Gates",
        tag: "programming"
    },
    {
        quote: "He is no fool who gives what he cannot keep to gain that which he cannot lose.",
        source: "Jim Elliot",
        year: "1949",
        tag: "inspirational"
    },
    {
        quote: "In the words of Badley Bunson, \"How?\"",
        source: "Oscar N Reeteep",
        citation: "The Wingfeather Saga",
        tag: "literature"
    },
    {
        quote: "You cannot pass",
        source: "Gandalf",
        citation: "The Lord of the Rings",
        tag: "literature"
    },
    {
        quote: "There's no need to panic!",
        source: "Goverly Swimp",
        citation: "Andrew Peterson",
        tag: "literature"
    },
    {
        quote: "The Pessimist sees difficulty in every opportunity. The Optimist sees opportunity in every difficulty.",
        source: "Winston Churchill",
        tag: "inspirational"
    },
    {
        quote: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
        source: "Unknown",
        tag: "inspirational"
    },
    {
        quote: "If you are working on something that you really care about, you don’t have to be pushed. The Vision pulls you.",
        source: "Steve Jobs",
        tag: "inspirational"
    },
    {
        quote: "Whether you think you can or think you can’t, you’re right.",
        source: "Henry Ford",
        tag: "inspirational"
    },
    {
        quote: "If you've lost all, you have all to gain.",
        source: "Aaron Travis",
        tag: "inspirational",
        year: "2020"
    }
];

//array of background colors
var colors = [
    "011627",
    "53b55d",
    "5D1326",
    "0F4B6F",
    "4A6670",
    "2F413B"
]


//return a random number from 0 to upper-1
function getRandomNumber(upper) {
    return randomNumber = Math.floor(Math.random() * upper);
}


//choose a random quote from an array
function getRandomQuote(quotesArray) {
    var randomNumber = getRandomNumber(quotesArray.length); 
    return quotesArray[randomNumber];
}


//put html tags (and a class) around a string of text
function surroundText(HTMLtag, HTMLclass, textToSurround) {
    var text = "";
    text += "<" + HTMLtag + " class='" + HTMLclass + "'>"
    text += textToSurround;
    text += "</" + HTMLtag + ">"
    return text;
}

/* This is the main function of the program and is called when the page is loaded and from the loadButtonPressed() function */
function printQuote() {

    //call setRandomColor() to set the background color
    setRandomColor();

    //now select a random quote and surround it with <p> tags
    var quoteHTML = '';
    var quoteObject = getRandomQuote(quotes);
    quoteHTML += surroundText('p', 'quote', quoteObject.quote);


    /*create the attribution section by first checking if that part
      of the attribution exists, and then adding it to the
      attribution variable */
    var attribution = "";
    if (quoteObject.citation !== undefined) {
        attribution += surroundText('span', 'citation', quoteObject.citation);
    }
    if (quoteObject.year !== undefined) {
        attribution += surroundText('span', 'year', quoteObject.year);
    }
    quoteHTML += surroundText('p', 'source', quoteObject.source + attribution);

    //add tag
    quoteHTML += surroundText('p', 'source, small', quoteObject.tag);
    
    //set the innerHTML of the page with the quote and its attribution
    document.getElementById('quote-box').innerHTML = quoteHTML;
    
}


//returns random color from color array
function setRandomColor() {
    //get random color from array and turn it into a hex value
    var randomNumber = getRandomNumber(colors.length);
    var randomColor = "#" + colors[randomNumber];

    //set selected random color as body backgroundColor
    document.body.style.backgroundColor = randomColor;

    //set selected random color as button backgroundColor
    var loadQuoteButton = document.getElementById('loadQuote');
    loadQuoteButton.style.backgroundColor = randomColor;
}

/*clears automatic reloading of the quote (interval),
  calls printQuote(), and reinstates the interval */
function loadButtonPressed() {
    clearInterval(reloadQuote);
    printQuote();
    reloadQuote = setInterval(printQuote, 20000);
}

/*This code snippet written by Treehouse staff as part of the project boilerplate.
  I changed it to call the function 'loadButtonPressed()' so that
  I could properly handle clearInterval(); */
document.getElementById('loadQuote').addEventListener("click", loadButtonPressed, false);


//set an interval of 20 seconds for the quote to reload
var reloadQuote = setInterval(printQuote, 20000);
