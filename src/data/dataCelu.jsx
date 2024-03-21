import samsungImage from "./img/samsung.png";
import realmeImage from "./img/realme.png";
import xiaomiImage from "./img/xiaomi.png";
import oneplusImage from "./img/oneplus.png";

const dataCelu = {
  samsung: {
    modelo: "Samsung Galaxy S24 Ultra",
    precio: "1299$",
    desc: "16GB de RAM, 1TB o 512GB de almacenamiento, poderoso procesador Snapdragon 8Gen3, pantalla 2K de 120Hz",
    imagen: samsungImage
  },
  realme: {
    modelo: "Realme GT5 PRO",
    precio: "599$",
    desc: "Cámara principal de alta resolución de 108MP, procesador Snapdragon 8 Gen 2, pantalla AMOLED de 120Hz, batería de 5000mAh",
    imagen: realmeImage
  },
  xiaomi: {
    modelo: "Xiaomi mi 14 pro",
    precio: "1199$",
    desc: "Batería de 5000mAh con carga rápida de 120W, procesador Snapdragon 8 Gen 2, cámara principal de 50MP, pantalla AMOLED de 120Hz",
    imagen: xiaomiImage
  },
  oneplus: {
    modelo: "OnePlus open",
    precio: "1699$",
    desc: "Pantalla AMOLED QHD+ de 120Hz, procesador Snapdragon 8 Gen 2, cámara principal de 50MP, batería de 5000mAh con carga rápida de 80W",
    imagen: oneplusImage
  }
};

export default dataCelu;