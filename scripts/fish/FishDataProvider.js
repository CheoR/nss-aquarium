const fishCollection = [
    {
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        food: "Omnivorous",
        length: "7–8 cm",
        image: "https://cdn.pixabay.com/photo/2016/06/13/10/06/clownfish-1453910_960_720.jpg"
    },
    {
        name: "Bubbles",
        species: "Zebrasoma Flavescen",
        location: "South Pacific Ocean",
        food: "Benthic Turf Algae and Other Marine Plant Material",
        length: "20 cm",
        image: "https://cdn.pixabay.com/photo/2014/10/02/13/38/yellow-surgeon-470175__340.jpg"
    },
    {
        name: "Dora",
        species: "Paracanthurus",
        location: "Indo-Pacific",
        food: "Plankton",
        length: "12-32 cm",
        image: "https://media.istockphoto.com/photos/paracanthurus-hepatus-picture-id1287882551?b=1&k=6&m=1287882551&s=170667a&w=0&h=w9iVexUnTLLMCzWrFGcL4pGMERJxrtnWkoN3Od3LTqY="
    },
];

const testFiltersFishCollection = [
    {length: 7},
    {length: 21},
    {length: 6},
    {length: 9},
    {length: 6},
    {length: 9},
    {length: 23},
    {length: 2},
    {length: 14},
    {length: 6},
    {length: 13},
    {length: 23},
    {length: 1},
    {length: 13},
    {length: 18},
    {length: 19},
    {length: 20},
    {length: 20},
    {length: 22},
    {length: 1},
    {length: 2},
    {length: 17},
    {length: 10},
    {length: 24},
    {length: 19},
    {length: 12},
];


const useFish = () => {
    return fishCollection.slice();
}

const mostHolyFish = () => {
    const holyFish = testFiltersFishCollection.filter((fish) => {
        return fish.length % 3 === 0;
    });

    return holyFish.map((fish) => fish.length);
}

const soliderFish = () => {
    const soliderFishes = testFiltersFishCollection.filter((fish) => {
        return fish.length % 5 === 0;
    });

    return soliderFishes.map((fish) => fish.length);
}

const nonHolyFish = () => {
    const nonHolyFishes = testFiltersFishCollection.filter((fish) => {
        return fish.length % 5 !== 0 && fish.length % 3 !== 0;
    });

    return nonHolyFishes.map((fish) => fish.length);
}

export { useFish, mostHolyFish, soliderFish, nonHolyFish }