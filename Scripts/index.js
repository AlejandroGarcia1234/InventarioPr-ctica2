import { listProductos } from "./listproductos.js";
import { insertProducts } from "./insertProducts.js";
import { totalInv } from "./totalInventory.js"

/**
 *  Autor: Alejandro García Álvarez
 *  GitHub: https://github.com/AlejandroGarcia1234/InventarioPr-ctica2
 */

//Product List

document.addEventListener("DOMContentLoaded", listProductos);

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("inventory-tab-form")
    
    btnForm.addEventListener("click", () => {
        insertProducts()
    })
})

//Valor total del inventario

document.addEventListener("DOMContentLoaded", totalInv);