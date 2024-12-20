numbers = [8, 42, 38, 111, 2, 39, 1];

numbers.forEach((num) => {
  setTimeout(() => {
    console.log(num);
  }, num);
});
