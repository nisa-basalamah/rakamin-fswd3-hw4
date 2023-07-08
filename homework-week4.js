// Step 1: create main array with length 100
let mainArray = []; // initialize empty main array

for (let i = 0; i < 100; i++) {
  // assign 100 random numbers to main array
  mainArray.push(Math.floor(Math.random() * 50) + 1);
}

// Step 2: create 2 arrays based on odd and even index of main array
let oddIndexArray = []; // initialize empty odd index array
let evenIndexArray = []; // initialize empty even index array

// suggestion: make it into function
for (let index in mainArray) {
  // logical condition to filter odd and even index of main array
  if (index % 2 === 0) {
    evenIndexArray.push(mainArray[index]);
  } else {
    oddIndexArray.push(mainArray[index]);
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

let oddIndexAgg = aggFun(oddIndexArray); // variable to store aggregate functions result for odd index array
let evenIndexAgg = aggFun(evenIndexArray); // variable to store aggregate functions result for even index array

// Step 4: compare the aggregate functions result of the two arrays

// additional function to print the overall process and final output
function compareArray(oddIndexAgg, evenIndexAgg) {
  return {
    mainArray,
    oddIndexArray,
    evenIndexArray,
    oddIndexAgg,
    evenIndexAgg,
    minFinal:
      oddIndexAgg.minValue < evenIndexAgg.minValue
        ? "Array index ganjil memiliki nilai minimum lebih kecil dari array index genap"
        : oddIndexAgg.minValue === evenIndexAgg.minValue
        ? "Array index ganjil dan array index genap memiliki nilai minimum sama besar"
        : "Array index genap memiliki nilai minimum lebih kecil dari array index ganjil",

    maxFinal:
      oddIndexAgg.maxValue > evenIndexAgg.maxValue
        ? "Array index ganjil memiliki nilai maksimum lebih besar dari array index genap"
        : oddIndexAgg.maxValue === evenIndexAgg.maxValue
        ? "Array index ganjil dan array index genap memiliki nilai maksimum sama besar"
        : "Array index genap memiliki nilai maksimum lebih besar dari array index ganjil",

    sumFinal:
      oddIndexAgg.sumValue > evenIndexAgg.sumValue
        ? "Array index ganjil memiliki nilai total lebih besar dari array index genap"
        : oddIndexAgg.sumValue === evenIndexAgg.sumValue
        ? "Array index ganjil dan array index genap memiliki nilai total sama besar"
        : "Array index genap memiliki nilai total lebih besar dari array index ganjil",

    averageFinal:
      oddIndexAgg.averageValue > evenIndexAgg.averageValue
        ? "Array index ganjil memiliki nilai rata-rata lebih besar dari array index genap"
        : oddIndexAgg.averageValue === evenIndexAgg.averageValue
        ? "Array index ganjil dan array index genap memiliki nilai rata-rata sama besar"
        : "Array index genap memiliki nilai rata-rata lebih besar dari array index ganjil",
  };
}

console.log(compareArray(oddIndexAgg, evenIndexAgg));
