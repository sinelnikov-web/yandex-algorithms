// Сортировка выбором

const arr = [1, 4, 2, 17, 3, 5];

for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[max]) {
            max = j;
        }
    }
    [arr[max], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[max]];
}

console.log({arr});
