import { inventory } from "./products.js";
import { listProductos } from "./listproductos.js";
import { totalInv } from "./totalInventory.js";

export const deleteProducts = (item) => {

    if(confirm(`¿Estás seguro de que quieres borrar "${item.nombre}"?`)){
        //Encontramos el índice del producto que queramos eliminar
        const index = inventory.findIndex(product => product.id === item.id)
    
        if(index !== -1){ 
          inventory.splice(index, 1)
        } 
}
const cleanTable = document.getElementById("clean-table");
cleanTable.innerHTML = ""
listProductos()
totalInv(); //Añadiendo esta función aquí conseguimos que al borrar un producto se actualize el valor total del inventario

}
  