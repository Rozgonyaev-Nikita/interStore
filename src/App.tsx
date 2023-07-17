import "./App.css";
import { Layout } from "./pages/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { MainPages } from "./pages/MainPages";
import { ViewingProducts } from "./pages/ViewingProducts";
import FavouritesPage from "./pages/FavouritesPage";
import FlyKarp from "./pages/FlyKarp/FlyKarp";

function App() {
  return (
    <Routes>
      {/* <Route path='/registration' element={<Registration/>}/>
        <Route path='/avtorization' element ={<Avtorization/>}/> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPages></MainPages>} />
        <Route path="/:id" element={<ViewingProducts />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="flyKarp" element={<FlyKarp />} />
        {/* <Route path='onas' element={<Onas />} />
          <Route path='*' element={<PageError />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
