import { inventory } from "./products.js";

export const listProductos = () => {
  const table = document.getElementById("inventory-table");
  const cleanTable = document.getElementById("clean-table")

  inventory.forEach((item) => {
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
    deleteButton.addEventListener("click", () => {
   
      if(confirm(`¿Estás seguro de que quieres borrar "${item.nombre}"?`)){
        //Encontramos el índice del producto que queramos eliminar
        const index = inventory.findIndex(product => product.id === item.id)

        if(index !== -1){ 
          inventory.splice(index, 1)
        } 

      }

      cleanTable.innerHTML = ""
      listProductos()
    });

    cell5.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.innerText = "EDITAR";
    editButton.addEventListener("click", () => {

    });

    cell5.appendChild(editButton);
  });
};
