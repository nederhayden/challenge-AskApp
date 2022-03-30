import { Routes, Route } from "react-router-dom";
// import * as Pages from "pages";
import { ChoosePage, StartPage } from "../pages";

export const AppRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<ChoosePage />} />
          <Route path="/start" element={<StartPage />} />
        </Route>
      </Routes>
    </div>
  );
};

// Index Routes
// https://reactrouter.com/docs/en/v6/getting-started/concepts#index-routes
