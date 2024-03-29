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

console.log(repeatedString_2("a"));

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
function sum_2(a,b) {
    let total_3 = 0;
    if (a > b) {
        for (let i = b + 1; i < a; i++) {
            total_3 += i;
        }
        return total_3;
    } else if (b > a) {
        for(let j = a + 1; j < b; j++) {
            total_3 += j;
        }
        return total_3;
    }
}

console.log(sum_2(3,8));


// BT7:
let check_1 = (a) => {
    if (a <= 1) {
        console.log("False");
    } else {
        // Factors of a number cannot be greater than its square root.
        // Any number less than 2 is not a prime number.
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                console.log("False");
                return; // Inside the loop, if we find a divisor of a, we should print "False" and return immediately.
            }
        }
        console.log("True");
    }
}

check_1(6);


// BT8:
let sum_3 = (a) => {
    let total_4 = 0;
    for (let i = 2; i <= a; i++) {
        let Prime = true; // Assume the number is prime
        if (a > 1) {
            for (let j = 2; j <= Math.sqrt(i); j++) { 
                if (i % j == 0) {
                    Prime = false; // The number defines as not a prime num
                    break; // Exit the inner loop -> Continue looking for prime
                }
            }
        }
        // Using the true prime number from line 107
        if (Prime) {
            total_4 += i;
    } 
    }
    return total_4;
}

console.log(sum_3(3));

// BT9:
let sum_4 = (a) => {
    let total_5 = 0;
    for (let i = 1; i <= a; i++) {
        let Divisor = true;
        if (a % i != 0) {
            Divisor = false;
        }
        if (Divisor) {
            total_5 += i;
        }
    }
    return total_5; 
}

console.log(sum_4(4));


