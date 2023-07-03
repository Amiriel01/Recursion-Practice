//this will seperate the array into two pieces and return the sorted list for each//
function mergeSort(arr) {
    if(arr.length <=1) {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

//this will merge the left and right side of the array//
function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right [0]) {
            result.push(left.shift())
        }else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}
