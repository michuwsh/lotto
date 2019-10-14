var losuj = document.getElementById("losuj");
var wynik = document.querySelector(".wynik");
var tablica = [];
var value = 0;
losuj.addEventListener("click", () => {
    for(var i = 0; i < 6; i++) {
        sprawdzLiczbe();
    }
    wynik.innerHTML = tablica;
    tablica = [];
});

losujLiczbe = () => {
    return Math.floor(Math.random() * 49);
}
sprawdzLiczbe = () => {
    value = losujLiczbe();
    if(value != 0 && tablica.indexOf(value) == -1) {
        tablica.push(value);
    } else {
        sprawdzLiczbe();
    }
}

