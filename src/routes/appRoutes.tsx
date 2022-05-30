// router dom
import { Routes, Route } from "react-router-dom";

// pages
import * as Pages from "pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Pages.ChoosePage />} />
        <Route path="/start" element={<Pages.StartPage />} />
        <Route path="/questions" element={<Pages.QuestionsPage />} />
      </Route>
    </Routes>
  );
};

// Index Routes
// https://reactrouter.com/docs/en/v6/getting-started/concepts#index-routes
