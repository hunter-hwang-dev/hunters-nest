import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
//import { quickSort } from "./quickSort";
import { radixSort } from "./radixSort";

import { testArr1, testArr2, testArr3 } from "../data";

console.log(bubbleSort(testArr1));
console.log(selectionSort(testArr1));
console.log(insertionSort(testArr2));
//console.log(quickSort(testArr2));
console.log(radixSort(testArr3));
