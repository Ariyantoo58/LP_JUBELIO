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
import HR from "../pages/produk/HR Management";
import CRM from "../pages/produk/CRM";
import Project from "../pages/produk/Project Management";
import Marketing from "../pages/produk/Marketing";
import POS from "../pages/produk/Pos";
import SocialMedia from "../pages/produk/Social Media";



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
            <Route path="/product/hr" element={<HR/>}/>
            <Route path="/product/crm" element={<CRM/>}/>
            <Route path="/product/project" element={<Project/>}/>
            <Route path="/product/marketing" element={<Marketing/>}/>
            <Route path="/product/pos" element={<POS/>}/>
            <Route path="/product/socialmedia" element={<SocialMedia/>}/>
        </Routes>
    );
}
