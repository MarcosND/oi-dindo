import { Box, Button, Card, Container, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FunctionComponent } from "react";
import StatCard from "./stats";

interface HeaderProps {
    
}
  
const Header: FunctionComponent<HeaderProps> = () => {

    return (
        <Container sx={{width: "100%", marginTop: 2}}>
            <Stack direction="column" justifyContent="space-between">

                {/* Top buttons */}
                <Stack direction="row" justifyContent="space-between">
                    <IconButton sx={{backgroundColor: "white"}}>
                        <ArrowBackIcon color="primary" />
                    </IconButton>
                    <IconButton sx={{backgroundColor: "white"}}>
                        <FavoriteBorderIcon color="secondary" />
                    </IconButton>
                </Stack>

                {/* Bottom info */}
                <Stack direction="column" justifyContent="space-between" spacing={2} sx={{marginTop: "20vh", marginBottom: "2vh"}}>
                    <Typography variant="h3" color={"white"} fontWeight={"bold"}>{"Alfredo"}</Typography>
                    
                    <Stack direction="row" spacing={3} sx={{overflowX: "scroll"}}>
                        <StatCard />
                        <StatCard />
                        <StatCard />
                    </Stack>
                    
                    {/* <Card sx={{borderRadius: 4, padding: 1, width: 120}}>
                        <Typography variant="h6" fontWeight={"semi-bold"}>{"Peso"}</Typography>
                    </Card>
                    <Card 
                        sx={{
                            borderRadius: 4, 
                            borderTopLeftRadius: 0, 
                            borderTopRightRadius: 0, 
                            padding: 1, 
                            width: 80, 
                            paddingTop: 6,
                            marginTop: -5,
                            zIndex: -1,
                            background: "rgba(255, 255, 255, 0.3)", 
                            backdropFilter: "blur(8px)",
                            paddingX: "auto"
                        }}
                    >
                        <Typography color="white" variant="h6" fontWeight={"semi-bold"}>{"10 Kg"}</Typography>
                    </Card> */}
                </Stack>

            </Stack>
        </Container>
    );
}
 
export default Header;

