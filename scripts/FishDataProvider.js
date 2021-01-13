const fishCollection = [
    {
        name: "Nemo",
        speices: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        diet: "Omnivorous",
        img: "https://cdn.pixabay.com/photo/2016/06/13/10/06/clownfish-1453910_960_720.jpg"
    },
    {
        name: "Bubbles",
        speices: "Zebrasoma Flavescen",
        location: "South Pacific Ocean",
        diet: "Benthic Turf Algae and Other Marine Plant Material",
        img: "https://cdn.pixabay.com/photo/2014/10/02/13/38/yellow-surgeon-470175__340.jpg"
    },
    {
        name: "Dora",
        speices: "Paracanthurus",
        location: "Indo-Pacific",
        diet: "Plankton",
        img: "https://media.istockphoto.com/photos/paracanthurus-hepatus-picture-id1287882551?b=1&k=6&m=1287882551&s=170667a&w=0&h=w9iVexUnTLLMCzWrFGcL4pGMERJxrtnWkoN3Od3LTqY="
    },
];


export const useFish = () => {
    return fishCollection.slice();
}