function random(m){ 
    return Math.floor(Math.random()*m+1);
}

function max(a, b) {
    if (a > b) {
        return a;
    } 
	else {
        return b;
    }
}

function lastChar(arr) {
	return arr[arr.length-1]
}

function squares(a, b) {
    return a * a + b * b;
}
function squares(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2)
}

function leapYear(y) {
    //    console.log(y%4===0);
    //    console.log(y%100!=0);
    //    console.log(y%400===0);
    //    console.log(y % 100 != 0 || y % 400 === 0);

    //    var yy = y % 100 != 0 || y % 400 === 0;
    //    console.log(y % 4 === 0 && yy);
	
    if (y % 4 === 0 && (y % 100 != 0 || y % 400 === 0)) {
        return "yes"
    }
    else {
        return "no"
    }
}