const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  let totalMoney = 0;
  let salaries = Object.values(employees);
  for (let salary of salaries) {
    totalMoney += salary;
  }
  return totalMoney;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
