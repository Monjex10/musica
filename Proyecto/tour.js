let nombreUsuario = prompt("Hola, decime tu nombre:");
while (nombreUsuario.length < 3) {
  nombreUsuario = prompt("Debes ingresar un nombre con mas de dos letras");
}

let edad = parseInt(prompt("Ahora tu edad por favor..."));
while (edad <0 && edad>100) {
  edad = prompt("Ingrese un numero por favor...)");
}
alert("Gracias " + nombreUsuario + " de " + edad + " años, queres entradas?");

let tickets = {
  BuenosAires: 0,
  Cordoba: 1,
  Mendoza: 100,
  Jujuy: 80,
  SanPablo: 12,
};

function getTickets(place) {
 disableSoldOutButtons(tickets);
  if (tickets[place] > 0) {
    swal("Sold!", `You have tickets to the ${place} concert`, "success");
    tickets[place]-- 
    if (tickets[place] == 0) {
      disableSoldOutButtons(place);
    }
  } else {
    swal(
      "Oh no!",
      `You are outta luck!, there are no more tickets for ${place}`,
      "info"
    );
  }
}