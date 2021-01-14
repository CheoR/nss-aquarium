// import { useFish } from "./fish/FishDataProvider.js";
import { FishList } from "./fish/FishList.js";
// import { useTip }  from "./tips/TipDataProvider.js"
import { TipList } from "./tips/TipList.js"
import { useLocation } from "./locations/LocationDataProvider.js"
import { LocationList } from "./locations/LocationList.js"

// const allTheFish = useFish();

// for (const fish of allTheFish) {
//     console.log(fish);
// }

// const allTheTips = useTip()

// for (const tip of allTheTips) {
//     console.log(tip)
// }

const allLocations = useLocation();
for(const loc of allLocations) {
    console.log(loc);
}

FishList();
TipList();
LocationList();