function CallMenu(){
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.Calcular el area del Circulo \r\n 6.Calcular salario semanal \r\n 7. Convertir pulgadas \r\n 8. Cambiar a dolares \r\n 9. Edad de trabajadores \r\n 10. Persona de menor edad \r\n 11. Bono por antiguedad \r\n 12. Calcular el salario  \r\n 13. Calificaciones de alumnos \r\n 14. Contabilizar la cantidad de focos \r\n 15. Determinar si una persona puede votar o no \r\n 16.Salir" )
    );
    if (isNaN(nro_ejercicio)){
        alert("porfavor ingresa valores numericos");
    }
    else{
        MenuEjercicios(nro_ejercicio);
    }
}

function MenuEjercicios(nro_ejercicio){
    do{
        switch(nro_ejercicio){
            case 1:
                let valor1 = parseFloat(prompt("Ingrese el valor 1 a sumar: "));
                let valor2 = parseFloat(prompt("Ingrese el valor 2 a sumar: "));
                alert(ej1_sumarValores(valor1,valor2));
                CallMenu();
                break;
            case 2:
                let ex1 = parseFloat(prompt("Ingrese la primera nota: "));
                let ex2 = parseFloat(prompt("Ingrese la segunda nota: "));
                let ex3 = parseFloat(prompt("Ingrese la tercera nota: "));
                let ex4 = parseFloat(prompt("Ingrese la cuarta nota: "));
                alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4));
                CallMenu();
                break;
            case 3:
                let baseRectangulo = parseFloat(prompt("Ingrese la base del rectangulo: "));
                let alturaRectangulo = parseFloat(prompt("Ingrese la altura del rectangulo: "));
                alert(ej3_calcularAreaRectangulo(baseRectangulo,alturaRectangulo));
                CallMenu();
                break;
            case 4:
                let baseTriangulo = parseFloat(prompt("Ingrese la base del triangulo: "));
                let alturaTriangulo = parseFloat(prompt("Ingrese la altura del triangulo: "));
                alert(eje4_calcularAreaTriangulo(baseTriangulo,alturaTriangulo));
                CallMenu();
                break;
            case 5:
                let radioCirculo = parseFloat(prompt("Ingrese el radio del circulo: "));                
                alert(eje5_calcularAreaCirculo(radioCirculo));
                CallMenu();
                break;
            case 6:
                let salario = parseFloat(prompt("Ingrese su salario: "));
                let hora = parseFloat(prompt("Ingrese la cantidad de horas: "));               
                alert(ej6_CalcularSalario(salario,hora));
                CallMenu();
                break;
            case 7:
                let centimetros = parseFloat(prompt("Ingrese los centimetros para convertir a pulgadas: "));                
                alert(eje7_calcularPulgadas(centimetros));
                CallMenu();
                break;
            case 8:
                let soles = parseFloat(prompt("Ingrese la cantidad en soles para convertir a dolares: "));                
                alert(eje8_calcularDolares(soles));
                CallMenu();
                break;
            case 9:
                let anio = parseInt(prompt("Ingrese el año en que naciste: "));
                alert(eje9_edad(anio));
                CallMenu();
                break;
            case 10:
                let persona1 = prompt("Ingrese el nombre de la primera persona");
                let edad1= parseInt(prompt("Ingrese la edad de la primera persona"));
                let persona2 = prompt("Ingrese el nombre de la segunda persona");
                let edad2= parseInt(prompt("Ingrese la edad de la segunda persona"));
                let persona3 = prompt("Ingrese el nombre de la tercera persona");
                let edad3= parseInt(prompt("Ingrese la edad de la tercera persona"));
                alert(eje10_menor(persona1,edad1,persona2,edad2,persona3,edad3));
                CallMenu();
                break;
            case 11:
                let tiemposervicio = parseInt(prompt("Ingrese la cantidad de años que trabajo: "));
                alert(ej11_bono(tiemposervicio));
                CallMenu();
                break;
            case 12:                
                alert(ej12_sueldoanual());
                CallMenu();
                break;
            case 13:
                let notaAlumno=[];

                let n = parseFloat(prompt("Ingrese la cantidad de alumnos a ingresar: "));
                for(var j=0;j<n;j++){
                    notaAlumno[j]= parseInt(prompt(`Ingrese la nota del alumno numero ${j+1}: `));
                }
                alert(ej13_calificaciones_Alumnos(notaAlumno));

                CallMenu();
                break;
                
                              
            case 14:
                let num_focos = parseInt(prompt("Ingrese la cantidad de focos: "));          
                alert(ej14_calcularFocos(num_focos));
                CallMenu();
                break;                    
            case 15:
                let voto = parseInt(prompt("Ingresa tu edad"));
                alert(ej15_edad(voto));
                CallMenu();
                break;
        
           /*  default:
                alert("No ingresó una opción válida"); */
        }
    }while(nro_ejercicio!==16);  
    
}

function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return "porfavor ingrese valores";
    }
    else{
        return a+b;
    }
}

function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    if(isNaN(ex1) || isNaN(ex2)|| isNaN(ex3)|| isNaN(ex4)){
        return "porfavor ingresa valores"
    }else{
        return (ex1+ex2+ex3+ex4);
    }
}

