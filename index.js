let seleccionUsuario = "";
let nombreUsuario = "";

let menuPrincipal = 0;


nombreUsuario = prompt("¿Cuál es su nombre?");
alert("Bienvenido/a al sitio de Programas Profesionales "+ nombreUsuario);

const consultarPrograma = (numero) => {
  switch (numero) {
    case 1:
      return "Mi Primer Estudio";    
    case 2:
      return "Tu Nuevo Rol";
    case 3:
      return "Generación X";
    case 4:
      return "Asociatividad";
    case 5: 
      return "Tiempo de Balance"; 
    case 6: 
      return "Mi Vocación"; 
    default:
        return null;
  }
};

const consultarPrecio = (numero) => {
  switch (numero) {
    case 1:
      return 8000;
    case 2:
      return 10000;
    case 3:
      return 6000;
    case 4: 
      return 6500;
    case 5:
      return 5500;
    case 6:
      return 4000;
    default:
      return 0;
  }
};

while (menuPrincipal !== 2) {
  seleccionUsuario = parseInt(
    prompt(
      "Seleccione el Programa al que desea inscribirse: \n1. Mi Primer Estudio: $8000 \n 2. Tu Nuevo Rol: $10000\n 3. Generación X: $6000 \n 4. Asociatividad: $6500 \n 5. Tiempo de Balance: $5500 \n 6. Mi Vocación: $4000"
    )
  );


  if (isNaN(seleccionUsuario)) {
    alert("No seleccionó ningún programa");
  } else if ((seleccionUsuario > 0) && (seleccionUsuario < 7)) {
    console.log(seleccionUsuario);
    alert(
      "Usted se inscribió en " +
        consultarPrograma(seleccionUsuario) +
        ", debe abonar $" +
        consultarPrecio(seleccionUsuario)
    );
    menuPrincipal= parseInt(
        prompt("¿Desea inscribirse en otro programa? \n 1. Si \n 2. No")
      );
  }else {
    alert("Opcion invalida");
  }
}

if (menuPrincipal == 2){
    alert("La inscripción se realizó con éxito, usted va a ser derivado a la plataforma de pago. ¡Muchas gracias por visitarnos!")
}
