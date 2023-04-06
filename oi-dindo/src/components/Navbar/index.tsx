import { BottomNavigation, BottomNavigationAction, Box, Container, SvgIconTypeMap, makeStyles } from "@mui/material";
import { Home, AccountBalance, Pets } from "@mui/icons-material"
import { FunctionComponent, ReactElement, ReactNode, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { capitalize } from "lodash";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface NavbarProps {
    pages : {label: String, value: String, icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }}[]
}
 
const Navbar: FunctionComponent<NavbarProps> = ({pages}) => {

    const safeBottomArea = 25;
    const navigate = useNavigate();
    const location = useLocation();

    const [currPage, setCurrPage] = useState("");

    useEffect(() => {
        const locationBlocks = location.pathname.split('/')
        setCurrPage(locationBlocks[locationBlocks.length-1]);
    }, [location])  
      
    return (
        <Box>

            <Box sx={{ overflowY: "scroll", overflowX: "scroll"}}>
                <Outlet />
            </Box>

            <BottomNavigation
            sx={{
                width: "100%", 
                position: "fixed", 
                bottom: 0, 
                left: 0,
                boxShadow: "0 -5px 10px -5px rgba(0, 0, 0, 0.15)",
                paddingBottom: `${safeBottomArea}px`,  
            }}
            value={currPage||"/"}
            onChange={(_, newValue) => {
                setCurrPage(newValue);
                navigate(newValue);
            }}
            >
                {pages.map((page) => 
                    <BottomNavigationAction 
                    label={page.label} 
                    value={page.value} 
                    icon={<page.icon />} 
                    />
                )}
            </BottomNavigation>

        </Box>
    );
}
 
export default Navbar;