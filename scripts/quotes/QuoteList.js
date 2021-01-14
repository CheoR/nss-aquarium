import { useQuote } from "./QuotesDataProvider.js"
import { Quote } from "./Quote.js"

export const QuoteList = () => {
    const contentElement = document.querySelector(".containerLeft__travelQuotes");
    const quotes = useQuote()

    let quoteHTMLRepresentation = "";

    for(const quote of quotes) {
        quoteHTMLRepresentation += Quote(quote);
    }

    contentElement.innerHTML += `
    <h2>Notables</h2>
    <article class="quoteList">
        ${quoteHTMLRepresentation}
    </article>
    `;
};
