let Name = prompt("Ingrese el nombre del empleado: ");
let Last_Name = prompt("Ingrese el apellido del empleado: ");
let ID = prompt("Ingrese la cédula del empleado: ");

let H_Mañana = prompt("Ingrese la cantidad de horas diurnas trabajadas: ");
let H_Tarde = prompt("Ingrese la cantidad de horas vespertinas trabajadas: ");
let H_Noche = prompt("Ingrese la cantidad de horas nocturnas trabajadas: ");

let P_Mañana = 675, P_Tarde = 700, P_Noche = 956.23;

let Sueldo = (H_Mañana * P_Mañana) + (H_Tarde * P_Tarde) + (H_Noche * P_Noche);
let Sueldo_Quincenal = Sueldo * 15;

let Descuento_H, Descuento_S;

if (Sueldo < 85000) {
  Descuento_H = Sueldo * 0.1;
  Descuento_S = Sueldo * 0.15;
} else if (Sueldo >= 85000 && Sueldo <= 150000) {
  Descuento_H = Sueldo * 0.15;
  Descuento_S = Sueldo * 0.2;
} else{
  Descuento_H = Sueldo * 0.3;
  Descuento_S = Sueldo * 0.25;
}

let Sueldo_Final = Sueldo_Quincenal - Descuento_H - Descuento_S;

console.log(`Datos personales del empleado: ${Name + ' ' +Last_Name + ' ' + ID}`);
console.log(`Sueldo quincenal sin deducción: ${Sueldo_Quincenal} Bs. F.`);
console.log(`Descuento de ahorro habitacional: ${Descuento_H} Bs. F.`);
console.log(`Descuento de seguro social: ${Descuento_S} Bs. F.`);
console.log(`Sueldo quincenal con deducción: ${Sueldo_Final} Bs.F.`);