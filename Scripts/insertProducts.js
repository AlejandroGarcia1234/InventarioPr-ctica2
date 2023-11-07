import { inventory } from "./products.js";
import { listProductos } from "./listproductos.js";
import { totalInv } from "./totalInventory.js";

export const insertProducts = () => {
    const productForm = document.getElementById("inventory-tab-form")
    productForm.addEventListener("submit", function(event){
        // Se quitan propiedades a la etiqueta form
        event.preventDefault()

        const productName = document.getElementById("product-name").value;
        const productAuthor = document.getElementById("product-author").value;
        const productQuantity = parseInt(document.getElementById("product-qty").value);
        const productPrice = parseFloat(document.getElementById("product-price").value);

        if (productName && productAuthor && !isNaN(productQuantity) && !isNaN(productPrice)){

            //Creamos un nuevo objeto producto
            const newProduct = {
                id: inventory.length +1,
                nombre: productName,
                autor: productAuthor,
                cantidad: productQuantity,
                precio: productPrice
        }

            //Agregamos el nuevo producto a nuestro inventario
            inventory.push(newProduct)

            const cleanTable = document.getElementById("clean-table")

            //De esta manera limpiamos la tabla antes de realizar una nueva inserción
            cleanTable.innerHTML = ""

            //Limpiamos cualquier cambio en el formulario
            productForm.reset();

            listProductos();
            totalInv(); //Añadiendo esta función aquí conseguimos que al añadir un producto se actualize el valor total del inventario

        }
})
}
