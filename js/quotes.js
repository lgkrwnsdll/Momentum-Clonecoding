const quotes = [
{
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde'
},
{
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein'
},
{
    quote: 'So many books, so little time.',
    author: 'Frank Zappa'
},
{
    quote: 'A friend is someone who knows all about you and still loves you.',
    author: 'Elbert Hubbard'
},
{
    quote: 'Always forgive your enemies; nothing annoys them so much.',
    author: 'Oscar Wilde'
},
{
    quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi'
},
{
    quote: 'Without music, life would be a mistake.',
    author: 'Friedrich Nietzsche, Twilight of the Idols'
},
{
    quote: 'It is better to be hated for what you are than to be loved for what you are not.',
    author: 'Andre Gide, Autumn Leaves'
},
{
    quote: 'As he read, I fell in love the way you fall asleep: slowly, and then all at once.',
    author: 'John Green, The Fault in Our Stars'
},
{
    quote: 'The fool doth think he is wise, but the wise man knows himself to be a fool.',
    author: 'William Shakespeare, As You Like It'
}
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author