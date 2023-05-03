import { BrowserRouter, Route, Routes } from "react-router-dom";
import PetPage from "../pages/Pet";
import LoginPage from "../pages/Login";
import OngPage from "../pages/OngPage";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import {
  Home as HomeIcon,
  AccountBalance as OngIcon,
  Pets as PetIcon,
  Person2 as PersonIcon,
} from "@mui/icons-material";
import { useState } from "react";
import ApadrinhamentoPage from "../pages/Apadrinhamento";
import Profile from "../pages/Profile";
import MimosPage from "../pages/Mimos";

function Router() {
  const navigatablePages: {
    label: String;
    value: String;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  }[] = [
    { label: "Início", value: "/", icon: HomeIcon },
    { label: "ONGs", value: "ong", icon: OngIcon },
    { label: "Mimos", value: "mimos", icon: PetIcon },
    { label: "Perfil", value: "profile", icon: PersonIcon },
  ];

  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));

  return (
    <BrowserRouter>
      <Routes>
        {isAuth === "true" ? (
          <Route path="/" element={<Navbar pages={navigatablePages} />}>
            <Route index element={<Home />} />
            <Route path="ong" element={<OngPage />} />
            <Route path="mimos" element={<MimosPage />} />
            <Route path="ong/pet" element={<PetPage />} />
            <Route path="apadrinhamento" element={<ApadrinhamentoPage />} />
            <Route path="profile" element={<Profile setIsAuth={setIsAuth} />} />
          </Route>
        ) : (
          <Route index element={<LoginPage setIsAuth={setIsAuth} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
