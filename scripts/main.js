import { useFish } from "./fish/FishDataProvider.js";
import { FishList } from "./fish/FishList.js";
import { useTip }  from "./tips/TipDataProvider.js"
import { TipList } from "./tips/TipList.js"

// const allTheFish = useFish();

// for (const fish of allTheFish) {
//     console.log(fish);
// }

// const allTheTips = useTip()

// for (const tip of allTheTips) {
//     console.log(tip)
// }

FishList();
TipList();