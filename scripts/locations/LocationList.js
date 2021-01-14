import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".containerLeft__treavelLocations");
    const locations = useLocation();

    let locationHTMLRepresentations = "";
    for (const loc of locations) {
        locationHTMLRepresentations += Location(loc);
    }

    contentElement.innerHTML += `
        <h2>Places to See</h2>
        <article class="locationList">
            ${locationHTMLRepresentations}
        </article>
    `;

}
