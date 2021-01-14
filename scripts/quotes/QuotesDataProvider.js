const quotesCollections = [
 {
     text: "Distinctio voluptatibus, quisquam, iure, beatae placeat accusantium dolorem ullam",
     author: "Author 1",
     location: "Location 1",
     date: "2020-01-04",
 },
 {
    text: "Totam, eum ex? Molestias cumque deserunt quod temporibus provident eveniet voluptates vero voluptatem.",
    author: "Author 2",
    location: "Location 2",
    date: "2020-01-05",
},
{
    text: "Distinctio voluptatibus, quisquam, iure, beatae placeat accusantium dolorem ullam",
    author: "Author 1",
    location: "Location 1",
    date: "2020-01-05",
},
{
    text: "Totam, eum ex? Molestias cumque deserunt quod temporibus provident eveniet voluptates vero voluptatem.",
    author: "Author 3",
    location: "Location 3",
    date: "2020-01-07",
},
{
    text: "Distinctio voluptatibus, quisquam, iure, beatae placeat accusantium dolorem ullam",
    author: "Author 4",
    location: "Location 4",
    date: "2020-01-06",
},
];

export const useQuote = () => {
    return quotesCollections.slice();
};
