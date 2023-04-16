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
} from "@mui/icons-material";
import { useState } from "react";

function Router() {
  const navigatablePages: {
    label: String;
    value: String;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  }[] = [
    { label: "Início", value: "/", icon: HomeIcon },
    { label: "ONGs", value: "ong", icon: OngIcon },
    { label: "Seus Pets", value: "pet", icon: PetIcon },
  ];

  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {isAuth ? (
          <Route path="/" element={<Navbar pages={navigatablePages} />}>
            <Route index element={<Home />} />
            <Route path="ong" element={<OngPage />} />
            <Route path="pet" element={<PetPage />} />
          </Route>
        ) : (
          <Route index element={<LoginPage setIsAuth={setIsAuth} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
