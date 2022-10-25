
var num = parseInt(prompt("Introduce hasta que número es la suma:"));
if (isNaN(num)) {
    alert("Este no es un valor válido");
}
var suma = 0;

for (var i = 1; i <= num; i++) {
    suma += i; 
}

document.write("La suma es: "+suma);