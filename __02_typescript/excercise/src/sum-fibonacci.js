function isFibonacci(a) {
    var check = false;
    if (a == 1) {
        return true;
    }
    if (a < 1) {
        return false;
    }
    var x = 1;
    var y = 1;
    var flag;
    for (var i = 0; y <= a; i++) {
        flag = x;
        x = y;
        y = x + flag;
        if (y == a) {
            check = true;
        }
    }
    return check;
}
console.log(isFibonacci(13));
var sum = 0;
for (var i = 0; i < 30; i++) {
    if (isFibonacci(i)) {
        console.log(i);
        sum = sum + i;
    }
}
console.log(sum);
