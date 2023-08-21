// Сортировка пузырьком

const arr = [1, 4, 2, 17, 3, 5];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}
