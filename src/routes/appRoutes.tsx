// import * as Pages from "pages";
import { Routes, Route } from "react-router-dom";
import { ChoosePage } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ChoosePage children />} />
      </Route>
    </Routes>
  );
};

// Index Routes
// https://reactrouter.com/docs/en/v6/getting-started/concepts#index-routes
