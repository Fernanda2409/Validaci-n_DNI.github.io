

document.getElementById('FormuDni').addEventListener('submit', function (e) {
    e.preventDefault(); 

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var dniN = document.getElementById('dniN').value.trim();
    var dniL = document.getElementById('dniL').value.trim().toUpperCase();
    if(dniN ===""){
        alert("Ingresa un número de DNI.");

    }else if(isNaN(dniN)){
        alert("El numero del DNI no es correcto, ingresa un número")
   
    }else if (dniN < 0 || dniN > 99999999) {
        alert("El número de DNI no es válido." + "\n" +
            "Debe estar en un rango entre 0 y 99999999."
        );
        return;
    }


  
    if(dniL === ""){
        alert("El campo de letra del DNI esta vacio, ingresa una letra de DNI.")
  
    }else if (!isNaN(dniL) && dniL !=="") {
        alert("La letra del DNI no es válida. Ingrese solo una letra.");
        
    }else if (dniL.length !== 1){
        alert("Debe ser solo una letra de DNI")
        return;
    }


    var calculo = letras[dniN % 23];


    if (calculo !== dniL && dniL !=="" && !isNaN(dniN) && dniN> 0 && dniN < 99999999) {
        alert("La letra indicada no es correcta.");
        return;
    }
  
    if(calculo == dniL && dniN !==""){
        alert("El número y la letra del DNI son correctos.");
        return;
    }
});
