// BT1:
let repeatedString = (a) => {
   let result_1 = "";
   for (let i = 0; i < 10; i++) {
    result_1 += a;
   }
   return result_1;  
}

console.log(repeatedString("a"));

// BT2:
let repeatedString_2 = (a) => {
    let result_2 = "";
    for (let i = 0; i < 10; i++) {
        if(i > 0) {
            result_2 += "-";
        }
        result_2 += a
    }
    return result_2;
}

console.log(repeatedString_2("123"));

// BT3:
let repeatedString_3 = (a,b) => {
    let value_1 = "";
    for (let i = 0; i < b; i++) {
        if(i > 0) {
            value_1 += "-";
        }
        value_1 += a
    }
    return value_1;
}

console.log(repeatedString_3("a", 5));

// BT4:
let sum_1 = () => {
    let total = 0;
    for (let i = 0; i < 100; i++) {
        if (i % 5 == 0) {
            total += i
        }
    }
    return total;
}

console.log(sum_1());

// BT5:
let r = (a) => {
    let total_1 = 1;
    let total_2 = 0;
    for (i = 0; i < a; i++) {
        total_1 *= a;
        }
    total_2 = total_1 * Math.PI * 4/3;
    return total_2;
}

console.log(r(3));

// BT6:
let sum_2 = (a,b) => {
    let total_3 = 0
    for (let i = 0; a < i < b || b < i < a; i++) {
        total_3 += i;
    }
    return total_3;
}

console.log(sum_2(3,8));