const demo = {
  results: [
    {
      date: "2025-03-25",
      item: [
        { name: "apple", value: 1.56, type: "food" },
        { name: "banana", value: 1.99, type: "food" },
        { name: "jeans", value: 59.99, type: "cloth" },
        { name: "charger", value: 32.99, type: "electrical appliances" },
      ],
    },
    {
      date: "2025-03-26",
      item: [
        { name: "coffee", value: 3.5, type: "drink" },
        { name: "book", value: 15.0, type: "book" },
        { name: "socks", value: 8.99, type: "cloth" },
      ],
    },
    {
      date: "2025-03-27",
      item: [
        { name: "pizza", value: 12.5, type: "food" },
        { name: "movie ticket", value: 18.0, type: "entertainment" },
        { name: "keyboard", value: 45.99, type: "electrical appliances" },
      ],
    },
    {
      date: "2025-03-28",
      item: [
        { name: "salad", value: 7.25, type: "food" },
        { name: "notebook", value: 5.75, type: "stationery" },
        { name: "shoes", value: 79.99, type: "cloth" },
      ],
    },
    {
      date: "2025-03-29",
      item: [
        { name: "burger", value: 9.99, type: "food" },
        { name: "headphones", value: 29.99, type: "electrical appliances" },
        { name: "shampoo", value: 6.5, type: "personal care" },
      ],
    },
    {
      date: "2025-03-30",
      item: [
        { name: "rice", value: 5.0, type: "food" },
        { name: "pen", value: 2.3, type: "stationery" },
        { name: "jacket", value: 89.99, type: "cloth" },
      ],
    },
    {
      date: "2025-03-31",
      item: [
        { name: "juice", value: 4.2, type: "drink" },
        { name: "puzzle", value: 11.5, type: "entertainment" },
        { name: "mouse", value: 22.99, type: "electrical appliances" },
      ],
    },
    {
      date: "2025-04-01",
      item: [
        { name: "noodles", value: 6.8, type: "food" },
        { name: "calendar", value: 7.9, type: "stationery" },
        { name: "trousers", value: 65.0, type: "cloth" },
      ],
    },
    {
      date: "2025-04-02",
      item: [
        { name: "tea", value: 2.8, type: "drink" },
        { name: "board game", value: 25.0, type: "entertainment" },
        { name: "printer", value: 120.0, type: "electrical appliances" },
      ],
    },
    {
      date: "2025-04-03",
      item: [
        { name: "sandwich", value: 8.5, type: "food" },
        { name: "soap", value: 4.8, type: "personal care" },
        { name: "hat", value: 19.99, type: "cloth" },
      ],
    },
  ],
};

const expenseDiv = document.querySelector(".expense");
let totalExpense = 0;

function roundToTwo(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function createExpenseCard(data) {
  let expenseItem = "";
  let dayTotalExpense = 0;
  data.item.forEach((item) => {
    expenseItem += `
    <div class="expense-item item">
      <div class="item-name">${item.name}</div>
      <div class="item-value">$${item.value}</div>
    </div>
    `;
    dayTotalExpense += item.value;
  });
  expenseDiv.innerHTML += `
  <div class="card">
    <div class="day">${data.date}</div>
    ${expenseItem}
    <div class="day-total-expense">$${roundToTwo(dayTotalExpense)}</div>
  </div>
  `;
  totalExpense += dayTotalExpense;
}

demo.results.forEach((day) => createExpenseCard(day));
expenseDiv.innerHTML =
  `<div class='total-expense'>$${roundToTwo(totalExpense)}</div>` +
  expenseDiv.innerHTML;
