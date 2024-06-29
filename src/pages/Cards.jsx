import { Card } from "../components/ui/Card/Card";
import useProductsStore from "../store/useProductsStore";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate(); // хук для роутинга

  // Стор для работы с продуктами
  const { products, setFavorite } = useProductsStore();

  // Обработчик клика по карточке (для открытия сайдбара, например)
  const handleCardClick = (id) => {
    navigate(`/cards/${id}`);
  };

  return (
    <section className="products py-10 bg-gray-100">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!!products &&
          products.map((product) => (
            <Card key={product?.id} details={product} onCardClick={handleCardClick} onToggleFavorite={setFavorite} />
          ))}
      </div>
    </section>
  );
}

export default Cards;