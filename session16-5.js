function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s+/g, '');
    
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  const userInput = prompt("Nhập chuỗi ký tự để kiểm tra:");
  
  if (isPalindrome(userInput)) {
    alert("Đây là chuỗi đối xứng!");
  } else {
    alert("Đây không phải là chuỗi đối xứng!");
  }
  