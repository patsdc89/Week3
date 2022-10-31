let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let difference = lastElement - firstElement; 
console.log("last element in the ages array:", difference); 

ages.push (39)

const average = ages.reduce((a,b) => a+b, 0) / ages.length;
console.log(average)

let names = [Sam, Tommy, Tim, Sally, Buck, Bob]

let totalNamesAverage = 0; 
for (let i = 0; i < names.length; i++) {
    totalNamesAverage += names[i].length / names.length; 
}
console.log("2a. The average of all names:", totalNamesAverage);

let concatNames = ""

let LastarrayElement = names.slice(-1)
console.log("3. Last Element", LastarrayElement)'

let firstArrayElement = names.slice(0, 1);

let nameLengths = [5, 3, 4]
for  (let i  = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("5. Names character lengths add to new array:", nameLengths);

let totalNameArrLength; 
for (let i = 0; i < nameLengths.length; i++) {
    totalNameArrLength = nameLengths.length;
}
console.log("6.Total of namelength Array elements:", totalNameArrLength);

function parAddition(word, n) {
    wordRep = word.repeat(n);
    return wordRep;
}
let wordRepeating = parAddition("Hello",3);
console.log("7. Word Concatenating based on n number of times:", wordRepeating);
}

var firstName = "David";
var lastName = "Chen";
var fullName = firstName + " " + lastName;

let yourArray = [10, 20, 30, 40. 1];
function trueArray(arr1) {
    arrayTotal = 0;
    for (let i = 0; i < arr1.length; i++) {
    }
    arrayisTrue = arrayTotal > 100;
    return arrayisTrue;
}
let yourSummedArray = trueArray(yourArray);
console.log, yourSummedArray);

function averageArray(arr1) {
    let total = 0;
    arr1.array.forEach(function (num, index) {
        total +=num;
    });
    return total/arr1.length;
}

let array1 = [12, 15, 16]
let array2 = [11, 9, 12]
function averageTwoArrays(arr1, arr2) {
    
function willBuydrink(isHotOutside, moneyInPocket) {
    let buyADrink = isHotOutside == true && moneyInPocket > 10.5;

    return buyADrink;
}

#12 Should I Buy a Canada Goose Jacket in Canada if it costs $1300 Canadian Dollars versus $1000 USD?

function cadfunc()
{
    usd.value = parseFloat(cad.value) * 0.7518;
    
}


