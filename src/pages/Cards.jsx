import { useState } from "react";
import { Card } from "../components/ui/Card/Card";
import useProductsStore from "../store/useProductsStore";
import { useNavigate } from "react-router-dom";
import Alert from "../components/ui/Alert/Alert";

const Cards = () => {
  const navigate = useNavigate(); // хук для роутинга

  // Стор для работы с продуктами
  const { products, onToggleFavorite, getProductById } =
    useProductsStore();

  // Обработчик клика по карточке
  const handleCardClick = (id) => {
    navigate(`/cards/${id}`);
  };

  // Стейт для скрытия/показа и передачи сообщения в Alert
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: "",
  });

  // // Обработчик закрытия компонента Alert
  const handleCloseAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };

  // // Обработчик добавления товара в сохраненки и показа уведомления
  const handleFavoriteAndShowAlert = (id) => {
    // Достаем из стора поле isFavorite выбранного продукта
    const { isFavorite } = getProductById(id);

    onToggleFavorite(id); // вкл/выкл товара в сохраненки

    setAlertState({
      isOpen: true,
      message: isFavorite
        ? "Товар удален из сохраненок"
        : "Товар добавлен в сохраненки",
    });
  };

  return (
    <>
    <section className="products py-10 bg-gray-100">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!!products &&
          products.map((product) => (
            <Card
              key={product?.id}
              details={product}
              onCardClick={handleCardClick}
              onHeartClick={handleFavoriteAndShowAlert}
            />
          ))}
      </div>
    </section>
    <Alert
    title="Сохранение товара."
    subtitle={alertState?.message}
    variant="neutral"
    isOpen={alertState?.isOpen}
    onClose={handleCloseAlert}
  />
</>
  );
};

export default Cards;
