import { Card } from "../components/ui/Card/Card";
import useProductsStore from "../store/useProductsStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  // Достаем функцию для работы с сохраненками
  const { getFavoriteProducts, setFavorite } = useProductsStore();

  //Вызываем эту функцию
  const favoritesProducts = getFavoriteProducts();

  return (
    <section className="products py-10 bg-gray-100">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <h3 className="flex mb-3">Сохраненные ранее товары</h3>
        <Link
          to="/cards"
          className=" text-gray-600 hover:text-gray-900 mb-8 inline-flex"
        >
          Вернуться к товарам
        </Link>
        <div className="flex flex-wrap justify-between">
          {!!favoritesProducts &&
            favoritesProducts.map((product) => (
              <Card
                key={product?.id}
                details={product}
                onToggleFavorite={setFavorite}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesList;
