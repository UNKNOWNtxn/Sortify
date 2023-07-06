
export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {

            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

export function bubbleSort(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    let len = auxiliaryArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                animations.push([j, auxiliaryArray[j + 1]]);
                animations.push([j + 1, auxiliaryArray[j]]);
                let tmp = auxiliaryArray[j];
                auxiliaryArray[j] = auxiliaryArray[j + 1];
                auxiliaryArray[j + 1] = tmp;
            } else {
                animations.push([j, auxiliaryArray[j]]);
                animations.push([j + 1, auxiliaryArray[j + 1]]);
            }
        }
    }
    return animations;
}

export function insertionSort(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    for (let i = 1; i < auxiliaryArray.length; i++) {
        let j = i;
        animations.push(["comparison", i, j]);
        while (j > 0 && auxiliaryArray[j] < auxiliaryArray[j - 1]) {
            animations.push(["swap", j, j - 1]);
            swap(auxiliaryArray, j, j - 1);
            j--;
        }
        animations.push(["overwrite", j, auxiliaryArray[j]]);
    }
    return animations;
}

function heapify(auxiliaryArray, n, i, animations) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && auxiliaryArray[left] > auxiliaryArray[largest]) {
        largest = left;
    }
    if (right < n && auxiliaryArray[right] > auxiliaryArray[largest]) {
        largest = right;
    }
    if (largest !== i) {
        animations.push([i, largest]);
        animations.push([i, largest]);
        animations.push([i, auxiliaryArray[largest]]);
        animations.push([largest, auxiliaryArray[i]]);
        let swap = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[largest];
        auxiliaryArray[largest] = swap;
        heapify(auxiliaryArray, n, largest, animations);
    }
}

export function heapSort(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    let n = auxiliaryArray.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(auxiliaryArray, n, i, animations);
    }
    for (let i = n - 1; i > 0; i--) {
        animations.push([0, i]);
        animations.push([0, i]);
        animations.push([0, auxiliaryArray[i]]);
        animations.push([i, auxiliaryArray[0]]);
        let temp = auxiliaryArray[0];
        auxiliaryArray[0] = auxiliaryArray[i];
        auxiliaryArray[i] = temp;
        heapify(auxiliaryArray, i, 0, animations);
    }
    return animations;
}

export function quickSort(array, startIdx = 0, endIdx = array.length - 1, animations = []) {
    if (startIdx >= endIdx) return array;
    let pivotIndex = partition(array, startIdx, endIdx, animations);
    quickSort(array, startIdx, pivotIndex - 1, animations);
    quickSort(array, pivotIndex + 1, endIdx, animations);
    return animations;
}

function partition(array, startIdx, endIdx, animations) {
    const pivotValue = array[endIdx];
    let pivotIndex = startIdx;
    for (let i = startIdx; i < endIdx; i++) {
        animations.push([i, endIdx, "compare"]);  // compare array[i] with pivot
        if (array[i] < pivotValue) {
            animations.push([i, pivotIndex, "swap"]);  // these two values will be swapped
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    animations.push([pivotIndex, endIdx, "swap"]);  // final swap to put pivot in correct place
    swap(array, pivotIndex, endIdx);
    return pivotIndex;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}

