/*saludo inicial, y solicitud de nombre*/
let entrada1 = prompt("Hola, ingresá tu nombre por favor.");
let saludo = ("Hola");
let salida1 = saludo + " " + entrada1 + ", un gusto." ;
alert(salida1);
/* opcion de productos, para indicar precio*/
let entrada2 = parseInt(prompt("A continuación elegí un producto y te diremos el costo final + iva.\n 1-Iphone x.\n 2-Iphone 11.\n 3-Zenfone 6.\n 4-Samsung note 9.  " )); 
let producto = entrada2;
switch (producto){
    case 1:
        precioProducto = 108000;
        break;
    case 2:
        precioProducto = 188000;
        break;
    case 3:
        precioProducto = 197000;
        break;
    case 4:
        precioProducto = 100000;
        break;    
    default:
        alert("No hay más productos")
        break;
}
/*Metodo de pago y calculo de pago*/
let entrada3 = parseInt(prompt("A continuación elija el método de pago.\n 1-Efectivo\n 2-Tarjeta.\n (Tené en cuenta que, en efectivo tenés 10% de descuento.)")); 

/*calculo de iva*/
let iva = precioProducto * 0.21;
let metodoDePago = entrada3;
/*calculo de descuento*/
let descuento = 10 *(precioProducto/100);
/*calculo de cuotas*/
let cuotas = precioProducto /24;
/*suma de iva mas precio*/
let montoconiva = iva + precioProducto;
switch (metodoDePago){
    case 1:
        efectivo = iva + (precioProducto-descuento)
        alert ("Total a pagar en efectivo es de: $"+ efectivo + " pesos")
        break;
    case 2:
        /*calculo metodo de pago en tarjeta, en un solo pago o cuotas*/
        let entrada4 = parseInt(prompt("Opcion: 1- Un solo pago.\nOpcion: 2- 24 cuotas.\n(Teniendo en cuenta que, 24 cuotas tiene un interés del 10%.)"));
        if (entrada4 === 1){
            alert("Monto a pagar es de: $" + montoconiva +" pesos.")
        } else {
            alert("Te quedan 24 cuotas de: $" + cuotas)
        }
        break; 

    default :
        alert("No elegiste ningún método de pago.")
        break;
}


