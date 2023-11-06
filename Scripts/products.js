export { inventory };

// Cantidades aleatorias entre 1 y 30
const getRandomQuantity = () => {
  return Math.floor(Math.random() * 30) + 1;
};

function getRandomQuantityTraditional(params) {
    
}

const inventory = [
    { id: 1, nombre: "One Piece", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 2, nombre: "Berserk", cantidad: getRandomQuantity(), precio: 9.95 },
    { id: 3, nombre: "20th Century Boys", cantidad: getRandomQuantity(), precio: 20.75 },
    { id: 4, nombre: "Monster", cantidad: getRandomQuantity(), precio: 21.95 },
    { id: 5, nombre: "Naruto", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 6, nombre: "Bleach", cantidad: getRandomQuantity(), precio: 6.95 },
    { id: 7, nombre: "Bobobo", cantidad: getRandomQuantity(), precio: 12.95 },
    { id: 8, nombre: "Uzumaki", cantidad: getRandomQuantity(), precio: 30.95 },
    { id: 9, nombre: "Mushishi", cantidad: getRandomQuantity(), precio: 25.95 },
    { id: 10, nombre: "Evangelion", cantidad: getRandomQuantity(), precio: 25.99 },
    { id: 11, nombre: "Jujutsu Kaisen", cantidad: getRandomQuantity(), precio: 8.95 },
    { id: 12, nombre: "JoJo's Bizarre Adventure", cantidad: getRandomQuantity(), precio: 19.95 },
    { id: 13, nombre: "Nausicaa", cantidad: getRandomQuantity(), precio: 50.95 },
    { id: 14, nombre: "Hellsing", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 15, nombre: "Afro Samurai", cantidad: getRandomQuantity(), precio: 14.95 },
    { id: 16, nombre: "Akira", cantidad: getRandomQuantity(), precio: 32.95 },
    { id: 17, nombre: "Battle Royale", cantidad: getRandomQuantity(), precio: 18.95 },
    { id: 18, nombre: "Blame!", cantidad: getRandomQuantity(), precio: 12.75 },
    { id: 19, nombre: "Death Note", cantidad: getRandomQuantity(), precio: 29.99 },
    { id: 20, nombre: "Ghost in the Shell", cantidad: getRandomQuantity(), precio: 14.95 },
    { id: 21, nombre: "Pluto", cantidad: getRandomQuantity(), precio: 24.95 },
    { id: 22, nombre: "Shaman King", cantidad: getRandomQuantity(), precio: 20.75 },
    { id: 23, nombre: "Trigun", cantidad: getRandomQuantity(), precio: 10.95 },
    { id: 24, nombre: "Wanted!", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 25, nombre: "Dragon Ball", cantidad: getRandomQuantity(), precio: 16.85 },
];