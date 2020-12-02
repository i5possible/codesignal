String reverseInParentheses(String inputString) {
    StringBuilder str = new StringBuilder(inputString);
    int start, end;
    while(str.indexOf("(") != -1){
        start = str.lastIndexOf("(");
        end = str.indexOf(")", start);
        str.replace(start, end + 1, new StringBuilder(str.substring(start+1, end)).reverse().toString());
    }
    return str.toString();
}

function reverseInParentheses(s) {
    while (true) {
        let c = s.indexOf(")");

        if (c === -1) {
            break;
        }

        let o = s.substring(0, c).lastIndexOf("(");

        let start = s.substring(0, o);
        let middle = s.substring(o + 1, c).split("").reverse().join("");
        let end = s.substring(c + 1, s.length);

        s = start + middle + end;
    }

    return s;
}