function ej3_calcularAreaRectangulo(baseRectangulo,alturaRectangulo){
    if(isNaN(baseRectangulo) || isNaN(alturaRectangulo)){
        return "porfavor ingresa los valores"
    }else{
        return "el area del rectangulo es: "+baseRectangulo * +alturaRectangulo;
    }
}
function eje4_calcularAreaTriangulo(baseTriangulo,alturaTriangulo){
    if(isNaN(baseTriangulo) || isNaN(alturaTriangulo)){
        return "porfavor ingresa los valores"
    }else{
        return "el area del rectangulo es: "+(+baseTriangulo * +alturaTriangulo)/2;
    }
}
function eje5_calcularAreaCirculo(radio){
    if(isNaN(radio)){
        return "porfavor ingresa el radio del circulo"
    }else{
        const pi = 3.14
        return "el area del circulo es: "+pi * (radio*radio)+"π";
    }
}
function ej6_CalcularSalario(salario, horas) {
    let resultado = "";
    let limite = 40;
    if (isNaN(salario) || isNaN(horas)) {
      return "Por favor ingrese valores numericos";
    } else {
      if (horas > limite) {
        resultado =
          "Solo se pagaran " +
          limite +
          " horas semanales. Su salario es : " +
          salario * limite;
      } else if (horas > 0 && horas <= limite) {
        resultado = "Su salario es :" + salario * horas;
      }
      return resultado;
    }
  }
function eje7_calcularPulgadas(centimetros){
    if(isNaN(centimetros)){
        return "porfavor ingresa los centimetros"
    }else{
        return "Los centimetros a pulgadas son: "+(+centimetros/2.54);
    }
}
function eje8_calcularDolares(soles){
    if(isNaN(soles)){
        return "porfavor ingresa el monto en soles"
    }else{
        return "La cantidad en dolares es: "+(+soles)/3.90;
    }
}

function eje9_edad(a){
    if(isNaN(a)){
        return "Ingrese un valor valido";
    }
    else{
        return `La edad del empleado es : ${new Date().getFullYear()-a}`;
    }
}

function eje10_menor(persona1,edad1,persona2,edad2,persona3,edad3){
    if(nombre1 === " " || isNaN(edad1) || nombre2 === " " || isNaN(edad2) || nombre3 === " " || isNaN(edad3)){
        return "Por favor, ingresa valores validos"
    }
    else{
        if(edad1<edad2 && edad1<edad3){
            return `La persona ${nombre1} con edad ${edad1} es la menor: `;
        }else if(edad2<edad3 && edad2<edad1){
            return `La persona ${nombre2} con edad ${edad2} es la menor: `;
        }else if(edad3<edad1 &&edad3<edad2){
            return `La persona ${nombre3} con edad ${edad3} es la menor: `;
        }
    }
}

function ej11_bono(tiemposervicio){

    /* Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador */
    if(isNaN(tiemposervicio)){
        return "Ingrese un valor valido";
    }
    else{
        switch(tiemposervicio){
            case 1:
                return `Le pertenece un bono de $100 dolares: `;            
            case 2:
                return `Le pertenece un bono de $200 dolares: `;
            case 3:
                return `Le pertenece un bono de $300 dolares: `;
            case 4:
                return `Le pertenece un bono de $400 dolares: `;
            case 5: 
                return  `Le pertenece un bono de $500 dolares: `;
            default:
                if(tiemposervicio>=6){
                    return  `Le pertenece un bono de $1000 dolares: `;
                }
            break
        }
    }
}

function ej12_sueldoanual()
{
    let text = " ";
    let sueldo = 1500;
    for(count = 0; count < 6 ; count++)
    {
        sueldo *= 1.10;
        text += `En el año ${count+1} es: $${sueldo.toFixed(2)} \r\n `;
    }
    return text;
}

function ej13_calificaciones_Alumnos(notaAlumno){
    let aprobados=0;
    let desaprobados=0;
    let resultado=``;
    for(var j=0;j<notaAlumno.length;j++){
        if(notaAlumno[j]>10){
            aprobados++;
        }
        else{
            desaprobados++;
        }
        resultado=resultado+`\r\nNota \r\n${j+1}: ${notaAlumno[j]}`;
    }
    resultado=resultado+`\r\nAprobados: ${aprobados} \r\nDesaprobados:${desaprobados}`;
    return resultado;
}

function ej14_calcularFocos(num_focos){
    let rojo =0;
    let blanco=0;
    let verde =0;
    if(isNaN(num_focos)){
        return "Ingrese los valores correspondientes";
    }else{
        let focos =0;
        while(focos<num_focos){
            focos= focos+1;
            let menu_focos = prompt("Ingrese el color del foco: \r\n rojo \r \n blanco \r\n verde");
            if(menu_focos =="rojo"){
                rojo = rojo +1;
            }else if(menu_focos =="blanco"){
                blanco = blanco + 1;
            }else{
                verde = verde +1;
            }
        }
        return `El numero total de focos es ${num_focos} \r\n Focos rojos: ${rojo} \r\n Focos blancos: ${blanco} \r\n Focos verdes: ${verde}`;
    }

}
  



function ej15_edad (a){
  if(isNaN(a))
  {
      return "Ingresa un valor válido.";
  }
  else
  {
      if(a > 17)
      {
          return "Puedes votar.";
      }
      else
      {
          return "No tienes la edad para votar."
      }
  }
}