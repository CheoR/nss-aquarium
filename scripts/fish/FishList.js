/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    // const contentElement = document.querySelector("insert selector here");
    // containerLeft__fishList 
    const contentElement = document.getElementsByClassName("containerLeft__fishList")[0];
    const fishes = useFish()

    let fishHTMLRepresentations = "";
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}
