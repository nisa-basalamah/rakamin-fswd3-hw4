// Step 1: create main array with length 100
let mainArray = []; // initialize empty main array

for (let i = 0; i < 100; i++) {
  // assign 100 random numbers to main array
  mainArray.push(Math.floor(Math.random() * 50) + 1);
}

// Step 2: create 2 arrays based on odd and even index of main array
let oddArray = []; // initialize empty odd index array
let evenArray = []; // initialize empty even index array

for (let index in mainArray) {
  // logical condition to filter odd and even index of main array
  if (index % 2 === 0) {
    evenArray.push(mainArray[index]);
  } else {
    oddArray.push(mainArray[index]);
  }
}

// Step 3: calculate min, max, sum, and average for odd and even index array
// create user-defined functions for each aggregate function

// function to find minimum value
function minFun(arrayInput) {
  let minValue = arrayInput[0];
  for (let val of arrayInput) {
    if (val < minValue) {
      minValue = val;
    }
  }
  return minValue;
}

// function to find maximum value
function maxFun(arrayInput) {
  let maxValue = arrayInput[0];
  for (let val of arrayInput) {
    if (val > maxValue) {
      maxValue = val;
    }
  }
  return maxValue;
}

// function to find sum of array values
function sumFun(arrayInput) {
  let sumValue = 0;
  for (let val of arrayInput) {
    sumValue += val;
  }
  return sumValue;
}

// function to find average of array values
function averageFun(arrayInput) {
  let len = arrayInput.length;
  let averageValue = sumFun(arrayInput) / len; // make use of user-defined sum function

  return averageValue;
}

// additional function to combine aggregate functions result
function aggFun(arrayInput) {
  return {
    minValue: minFun(arrayInput),
    maxValue: maxFun(arrayInput),
    sumValue: sumFun(arrayInput),
    averageValue: averageFun(arrayInput),
  };
}

let oddAgg = aggFun(oddArray); // variable to store aggregate functions result for odd index array
let evenAgg = aggFun(evenArray); // variable to store aggregate functions result for even index array

// Step 4: additional function to print the overall output
function compareArray(oddAgg, evenAgg) {
  return {
    mainArray,
    oddArray,
    evenArray,
    oddAgg,
    evenAgg,
    minFinal:
      oddAgg.minValue < evenAgg.minValue
        ? "Array ganjil memiliki nilai minimum lebih kecil dari Array genap"
        : oddAgg.minValue === evenAgg.minValue
        ? "Array ganjil dan Array genap memiliki nilai minimum sama besar"
        : "Array genap memiliki nilai minimum lebih kecil dari Array ganjil",

    maxFinal:
      oddAgg.maxValue > evenAgg.maxValue
        ? "Array ganjil memiliki nilai maksimum lebih besar dari Array genap"
        : oddAgg.maxValue === evenAgg.maxValue
        ? "Array ganjil dan Array genap memiliki nilai maksimum sama besar"
        : "Array genap memiliki nilai maksimum lebih besar dari Array ganjil",

    sumFinal:
      oddAgg.sumValue > evenAgg.sumValue
        ? "Array ganjil memiliki nilai total lebih besar dari Array genap"
        : oddAgg.sumValue === evenAgg.sumValue
        ? "Array ganjil dan Array genap memiliki nilai total sama besar"
        : "Array genap memiliki nilai total lebih besar dari Array ganjil",

    averageFinal:
      oddAgg.averageValue > evenAgg.averageValue
        ? "Array ganjil memiliki nilai rata-rata lebih besar dari Array genap"
        : oddAgg.averageValue === evenAgg.averageValue
        ? "Array ganjil dan Array genap memiliki nilai rata-rata sama besar"
        : "Array genap memiliki nilai rata-rata lebih besar dari Array ganjil",
  };
}

console.log(compareArray(oddAgg, evenAgg));
