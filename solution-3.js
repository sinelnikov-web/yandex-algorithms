// Сортировка вставками

const arr = [9, 1, 4, 2, 17, 3, 5];

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    for (let j = i; j >= 0; j--) {
        if (arr[j - 1] > element) {
            arr[j] = arr[j - 1];
        } else {
            arr[j] = element;
            break;
        }
    }
}

console.log({arr});
