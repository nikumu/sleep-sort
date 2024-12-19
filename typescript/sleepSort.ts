function sleepSort(numbers: number[]): void {
  numbers.forEach((num) => {
    setTimeout(() => console.log(num), num);
  });
}

const numbers = [8, 42, 38, 111, 2, 39, 1];
sleepSort(numbers);
