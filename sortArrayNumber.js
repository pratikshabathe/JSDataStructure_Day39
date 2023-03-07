let numList = [];
for (let i = 0; i < 10; i++){
    numList.push(Math.floor(Math.random() * 1000));
}
console.log(numList);
numList.sort();
console.log("Second smallest number: " , numList[1]);
console.log("Second largest number : ", numList[numList.length-2]);