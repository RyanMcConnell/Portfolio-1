
const quoteLocation = document.querySelector("#embedded-quote");

const quotes = [
'"It takes courage to grow up and become who you really are" - E.E. Cummings' , 
'"To dare is to lose one’s footing momentarily. To not dare is to lose oneself." - Soren Kierkegaard' , 
'"The most courageous act is still to think for yourself. Aloud." - Coco Chanel' ,
'"Be yourself; everyone else is already taken." - Oscar Wilde' ,
'"I have not failed. I have just found 10,000 ways that wont work." - Thomas A. Edison'];

var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

quoteLocation.innerHTML = randomQuote