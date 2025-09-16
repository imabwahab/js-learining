// write a function that sorts an array of numbers without using sort()

function sortArray(arr) {
  let n = arr.length;

  //Bubble Sort
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const numbers =[5, 2, 4,8 ,1, 3 ];

console.log(sortArray(numbers));

