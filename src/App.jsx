import "./App.css";
import { Card } from "./components/ui/Card/Card";

// Данные карточек (продукты)
const initialProducts = [
  {
    id: "1",
    title: "POLAROID",
    category: " PLD 4139/S C3 09Q",
    description:
      "Солнцезащитные очки",
    rating: "4.9",
    price: "6390 \u20bd",
    imgSrc: "../assets/products/pld-1.jpg",
  },
  {
    id: "2",
    title: "POLAROID",
    category: "PLD 4141/G/S/X WJ 010",
    description:
      "Солнцезащитные очки",
    rating: "3.0",
    price: "7350 \u20bd",
    imgSrc: "../assets/products/pld-2.jpg",
  },
  {
    id: "3",
    title: "POLAROID",
    category: "PLD 8052/S JQ QCK (7-10 лет)",
    description:
      "Солнцезащитные очки",
    rating: "4.9",
    price: "5290 \u20bd",
    imgSrc: "../assets/products/pld-3.jpg",
  },
  {
    id: "4",
    title: "POLAROID",
    category: "PLD 8053/S M9 80Z (7-10 лет)",
    description:
      "Солнцезащитные очки",
    rating: "3.0",
    price: "4850 \u20bd",
    imgSrc: "../assets/products/pld-4.jpg",
  },
  {
    id: "5",
    title: "POLAROID",
    category: "PLD K006/S M9 C9A (4-6 лет)",
    description:
      "Солнцезащитные очки",
    rating: "3.2",
    price: "4850 \u20bd",
    imgSrc: "../assets/products/pld-5.jpg",
  },
  {
    id: "6",
    title: "POLAROID",
    category: "PLD K007/S M9 1ED (4-6 лет)",
    description:
      "Солнцезащитные очки",
    rating: "1.0",
    price: "4850 \u20bd",
    imgSrc: "../assets/products/pld-6.jpg",
  },
  {
    id: "7",
    title: "POLAROID",
    category: "PLD 8056/S M9 FLL",
    description:
      "Солнцезащитные очки",
    rating: "1.0",
    price: "5290 \u20bd",
    imgSrc: "../assets/products/pld-7.jpg",
  },
  {
    id: "8",
    title: "POLAROID",
    category: "PLD 6209/S/X HE 733",
    description:
      "Солнцезащитные очки",
    rating: "1.0",
    price: "7890 \u20bd",
    imgSrc: "../assets/products/pld-8.jpg",
  },
];

function App() {
  return (
    <section className="products py-10 bg-gray-100">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!!initialProducts &&
          initialProducts.map((product) => (
            <Card key={product?.id} details={product} />
          ))}
      </div>
    </section>
  );
}

export default App;
