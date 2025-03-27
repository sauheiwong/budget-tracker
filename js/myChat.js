const itemMap = new Map([]);

demo.results.forEach((day) => {
  day.item.forEach((item) => {
    if (!itemMap.has(item.type)) {
      itemMap.set(item.type, item.value);
    } else {
      itemMap.set(item.type, itemMap.get(item.type) + item.value);
    }
  });
});

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [...itemMap.keys()],
    datasets: [
      {
        label: "$",
        data: [...itemMap.values()],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
