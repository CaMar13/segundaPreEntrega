//variables
//NOMBRE USUARIO//
let usuario = prompt("Hola, ingresa tu nombre por favor")

//PROCESO: VALIDAR ZONA DE ENTREGA CON CODIGO POSTAL//
let codigoPostal = prompt("Hola" +"  "+ usuario +"  "+ "vamos a necesitar validar la zona de entrega." +"  "+ "Por favor ingresa tu código postal");

//PROCESO A SEGUIR SI EL USUARIO ESTA DENTRO DE LA ZONA DE ENTREGA//
console.log(codigoPostal);
if (codigoPostal == 1602 || codigoPostal == 1636 || codigoPostal == 1638 || codigoPostal == 1640) {
    alert(usuario +"  "+"estas dentro de la zona de entrega, ahora a elegir que probar");

    //ARRAY: LISTA PRODUCTOS//
    const productos = [
      {nombre: "Tarta de frutilla", precio: 9000},
      { nombre: "Cookie box", precio: 3500 },
      { nombre: "Cheesecake de arandanos", precio: 8200 },
      { nombre: "Torta Koala", precio: 9000 },
      { nombre: "Pasion de chocolate", precio: 10000 },
      { nombre: "OREO Cheesecake", precio: 8000 },
      { nombre: "Budin de pistachos", precio: 4700 },
      { nombre: "Tarde de moras", precio: 7000 },
      { nombre: "Selva negra", precio: 8400 },
      { nombre: "Angel Cake", precio: 4600 },
      { nombre: "Budin de chocolate", precio: 5000 },
      { nombre: "Torta brownie", precio: 8000 },
    ];
    //ARRAY: CARRITO VACIO//
    let carrito = []
    
    //METODO ENTRADA//
    let seleccion = prompt(usuario +" "+"quieres iniciar la compra ahora si o no ?")
    
    //BUCLE//
    while(seleccion != "si" && seleccion !="no"){
      alert("por favor igresa si o no")
      seleccion = prompt("Hola desea agregar algo al carrito si o no")
    }
    
    //INDICAMOS QUE PASA SI LA RESPUESTA ES SI O NO//
    if(seleccion == "si"){
    alert("A continuación tienes nuestra lista de productos.")
    console.log(productos)

    let todoslosProductos = productos.map(
      (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join("-"))
    } else if (seleccion == "no"){
    alert("Gracias por pasar por aqui, hasta pronto !")
    }
    
    //BUCLE//
    while(seleccion != "no"){
    let producto = prompt("agregar un producto a tu carrito")
    let precio = 0
    
    if(producto == "Tarta de frutilla" || producto == "Cookie box" || producto == "Cheesecake de arandanos" || producto == "Torta Koala" ||
    producto == "Pasion de chocolate" || producto == "OREO Cheesecake" || producto == "Budin de pistachos" || producto == "Tarde de moras" ||
    producto == "Selva negra" || producto == "Angel Cake" || producto == "Budin de chocolate" || producto == "Torta brownie"){
      switch (producto) {
        case "Tarta de frutilla":
          precio = 9000;
          break;
        case "Cookie box":
          precio = 3500;
          break;
        case "Cheesecake de arandanos":
          precio = 8200;
          break;
        case "Torta Koala":
          precio = 9000;
          break;
        case "Pasion de chocolate":
          precio = 10000;
          break;
        case "OREO Cheesecake":
          precio = 8000;
          break;
        case "Budin de pistachos":
          precio = 4700;
          break;
        case "Tarde de moras":
          precio = 7000;
          break;
        case "Selva negra":
          precio = 8400;
          break;
        case "Angel Cake":
          precio = 4600;
          break;
        case "Budin de chocolate":
          precio = 5000;
          break;
        case "Torta brownie":
          precio = 8000;
          break;
        default:
          break;
      }
    //VARIABLE PARA EL INGRESO DE CANTIDAD//
    let unidades = parseInt(prompt("Cuantas unidades necesitas?"))
    
    //PUSH INGRESO DE LOS OBJETOS/PRODUCTOS DENTRO DEL CARRITO//
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }else {
      alert("Lo sentimos pero no tenemos ese producto")
    }
    
    //VARIABLE CONSULTA PARA QUE NO TENGA UN BUCLE INFINITO//
    seleccion = prompt("Deseas seguir comprando?")
    
    //BUCLE//
    while(seleccion === "no"){
      alert("Gracias por tu compra, esperamos que la disfrutes! Hasta pronto")
      carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
      })
    //FINAL BUCLE//
    break;
    }
    }
    //PARA SUMAR EL PRECIO Y LAS UNIDADES//
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    console.log(`El total a pagar es: ${total}`)


//SI EL USUARIO NO ESTA DENTRO DE LA ZONA DE ENTREGA SE LE AVISA Y SE CIERRA EL PROCESO SIN INICIAR EL CARRO//
}else{
    alert(usuario +"  "+"lo sentimos no estás dentro de la zona de entrega, pero no te preocupes te esperamos todas las tardes en nuestro local.");
}
console.log("Fin del proceso");
