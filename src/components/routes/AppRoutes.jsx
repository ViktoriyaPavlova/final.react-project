import { Routes, Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home";
import Cards from "../../pages/Cards";
import CardDetail from "../../pages/CardDetail";
import FavoritesList from "../../pages/FavoritesList";

/** Массив роутов приложения */
const routes = [
  { path: "/", element: <Home /> },
  { path: "cards", element: <Cards /> },
  { path: "cards/:id", element: <CardDetail /> },
  { path: "favorites", element: <FavoritesList /> },
];

/**
 * Рекурсивно отображает роуты и и дочерние роуты.
 * @param {RouteItem[]} routes - Массив роутов.
 * @returns {JSX.Element[]} Массив JSX элементов роутов.
 */
const renderRoutes = (routes) => {
  return routes.map((route) => (
    <Route key={route?.path} path={route?.path} element={route?.element}>
      {route?.children && renderRoutes(route.children)}
    </Route>
  ));
};

/** Корневой компонент приложения с роутами */
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {renderRoutes(routes)}
    </Route>
  </Routes>
);

export default AppRoutes;