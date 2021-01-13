/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useFish } from "./FishDataProvider.js";

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    // const contentElement = document.querySelector("insert selector here");
    // containerLeft__fishList 
    const contentElement = document.getElementsByClassName("containerLeft__fishList")[0];
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            All the fish go here!
        </article>
    `
}