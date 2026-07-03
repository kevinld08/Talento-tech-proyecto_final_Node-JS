import { db } from "./src/config/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const productosDePrueba = [
  { nombre: "Laptop Gamer", precio: 1200.99, stock: 5, categoria: "Electronica" },
  { nombre: "Mouse Óptico", precio: 25.50, stock: 30, categoria: "Accesorios" }
];

const ejecutarSeed = async () => {
  try {
    console.log("⏳ Poblando la base de datos Firebase...");
    const productsCollection = collection(db, "products");

    for (const producto of productosDePrueba) {
      const docRef = await addDoc(productsCollection, producto);
      console.log(`✅ Producto insertado con ID: ${docRef.id}`);
    }

    console.log("🎉 ¡Base de datos poblada con éxito!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al ejecutar el seed:", error);
    process.exit(1);
  }
};

ejecutarSeed();