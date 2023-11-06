import { inventory } from "./products.js";
import { listProductos } from "./listproductos.js";

export const insertProducts = () => {
    const productForm = document.getElementById("inventory-tab-form")
    productForm.addEventListener("submit", function(event){
        // Se quitan propiedades a la etiqueta from
        event.preventDefault()

        const productName = document.getElementById("product-name").value;
        const productQuantity = parseInt(document.getElementById("product-qty").value);
        const productPrice = parseFloat(document.getElementById("product-price").value);

        if (productName && !isNaN(productQuantity) && !isNaN(productPrice)){

            //Creamos un nuevo objeto producto
            const newProduct = {
                id: inventory.length +1,
                nombre: productName,
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

        }
})
}
