// ============================================================
// 1-masala
// n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]

// function getLevel2(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) result.push(2 ** i);
//   return result;
// }
// console.log(getLevel2(5));

// ============================================================
// 2-masala
// n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

// let n = 6;
// let A = 2;
// let B = 3;

// let arr = [];
// arr[0] = A;
// arr[1] = B;

// for (let i = 2; i < n; i++) {
//     arr[i] = arr.slice(0, i).reduce((sum, el) => sum + el, 0);
// }
// console.log(arr)

// ============================================================
// 3-masala
// n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.

// let arr = [2, 3, 5, 10, 20];
// function reverseArray() {
//   return arr.reverse();
// }
// console.log(reverseArray())

// ============================================================
// 4-masala
// n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// let arr = [4, 5, 7, 8, 6, 9];
// let oddCounter = [];
// let counter = 0;

// function isOdd(number) {
//   if (number % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// for (let i = 1; i <= arr.length; i++) {
//   if (isOdd(arr[i])) {
//     counter += 1;
//     oddCounter.push(arr[i]);
//   }
// }
// console.log(`Toqlar soni ${counter} va ular  ${oddCounter} `);

// ============================================================
// 5-masala
// n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// let arr = [4, 5, 7, 8, 6, 9];
// let evenNumbers = [];
// let oddNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenNumbers.push(arr[i]);
//   }
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] % 2 === 1) {
//     oddNumbers.push(arr[i]);
//   }
// }

// let result = [...evenNumbers, ...oddNumbers];
// console.log(result.join(" "));

// ============================================================
// 6-masala
// n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
// }

// ============================================================
// 7-masala
// n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = arr.length - 1; i >= 0; i -= 2) {
//   console.log(arr[i]);
// }

// ============================================================
// 8-masala
// n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = [];

// for (let i = arr.length - 1; i > 0; i -= 2) {
//   result.push(arr[i]);
// }
// for (let i = 0; i < arr.length; i += 2) {
//   result.push(arr[i]);
// }

// console.log(result.join(" "));

// ============================================================
// 9-masala
//  n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenIndex = [];
// let oddIndex = [];

// for (let i = 0; i <= arr.length - 1; i += 2) {
//   evenIndex.push(arr[i]);
// }
// for (let i = arr.length-1; i > 0; i -= 2) {
//   oddIndex.push(arr[i]);
// }

// let result = oddIndex.reverse().join(" ") + " " + evenIndex.reverse().join(" ");
// console.log(result);

// ============================================================
// 10-masala
// n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let n = arr.length;
// let result = [];

// for (let i = 0; i < n / 2; i++) {
//   result.push(arr[i]);
//   if (i !== n - i - 1) {
//     result.push(arr[n - i - 1]);
//   }
// }

// console.log(result);

// ============================================================
// 11-masala
// N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let K = 2,
//   L = 5;
// let result = [];

// function rangeOutSum(arr) {
//   for (let i = 0; i < K; i++) {
//     result.push(arr[i]);
//   }
//   for (let i = L + 1; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
// }
// rangeOutSum(arr);
// console.log(result);

// ============================================================
// 12-masala
//  Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]

// let arr = [10, false, "", "Abdulaziz", null];
// let Truthy = [],
//   Falsy = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//   arr[i] ? Truthy.push(arr[i]) : Falsy.push(arr[i]);
// }
// let result = `Truthy: ${Truthy}
// Falsy: ${Falsy}`;
// console.log(result);

// ============================================================
// 13-masala
// n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

// let arr = [ 1, 6, 3, 4, 5, 2, 7, 8];

// function getOddMin(arr) {
//   if (arr.length === 0) return null;

//   let result = Infinity;

//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] < result) {
//       result = arr[i];
//     }
//   }
//   return result;
// }

// console.log(getOddMin(arr));

// ============================================================
// 14-masala
// n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.

// let arr = [ 1, 6, 3, 4, 5, 2, 7, 8];

// function getOddMin(arr) {
//   if (arr.length === 0) return null;

//   let result = Infinity;

//   for (let i = 1; i < arr.length; i += 2) {
//     if (arr[i] < result) {
//       result = arr[i];
//     }
//   }
//   return result;
// }

// console.log(getOddMin(arr));

// ! 7 ta misol

// 1-masala

// function getInitialodds(n) {
//   let answer = [];
//   for (let i = 1; i <= n; i++) {
//     answer.length == 0 ? answer.push(1) : answer.push(answer.at(-1) + 2);
//   }
//   return answer;
// }
// console.log(getInitialOdds(15));

// 2-masala

// let arr = [4, 5, 7, 8, 6, 9];
// function getEvenReverse(arr) {
//   let answer = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 == 0) answer.push(arr[i]);
//   }
//   return answer;
// }
// console.log(getEvenReverse(arr));

// 3-masala

// const array = [4, 5, 7, 8, 6, 9];
// let text = "";
// for (let i = 0; i < array.length; i++) {
//   text += `${array[i]}${array[array.length - (i + 1)]}`;
// }
// console.log(text);

// 4-masala

// let arr = [1, 6, 9, 5, 8, 10, 15];
// function rangeSum(arr, K, L) {
//   let result = 0;
//   for (let i = K; i <= L; i++) {
//     result += arr[i];
//   }
//   return result;
// }
// console.log(rangeSum(arr, 2, 5));

// 5-masala

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let alone = [];
// for (let i = 0; i < arr.length; i++) {
//   !alone.includes(arr[i]) && alone.push(arr[i]);
// }

// console.log(alone);
// console.log(false && 1);

// 6-masala

// let arr = [17, 4, 9, 2, 3, 1, 25];
// let max = 0;
// let min;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
//   if (min == undefined || min > arr[i]) min = arr[i];
// }
// console.log(max);
// console.log(min);

// 7-masala

// let arr = [1, 5, 8, 9, 10];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i != 0) {
//     newArr.unshift(arr[i]);
//   } else {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);
