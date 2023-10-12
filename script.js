const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const n = arr.length;

// Bubble sort algorithm to sort the array in descending order
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        // Swap if the element found is less than the next element
        if (arr[j] < arr[j + 1]) {
            // Swap arr[j] and arr[j + 1]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Array sorted in descending order: ", arr);
