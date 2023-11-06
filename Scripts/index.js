import { listProductos } from "./listproductos.js";
import { insertProducts } from "./insertProducts.js";

/**
 *  Autor: Alejandro García Álvarez
 *  GitHub:
 */

//List of products

document.addEventListener("DOMContentLoaded", listProductos);

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("inventory-tab-form")
    
    btnForm.addEventListener("click", () => {
        insertProducts()
    })
})
