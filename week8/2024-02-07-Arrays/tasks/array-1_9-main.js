const numberList1 = [23, 54, 75];

console.table({ numberList1 });

numberList1.push(11, 32, 42, 5, 71);
console.table({ numberList1 });

numberList1.unshift(1, 3, 7, 8, 14);
console.table({ numberList1 });

numberList1.pop(2);
console.table({ numberList1 });

numberList1.shift(2);
console.table({ numberList1 });
