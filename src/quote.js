import './style.scss'
//!DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    //loading quote when page load
    generateQuote(quoteURL)
})

//!get container for quote
const quoteContainer = document.querySelector('.quote')
//!get container for author
const authorContainer = document.querySelector('.quote_author')
//!get btn dat will generate new quote
const quoteGenerate = document.querySelector('.btn_gen_quote')

//!generating quote by clicking
quoteGenerate.addEventListener('click', () => {
    generateQuote(quoteURL)
    /*old version w/ promises
    generateQuoteProm(quoteURL)
    .then(response => response.json())
    .then(data => console.log(data))*/
})

//!addres of quote api
const quoteURL = 'https://api.quotable.io/random'

//!function dat doing request and get random quotes data
//!and then assign it to containers
const generateQuote = async src => {
    let response = await fetch(src)
    let data = await response.json()
    quoteContainer.textContent = data.content
    authorContainer.textContent = data.author
}

console.log('hello from quote')
/*old version w/promises
const generateQuoteProm = (src) => {
    return fetch(src)
}*/
//localStorage.clear()
