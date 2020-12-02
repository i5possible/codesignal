function makeArrayConsecutive2(sequence) {
  return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
}

function makeArrayConsecutive2(statues) {
    let min = 21, max = -1;
    for (let i = 0; i < statues.length; i++) {
        if (statues[i] > max) {
            max = statues[i];
        }
        if (statues[i] < min) {
            min = statues[i];
        }
    } 
    return max - min + 1 - statues.length;
}

