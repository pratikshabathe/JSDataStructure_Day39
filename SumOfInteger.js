const promt = require("prompt-sync")();
let intArray = new Array();
let flag = 1;
let arraySize = prompt("Enter size of array: ");
console.log("Enter " +arraySize + " array values: ");
for (let i = 0; i < arraySize; i++){
    intArray[i] = parseInt(prompt());
}
console.log("The Array is: " +intArray);
for (let j = 0; j < intArray.length-2; j++){ //j=firstIndex
    for (let k = j+1; k < intArray.length-1; k++){ //k=secondIndex
        for (let l = k+1; l < intArray.length; l++){ //l=thirdindex
            if(intArray[j] + intArray[k] + intArray[l] == 0){
                console.log("Found Triplet");
                console.log("Elements are: " +intArray[j] + " " +intArray[k] + " " +intArray[l]);
                flag = 0;
            }
        }
    }
}
if(flag == 1)
console.log("Triplet whose sum is 0 doesn not exist");