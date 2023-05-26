import Home from "..";
import Products from "../pages/produk";
import { Routes, Route } from "react-router-dom";
import IndexHome from "../pages/home";
import Harga from "../pages/harga";
import Ambassador from "../pages/Ambassador";
import Affiliasi from "../pages/Affiliasi";
import IntegrasiAPI from "../pages/dukungan/integrasiAPI";
import Partner from "../pages/partner";
import Finance from "../pages/produk/Finance";
import Signin from "../pages/signin";
import Signup from "../pages/signup";



export default function RouteApp() {
    return (
        <Routes >
            <Route exact path="/" element={<IndexHome />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/product" element={<Products />} />
            <Route path="/harga" element={<Harga />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/affiliasi/ambassador" element={<Ambassador />} />
            <Route path="/dukungan/integrasiapi" element={<IntegrasiAPI />} />
            <Route path="/affiliasi/affiliasi" element={<Affiliasi />} />
            <Route path="/product/finance" element={<Finance />} />
        </Routes>
    );
}
