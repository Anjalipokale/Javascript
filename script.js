

let d = new Date();
let para = document.getElementById('time');

function fun(value) {


    if(value == 1) {
        para.innerText = d.getDate();
    }
    else if(value == 2) {
        para.innerText = d.toLocaleTimeString();  // For readable time format
    }
    else if(value == 3) {
        para.innerText = d.getHours();
    }
    else if(value == 4) {
        para.innerText = d.getMonth() + 1;  // Months are zero-indexed, so +1 to get the correct month
    }
    else if(value == 5) {
        para.innerText = d.getFullYear();
    }
}

