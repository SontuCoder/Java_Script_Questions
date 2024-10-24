// ======================================
// Programming Question: Sort an Array
//=======================================

// Write a function to sort an array of numbers in an ascending order.
// Example usage:
console.log(sortAscending([5, 3, 1, 8])); // Output: (1, 3, 5, 8]
console.log(sortAscending ([5, 3, 10, 8])); // Output: [3, 5, 8,10]
//todo Requirements:
// The function should take an array of numbers as input.
// It should return a new array with the numbers sorted in ascending order.
// The original array should remain unchanged.
// You are not allowed to use the built-in sort() method.


function merge(arr, low, mid, high) {
    let left = arr.slice(low, mid + 1); // Left half
    let right = arr.slice(mid + 1, high + 1); // Right half
    let i = 0, j = 0, k = low;
    // Merge the two halves
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }
    // Copy any remaining elements of left half (if any)
    while (i < left.length) {
        arr[k++] = left[i++];
    }
    // Copy any remaining elements of right half (if any)
    while (j < right.length) {
        arr[k++] = right[j++];
    }
}

function mergeSort(arr, low, high) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);

        // Recursively sort first and second halves
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);

        // Merge the sorted halves
        merge(arr, low, mid, high);
    }
}

function sortAscending(arr) {
    const new_arr = arr.slice(); // Copy the array to avoid modifying the original
    mergeSort(new_arr, 0, new_arr.length - 1);// Sort the copy
    console.log("original",arr)
    return new_arr; // Return the sorted array
}
