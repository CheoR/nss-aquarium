import { useFish } from "./FishDataProvider.js";

const allTheFist = useFish();

for (const fish of allTheFist) {
    console.log(fish);
}