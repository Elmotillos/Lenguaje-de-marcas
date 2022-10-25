var tablas = prompt("Introduce hasta que tabla deseas: ");

for(var i = 1; i <= tablas; i++){
    if(i != 1){
        document.write("<br>");
        document.write("<br>");
    }

    document.write("Tabla del "+ i+"<br>");
    for(var j = 1; j <=10; j++){
        document.write(i + " * " + j + " = " + (i*j) + "<br>");

    }
}