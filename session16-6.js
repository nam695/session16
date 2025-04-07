function sumArray(arr) {
    return arr.reduce((total, currentValue) => total + currentValue, 0);
  }

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [10, 20, 30, 40];
  const array3 = [147, 67, 98, 90];
  
  console.log("Tổng mảng array1:", sumArray(array1));  
  console.log("Tổng mảng array2:", sumArray(array2));  
  console.log("Tổng mảng array3:", sumArray(array3));  