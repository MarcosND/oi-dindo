import {
  Typography,
  Box,
  Stack,
  LinearProgress,
  Card,
  Grid,
  IconButton,
  Avatar,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { FC } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import VerifiedIcon from "@mui/icons-material/Verified";

import OngBanner from "../../images/ong_banner.png";
import OngImg from "../../images/ong_image.png";

import Luke from "../../images/Luke 01.svg";
import Nina from "../../images/Nina.svg";
import Mel from "../../images/Mel.svg";
import Caramela from "../../images/Caramela.svg";
import { useNavigate } from "react-router-dom";

interface OngPageProps {}

const OngPage: FC<OngPageProps> = () => {
  const navigate = useNavigate();
  const PetCard = (pic: string, name: string) => {
    return (
      <Grid item xs={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius={1}
        >
          <Card sx={{ width: "100%" }}>
            <CardActionArea onClick={() => navigate("pet")}>
              <CardMedia component="img" image={pic} />
            </CardActionArea>
          </Card>
          <Typography marginTop="3px">{name}</Typography>
        </Box>
      </Grid>
    );
  };

  return (
    <>
      <img
        src={OngBanner}
        alt="ong banner"
        style={{
          width: "100%",
          height: "30%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <Stack spacing={2} paddingX={5} marginY={18}>
        <Avatar src={OngImg} sx={{ width: 90, height: 90 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
          >
            Cantinho da Filó
          </Typography>
          <VerifiedIcon />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          padding={2}
          border="1px solid #4881D6"
          borderRadius={1}
        >
          <Typography>
            Somos um grupo de pessoas apaixonadas pelos animais e dedicamos
            nossas vidas para ajudar aqueles que estão perdidos ou abandonados.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Meta de Arrecadação</Typography>
          <Typography variant="body2">R$ 75,00 / R$ 100,00</Typography>
          <LinearProgress
            value={75}
            variant="determinate"
            sx={{
              height: 24,
              border: "1px solid #4881D6",
              borderRadius: "4px",
            }}
          />
        </Box>
        <Box>
          <Typography variant="h6">Nossos Pets</Typography>
          <Grid container spacing={2}>
            {PetCard(Nina, "Nina")}
            {PetCard(Luke, "Luke")}
            {PetCard(Mel, "Mel")}
            {PetCard(Caramela, "Caramela")}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h6">Nossas Redes</Typography>
          <Box display="flex" justifyContent="space-between">
            <IconButton
              sx={{
                paddingBottom: 1.5,
                color: "white",
                backgroundColor: "#4881D6",
                height: 56,
                width: 56,
                "&:hover": { backgroundColor: "#618fd4" },
              }}
              onClick={() => window.open("http://www.gmail.com")}
            >
              @
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#4881D6",
                height: 56,
                width: 56,
                "&:hover": { backgroundColor: "#618fd4" },
              }}
              onClick={() => window.open("http://www.facebook.com")}
            >
              <FacebookIcon
                style={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#4881D6",
                height: 56,
                width: 56,
                "&:hover": { backgroundColor: "#618fd4" },
              }}
              onClick={() => window.open("http://www.instagram.com")}
            >
              <InstagramIcon
                style={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#4881D6",
                height: 56,
                width: 56,
                "&:hover": { backgroundColor: "#618fd4" },
              }}
            >
              <PhoneIcon
                style={{
                  color: "white",
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box marginBottom={3}>
          <Typography variant="h6">Onde nos encontrar</Typography>
          <Typography>
            Rua Juarez Carvalho, 470, Imbiribeira, Recife - PE
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default OngPage;
