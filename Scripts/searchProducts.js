import { inventory } from "./products.js";


export const searchProducts = (searchProduct) => {
    searchProduct = searchProduct.toLowerCase();
    const cleanTable = document.getElementById("clean-table");
    const invTotal = document.getElementById("quantity"); 

    // Borrar los productos que hay en la tabla
    cleanTable.innerHTML = "";

    invTotal.style.display = "none"; 

    const searchResults = inventory.filter((product) => {
        const productName = product.nombre.toLowerCase();
        const productAuthor = product.autor.toLowerCase();
        return productName.includes(searchProduct) || productAuthor.includes(searchProduct);
    });

    searchResults.forEach((item) => {
        const row = cleanTable.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.innerHTML = item.nombre;
        cell2.innerHTML = item.autor;
        cell3.innerHTML = item.cantidad;
        cell4.innerHTML = item.precio;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "BORRAR";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", () => {
            deleteProducts(item);
        });

        cell5.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.innerText = "EDITAR";
        editButton.addEventListener("click", () => {
            updateProducts(item);
        });

        cell5.appendChild(editButton);
    });
};
