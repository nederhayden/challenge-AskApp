// router dom
import { Routes, Route } from "react-router-dom";

// pages
import { ChoosePage } from "../pages/Choose/Choose.page";
import { StartPage } from "../pages/Start/Start.page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ChoosePage />} />
        <Route path="/start" element={<StartPage />} />
      </Route>
    </Routes>
  );
};

// Index Routes
// https://reactrouter.com/docs/en/v6/getting-started/concepts#index-routes
