function isEven(number) {
    return number % 2 === 0;
  }
  
  let number = +prompt('Nhập vào số cần kiểm tra: '); 
  let result = isEven(number);
  console.log(`Kêt quả là ${result}`);