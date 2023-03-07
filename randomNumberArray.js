let randomArray = new Array();
for(let i = 0; i < 10; i++){
    randomArray.push(Math.floor(Math.random() * 1000));
}
console.log(randomArray);
function getMinMax(num){
    let temp = 0;
    for (let i = 0; i <num.length; i++){
        for(let j = i+1; j< num.length; j++){
            if(num[i] > num[j]){
                temp = num[i];
                num[i] = num[j];
                num[j] = temp;
            }
        }
    }
    return "Second largest number is : "+num[8]+" and the second smallest number is "+num[i];
}
console.log(getMinMax(randomArray));