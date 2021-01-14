export const Location = (location) => {
    return `
    <div class="locationCard">
        <p class="locationCard__city">${location.city}</p>
        <p class="locationCard__Country">${location.country}</p>
        <p class="locationCard__waterBody">${location.waterBody}</p>
        <img class="locationCard__landmark" src="${location.landmarkImg}" alt="${location.alt}">
    </div>
    `;
}
