// Use of Array.shift()
function sortByHeight(a) {
    let min;
    for (let i = 0; i < a.length; i++) {
        min = i;
        if (a[i] === -1) {
            continue;
        }
        for (let j = i; j < a.length; j++) {
            if (a[j] === -1) {
                continue;
            }
            if (a[j] < a[min]) {
                min = j
            }
        }

        let temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
    return a;
}

function sortByHeight(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }

        return -1;
    })
}


/*
For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/
