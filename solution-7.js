// Сортировка слиянием

const arr = [1, 4, 2, 17, 3, 5];

function mergeArrays(arr1, arr2) {
    const result = [];
    let firstPointer = 0;
    let secondPointer = 0;
    while (firstPointer < arr1.length || secondPointer < arr2.length) {
        if (firstPointer >= arr1.length) {
            for (let i = secondPointer; i < arr2.length; i++) {
                result.push(arr2[i]);
            }
            break;
        }
        if (secondPointer >= arr2.length) {
            for (let i = firstPointer; i < arr1.length; i++) {
                result.push(arr1[i]);
            }
            break;
        }
        if (arr1[firstPointer] > arr2[secondPointer]) {
            result.push(arr2[secondPointer]);
            secondPointer++;
        } else {
            result.push(arr1[firstPointer]);
            firstPointer++;
        }
    }
    return result;
}
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return mergeArrays(left, right);
}

console.log(mergeSort(arr));