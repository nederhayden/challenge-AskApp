import { Routes, Route } from "react-router-dom";
// import * as Pages from "pages";
import { StartPage } from "../pages";

export const AppRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/start" element={<StartPage />} />
        </Route>
      </Routes>
    </div>
  );
};
