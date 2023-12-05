import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyContext from "./components/my_context"


import Favorites from "./views/Favorites";
import Home from "./views/Home";



const App = () => {
  return (
    <div>
      <MyContext.Provider>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
      </MyContext.Provider>
    </div>
  );
};
export default App;
