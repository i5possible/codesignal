function isWheel(adj) {
    let res = [];
    for (let i = 0; i < adj.length; i++) {
        res[i] = 0;
        for (let j = 0; j < adj.length; j++) {
            if (adj[i][j] && i !== j) {
                res[i]++;
            }
            if (adj[i][j] && i == j) {
                return false;
            }
        }
    }
    let threeAdj = 0;
    let minusOneAjd = 0;
    for (let i = 0; i < adj.length; i++) {
        if (res[i] === 3) {
           threeAdj++; 
        } 
        if (res[i] === adj.length - 1) {
            minusOneAjd++;
        }
    }
    if (adj.length === 4 && threeAdj === adj.length) {
        return true;
    }

    if (threeAdj === adj.length - 1 && minusOneAjd === 1) {
        return true;
    }
    return false;
}


/**
[[false,true,false,true,true,false],
 [true,false,true,false,false,true],
 [false,true,false,true,false,true],
 [true,false,true,false,true,false],
 [true,false,false,true,false,true],
 [false,true,true,false,true,false]]
**/
