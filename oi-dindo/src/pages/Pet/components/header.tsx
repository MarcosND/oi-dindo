import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FunctionComponent, useState } from "react";
import StatCard from "./stats";
import { useNavigate } from "react-router-dom";
import { FavoriteOutlined } from "@mui/icons-material";
import { Pet } from "../../../models/pet";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WcIcon from "@mui/icons-material/Wc";
interface HeaderProps {
  pet?: Pet;
}

const Header: FunctionComponent<HeaderProps> = ({ pet }) => {
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <Container sx={{ width: "100%", marginTop: 2 }}>
      <Stack direction="column" justifyContent="space-between">
        {/* Top buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ backgroundColor: "white", borderRadius: "100%" }}>
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBackIcon color="primary" />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: "white", borderRadius: "100%" }}>
            <IconButton
              onClick={() => {
                setFavorite(!favorite);
              }}
            >
              {favorite ? (
                <FavoriteOutlined color="secondary" />
              ) : (
                <FavoriteBorderIcon color="secondary" />
              )}
            </IconButton>
          </Box>
        </Stack>

        {/* Bottom info */}
        <Stack
          direction="column"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginTop: "20vh", marginBottom: "2vh" }}
        >
          <Typography variant="h3" color={"white"} fontWeight={"bold"}>
            {pet?.name}
          </Typography>

          <Stack direction="row" spacing={3} sx={{ overflowX: "scroll" }}>
            <StatCard
              title="Peso"
              stat={`${pet?.weight} kg`}
              logo={FitnessCenterIcon}
            />
            <StatCard
              title="Idade"
              stat={`${pet?.age} anos`}
              logo={CalendarMonthIcon}
            />
            <StatCard title="Sexo" stat={pet?.sex || ""} logo={WcIcon} />
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
};

export default Header;
