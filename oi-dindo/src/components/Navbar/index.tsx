import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  SvgIconTypeMap,
} from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface NavbarProps {
  pages: {
    label: String;
    value: String;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  }[];
}

const Navbar: FunctionComponent<NavbarProps> = ({ pages }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currPage, setCurrPage] = useState("");

  useEffect(() => {
    const locationBlocks = location.pathname.split("/");
    setCurrPage(locationBlocks[locationBlocks.length - 1]);
  }, [location]);

  return (
    <Box>
      <Box sx={{ overflowY: "scroll", overflowX: "hidden" }}>
        <Outlet />
      </Box>

      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          boxShadow: "0 -5px 10px -5px rgba(0, 0, 0, 0.15)",
        }}
        value={currPage || "/"}
        onChange={(_, newValue) => {
          setCurrPage(newValue);
          navigate(newValue);
        }}
      >
        {pages.map((page) => (
          <BottomNavigationAction
            label={page.label}
            value={page.value}
            icon={<page.icon />}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;
