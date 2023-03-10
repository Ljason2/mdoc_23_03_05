import { BrowserRouter, Route ,Routes } from "react-router-dom";
import App from "./components/App";
import Home from "../src/pages/Home"
import ProductList from "../src/pages/ProductList"
import Product from "../src/pages/Product"
import WorryList from "./pages/WorryList";
import Worry from "./pages/Worry";
import WishList from "./pages/WishList";
import AboutUs from "./pages/AboutUs";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Review from "./pages/Review";
import Event from "./pages/Event";


function Main(){
    return(
        <BrowserRouter>
        <App>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/productList">
        <Route index element={<ProductList />}/>
        <Route path=":courseSlug" element={<Product />} />
        </Route>
        <Route path="/worryList">
        <Route index element={<WorryList />} />
        <Route path=":worrySlug" element={<Worry />} />
        </Route>
        <Route path="/wishList" element={<WishList />}/>
        <Route path="/event" element={<Event />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/join" element={<Join />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/review" element={<Review />}/>
        <Route path="*" element={<Home />}/>
        </Routes>
        </App>
        </BrowserRouter>
    )
}

export default Main;