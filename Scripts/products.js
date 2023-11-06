export { inventory };

// Cantidades aleatorias entre 1 y 30
const getRandomQuantity = () => {
  return Math.floor(Math.random() * 30) + 1;
};

function getRandomQuantityTraditional(params) {
    
}

const inventory = [
    { id: 1, nombre: "One Piece", autor: "Eiichiro Oda", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 2, nombre: "Berserk", autor: "Kentaro Miura", cantidad: getRandomQuantity(), precio: 9.95 },
    { id: 3, nombre: "20th Century Boys", autor: "Naoki Urasawa", cantidad: getRandomQuantity(), precio: 20.75 },
    { id: 4, nombre: "Monster", autor: "Naoki Urasawa", cantidad: getRandomQuantity(), precio: 21.95 },
    { id: 5, nombre: "Naruto", autor: "Masashi Kishimoto", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 6, nombre: "Bleach", autor: "Tite Kubo", cantidad: getRandomQuantity(), precio: 6.95 },
    { id: 7, nombre: "Bobobo", autor: "Yoshio Sawai", cantidad: getRandomQuantity(), precio: 12.95 },
    { id: 8, nombre: "Uzumaki", autor: "Junji Ito", cantidad: getRandomQuantity(), precio: 30.95 },
    { id: 9, nombre: "Mushishi", autor: "Yuki Urushibara", cantidad: getRandomQuantity(), precio: 25.95 },
    { id: 10, nombre: "Evangelion", autor: "Yoshiyuki Sadamoto", cantidad: getRandomQuantity(), precio: 25.99 },
    { id: 11, nombre: "Jujutsu Kaisen", autor: "Gege Akutami", cantidad: getRandomQuantity(), precio: 8.95 },
    { id: 12, nombre: "JoJo's Bizarre Adventure", autor: "Hirohiko Araki", cantidad: getRandomQuantity(), precio: 19.95 },
    { id: 13, nombre: "Nausicaa", autor: "Hayao Miyazaki", cantidad: getRandomQuantity(), precio: 50.95 },
    { id: 14, nombre: "Hellsing", autor: "Kota Hirano", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 15, nombre: "Afro Samurai", autor: "Takashi Okazaki", cantidad: getRandomQuantity(), precio: 14.95 },
    { id: 16, nombre: "Akira", autor: "Katsuhiro Otomo", cantidad: getRandomQuantity(), precio: 32.95 },
    { id: 17, nombre: "Battle Royale", autor: "Koushun Takami", cantidad: getRandomQuantity(), precio: 18.95 },
    { id: 18, nombre: "Blame!", autor: "Tsutomu Nihei", cantidad: getRandomQuantity(), precio: 12.75 },
    { id: 19, nombre: "Death Note", autor: "Tsugumi Oba", cantidad: getRandomQuantity(), precio: 29.99 },
    { id: 20, nombre: "Ghost in the Shell", autor: "Masamune Shirow", cantidad: getRandomQuantity(), precio: 14.95 },
    { id: 21, nombre: "Pluto", autor: "Naoki Urasawa", cantidad: getRandomQuantity(), precio: 24.95 },
    { id: 22, nombre: "Shaman King", autor: "Hiroyuki Takei", cantidad: getRandomQuantity(), precio: 20.75 },
    { id: 23, nombre: "Trigun", autor: "Yasuhiro Nightow", cantidad: getRandomQuantity(), precio: 10.95 },
    { id: 24, nombre: "Wanted!", autor: "Eiichiro Oda", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 25, nombre: "Dragon Ball", autor: "Akira Toriyama", cantidad: getRandomQuantity(), precio: 16.85 },
];