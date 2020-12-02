function commonCharacterCount(s1, s2) {
    let m = {};
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (!m[s1[i]]) {
            m[s1[i]] = 1;
        } else {
            m[s1[i]]++;
        }
    }
    for (let j = 0; j < s2.length; j++) {
        if(m[s2[j]] > 0) {
            m[s2[j]]--;
            count++;
        }
    }
    return count;
}
/**
For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.
**/
