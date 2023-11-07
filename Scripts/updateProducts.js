// Esto es lo que conseguí hacer, si tocaba una cosa se me rompía otra así que te lo dejo comentado
// para que veas que al menos lo intente.

/*
import { inventory } from "./productos.js";
import { totalInv } from "./totalInventory.js";


const editProduct = (item) => {
  const newName = prompt("Ingrese el nuevo nombre:", item.nombre);
  
  if (newName === null || newName.trim() === "") {
    return;
  }
  
  const newAuthor = prompt("Ingrese el nuevo autor:", item.autor);
  
  if (newAuthor === null) {
    return;
  }
  
  let newQuantity = parseInt(prompt("Ingrese la nueva cantidad:", item.cantidad), 10);
  
  if (isNaN(newQuantity)) {
    return;
  }
  
  let newPrice = parseFloat(prompt("Ingrese el nuevo precio:", item.precio);
  
  if (isNaN(newPrice)) {
    return;
  }


  item.nombre = newName;
  item.autor = newAuthor;
  item.cantidad = newQuantity;
  item.precio = newPrice;

 
  totalInv();

 
  listProductos();
};

*/
