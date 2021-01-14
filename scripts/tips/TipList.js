import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {
    const contentElement = document.querySelector(".containerRight");
    const tips = useTip();

    let tipHTMLRepresentations = "";
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip);
    }

    contentElement.innerHTML += `
        <h2>Tip Care Tips</h2>
        <ul class="care">
            ${tipHTMLRepresentations}
        </ul>
    `;
};
