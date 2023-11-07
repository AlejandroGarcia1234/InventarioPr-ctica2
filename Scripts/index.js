/**
 *  Autor: Alejandro García Álvarez
 *  GitHub: https://github.com/AlejandroGarcia1234/InventarioPr-ctica2
 */

import { listProductos } from "./listproductos.js";
import { insertProducts } from "./insertProducts.js";
import { totalInv } from "./totalInventory.js"
import { searchProducts } from "./searchProducts.js";


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

//Botón de búsqueda de productos

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    const searchProduct = searchInput.value;
    searchProducts(searchProduct);
});

