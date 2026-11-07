function appendValue(value) {
    document.getElementById("tampilan").value += value;
}

function clearDisplay() {
    document.getElementById("tampilan").value = "";
}

function calculate() {
    const tampilan = document.getElementById("tampilan");

try {
    tampilan.value = eval(tampilan.value);
}
catch {
    tampilan.value = "Error" ;
}
}