//ใช้ในการกระจายค่าของอาร์เรย์หรืออ็อบเจ็กต์
const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);


const arr = [1, 2, 3];
const arr2 = [4, 5, ...arr];

const arr3 = [6, 7, arr]; //แบบนี้จะไม่กระจายค่า แต่จะใส่อาร์เรย์ arr เข้าไปเป็นสมาชิกหนึ่งใน arr3

console.log(arr2);
console.log(arr3);