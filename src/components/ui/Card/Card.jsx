// import Stepper from "../Stepper/Stepper";
/**
 * Компонент карточка.
 * @param {object} props - Свойства компонента.
 * @param {object} props.details - Детали карточки.
 * @param {string} props.details.id - Идентификатор карточки.
 * @param {string} props.details.title - Название карточки.
 * @param {string} props.details.category - Категория карточки (необязательно).
 * @param {string} props.details.description - Описание карточки (необязательно).
 * @param {string} [props.details.price] - Цена карточки (необязательно).
 * @param {number} [props.details.rating] - Рейтинг карточки (необязательно).
 * @param {string} props.details.imgSrc - Путь к изображению.
 * @param {function} props.onClick - Обработчик клика по карточке (необязательно).
 * @returns {JSX.Element} Элемент JSX.
 */
export const Card = (props) => {
  const {
    id,
    title,
    category,
    description,
    price,
    rating,
    imgSrc,
    isFavorite,
  } = props.details;

  const { onCardClick, onToggleFavorite } = props;

  // // Обработчик клика по карточке для передачи id в компонент родитель
  // const handleCardClick = () => onCardClick(id);

  // Обработчик клика на иконку сердечка
  const handleFavorite = (event) => {
    event.stopPropagation(); // Предотвр. всплытие события
    onToggleFavorite(id);
  };

  // Обработчик обновления значения в Stepper
  // const handleQuantityUpdate = (value) => {
  //   // value будет получен в момент изменения значения в компоненте Stepper
  //   onStepperUpdate(id, value);
  // };

  return (
    <article onClick={() => onCardClick(id)} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img className="w-full max-h-44 pt-8" src={imgSrc} alt={title} />
          {price && (
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-xs font-medium">
              SALE
            </div>
          )}
          <button
            onClick={handleFavorite}
            className={`absolute top-0 left-0 m-0 p-2 rounded-full ${
              isFavorite ? "text-red-500" : "text-gray-300"
            }`}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
            </svg>
          </button>
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-slate-900 pb-1">{title}</h2>
          {category && <h3 className="text-slate-600 pb-4">{category}</h3>}
          
          
          {description && (
            <p className="mt-1 text-sm pb-2 text-slate-500">{description}</p>
          )}
          {rating && (
            <div className="text-yellow-500 mb-3">
              {"★".repeat(Math.floor(rating)) +
                "☆".repeat(5 - Math.floor(rating))}
            </div>
          )}
          {/* <Stepper
            onQuantityUpdate={handleQuantityUpdate}
            minValue={1}
            maxValue={9}
          /> */}
          <div className="mt-3 flex items-end justify-between">
            <p className="text-lg font-bold text-blue-500">{price}</p>
            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              {/* <button onClick={handleBtnClick} className="text-sm">
                В корзину
              </button> */}
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};
