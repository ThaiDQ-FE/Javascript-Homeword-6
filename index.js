total = 0;
number = 1;
check = document.getElementById('checkCheck');
document.getElementById('btnCheck').addEventListener('click', function () {
    integer = +Math.abs(document.getElementById('txtInteger').value);
    if(integer == 0){
        check.innerHTML = 'This is bug';
    }else {
        while (total < integer) {
            total += number; 
            number++;
        }
        document.getElementById('txtResultInteger').innerHTML = integer;
        document.getElementById('txtResultTotal').innerHTML = total;
        check.innerHTML = 'The smallest integer is: ' + number;
    }
})


// 


document.getElementById('btnCalculate').addEventListener('click', function () {
    valueX = +Math.abs(document.getElementById('txtIntegerX').value);
    valueN = +Math.abs(document.getElementById('txtIntegerN').value);
    recipe(valueX,valueN);

})

function recipe(x,n) {
    var total = 0;
    for (let index = 1; index <= n; index++) {
        total = Math.pow(x,index);
    }
    document.getElementById('resultCalculate').innerHTML = 'Result: ' + total;
}

// 
