import { inventory } from "./products.js";

export const totalInv = () => {

    const total = document.getElementById("inv-total");
    let totalPrice = 0;

    inventory.forEach((item) => {
      totalPrice += parseInt(item.cantidad) * parseFloat(item.precio);
    });
    
    total.innerText = totalPrice.toLocaleString() + "€";

  };