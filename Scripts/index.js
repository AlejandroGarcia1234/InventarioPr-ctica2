import { listProductos } from "./listproductos.js";
import { insertProducts } from "./insertProducts.js";

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


