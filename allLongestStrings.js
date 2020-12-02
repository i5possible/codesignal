function allLongestStrings(inputArray) {
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}



