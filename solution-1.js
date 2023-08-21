// Сортировка пузырьком

const arr = [1, 4, 2, 17, 3, 5];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}

console.log({arr});
