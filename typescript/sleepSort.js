function sleepSort(numbers) {
    numbers.forEach(function (num) {
        setTimeout(function () { return console.log(num); }, num);
    });
}
var numbers = [8, 42, 38, 111, 2, 39, 1];
sleepSort(numbers);
