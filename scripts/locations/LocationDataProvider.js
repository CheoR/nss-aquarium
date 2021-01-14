const locationCollection = [
    {
        city: "City 1",
        country: "Country 1",
        waterBody: "Body of Water 1",
        landmarkImg: "https://source.unsplash.com/featured/?body-of-water",
        alt: "Image of body of water"
    },
    {
        city: "City 2",
        country: "Country 2",
        waterBody: "Body of Water 2",
        landmarkImg: "https://source.unsplash.com/featured/?body-of-water",
        alt: "Image of body of water"
    },
    {
        city: "City 3",
        country: "Country 3",
        waterBody: "Body of Water 3",
        landmarkImg: "https://source.unsplash.com/featured/?body-of-water",
        alt: "Image of body of water"
    },
    {
        city: "City 4",
        country: "Country 4",
        waterBody: "Body of Water 4",
        landmarkImg: "https://source.unsplash.com/featured/?body-of-water",
        alt: "Image of body of water"
    },
    {
        city: "City 5",
        country: "Country 5",
        waterBody: "Body of Water 5",
        landmarkImg: "https://source.unsplash.com/featured/?body-of-water",
        alt: "Image of body of water"
    },
];

export const useLocation = () => {
    return locationCollection.slice();
};
