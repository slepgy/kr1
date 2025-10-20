function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    let m = parseInt(elementM.value);
    let k = parseInt(elementK.value);
    console.log(a, b, c, m, k)

 let result, check;
    if (a <= m && b <= k) {
        result = "Войдет";
        check = true;
    }
    else if (a <= m && c <= k) {
        result = "Войдет";
        check = true;
    }
    else if (b <= m && a <= k) {
        result = "Войдет";
        check = true;
    }
    else if (b <= m && c <= k) {
        result = "Войдет";
        check = true;
    }
    else if (c <= m && a <= k) {
        result = "Войдет";
        check = true;
    }
    else if (c <= m && b <= k) {
        result = "Войдет";
        check = true;
    }
    else {
        result = "Не войдет";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    let resultValue = document.getElementById("result").value;
    
    if (resultValue === "Войдет") {
        document.getElementById("UserEnter").submit();
    } 
    else {
        alert("Есть недостатки. Повторите ввод")
    }
}


const elementA = document.getElementById("A");
const elementB = document.getElementById("B");
const elementC = document.getElementById("C");
const elementM = document.getElementById("M");
const elementK = document.getElementById("K");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)

