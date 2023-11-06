import { inventory } from "./products.js";
import { listProductos } from "./listproductos.js";

export const insertProducts = () => {
    const productForm = document.getElementById("inventory-tab-form")
    productForm.addEventListener("submit", function(event){
        // Le quitamos las propiedades a la etiqueta form
        event.preventDefault()

        //Capturar los valores introducidos por el usuario
        const productName = document.getElementById("product-name").value;
        const productQuantity = parseInt(document.getElementById("product-qty").value);
        const productPrice = parseFloat(document.getElementById("product-price").value);

        if (productName && !isNaN(productQuantity) && !isNaN(productPrice)){

            //Crear un nuevo objeto producto
            const newProduct = {
                id: inventory.length +1,
                nombre: productName,
                cantidad: productQuantity,
                precio: productPrice
        }

            //Agregar el nuevo producto al inventario
            inventory.push(newProduct)

            const cleanTable = document.getElementById("clean-table")

            //Limpiar la tabla antes de una nueva insercion
            cleanTable.innerHTML = ""

            //Limpiar los cambios del formulario
            productForm.reset();

            listProductos();

        }
})
}
