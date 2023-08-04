/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/*
  MrAtlas

  I searched online for quotes and found this amazing website with a lot of amazing quotes by great people
  https://www.brainyquote.com/
  I used the citation for the link to the quote and the year for the source of the quote
*/

const quotes = [
  {
    quote: "There must be no barriers to freedom of inquiry. There is no place for dogma in science. The scientist is free, and must be free to ask any question, to doubt any assertion, to seek for any evidence, to correct any errors.",
    source: "J. Robert Oppenheimer",
    citation: "https://www.brainyquote.com/quotes/j_robert_oppenheimer_752598?src=t_free",
    year: "April 22, 1904 - February 18, 1967",
    tags: ["Freedom", "Science", "free", "Doubt", "Place"]
  },
  {
    quote: "The truth is, no one of us can be free until everybody is free.",
    source: "Maya Angelou",
    citation: "https://www.brainyquote.com/quotes/maya_angelou_578790?src=t_free",
    year: "April 4, 1928 - May 28, 2014",
    tags: ["Truth", "Free", "Us", "Truth Is", "Until"]
  },
  {
    quote: "If you're going through hell, keep going.",
    source: "Winston Churchill",
    citation: "https://www.brainyquote.com/quotes/winston_churchill_103788?src=t_motivational",
    year: "November 30, 1874 - January 24, 1965",
    tags: ["Motivational", "Keep Going", "Hell", "Keep"]
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    source: "Arthur Ashe",
    citation: "https://www.brainyquote.com/quotes/arthur_ashe_371527?src=t_motivational",
    year: "July 10, 1943 - February 6, 1993",
    tags: ["Motivational", "Start", "Where", "Use", "You"]
  },
  {
    quote: "What you do today can improve all your tomorrows.",
    source: "Ralph Marston",
    citation: "https://www.brainyquote.com/quotes/ralph_marston_132966?src=t_motivational",
    tags: ["Motivational", "Today", "Improve", "Your", "You"]
  },
  {
    quote: "We cannot solve our problems with the same thinking we used when we created them.",
    source: "Albert Einstein",
    citation: "https://www.brainyquote.com/quotes/albert_einstein_121993",
    year: "March 14, 1879 - April 18, 1955",
    tags: ["Problems", "Thinking", "Cannot", "Used", "Them"]
  },
  {
    quote: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
    source: "Willie Nelson",
    citation: "https://www.brainyquote.com/quotes/willie_nelson_184361?src=t_positive",
    tags: ["Positive", "Thoughts"]
  },
  {
    quote: "Trust in dreams, for in them is hidden the gate to eternity.",
    source: "Khalil Gibran",
    citation: "https://www.brainyquote.com/quotes/khalil_gibran_382885?src=t_positive",
    year: "January 6, 1883 - April 10, 1931",
    tags: ["Positive", "Dreams", "Trust", "Eternity"]
  },
  {
    quote: "A somebody was once a nobody who wanted to and did.",
    source: "John Burroughs",
    citation: "https://www.brainyquote.com/quotes/john_burroughs_120947",
    year: "April 3, 1837 - March 29, 1921",
    tags: ["Motivational", "Nobody"]
  },
  {
    quote: "I am prepared for the worst, but hope for the best.",
    source: "Benjamin Disraeli",
    citation: "https://www.brainyquote.com/quotes/benjamin_disraeli_154186"
  }
];

/***
 * `getRandomQuote` function
***/

/**
 * I used the Math.floor and Math.random to get a random number between 0 and the length of the quotes array
 * then I used the return to get a random quote object from quotes
 */

function getRandomQuote (){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/**
 * I created a function to generate a random background color each time the printQuote is called
 * 
 * I googled how to get the body color of a web page and change it with javascript, I found the solution on stackoverflow
 * https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
 */

function generateRandomColor(){

  // Generate a random RGB color value
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return document.body.style.backgroundColor = randomColor;

}


/***
 * `printQuote` function
***/

/**
 * I have added the citation as the link to the website for credits, so the randomQuote.citation refers to the link
 * For the citation, year and tags i used a method found on MDN which is called hasOwnProperty() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * In the tags property I used the join() method to display the tags as a single string
 * Each time the printQuote is called so will the generateRandomColor() replacing the body color of the page
 */

function printQuote(){

  let html = '';

  generateRandomColor();

  const randomQuote = getRandomQuote();

  html += `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  ` ;

  if (randomQuote.hasOwnProperty('citation')){
    html += `
    <a href=${randomQuote.citation}>
      <span class="citation">brainyquote.com</span>
    </a>
    `; 
  }

  if (randomQuote.hasOwnProperty('year')){
    html += `
    <span class="year">${randomQuote.year}</span>
    `; 
  }

  if (randomQuote.hasOwnProperty('tags')){
    html += `
    <span class="tags">${randomQuote.tags.join(', ')}</span>
    `; 
  }

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;

}

/**
 * I searched on Google how to resfresh the page after an x amount of time, but I found a better way by calling the function 
 * printQuote after 20 seconds, and I can use the setInterval() 
 * solution found on stackoverflow
 * https://stackoverflow.com/questions/11901074/javascript-call-a-function-after-specific-time-period
 */

setInterval(printQuote,20000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);