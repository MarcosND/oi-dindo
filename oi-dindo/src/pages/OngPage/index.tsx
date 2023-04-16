import {
  Typography,
  Box,
  Stack,
  LinearProgress,
  Card,
  Grid,
  IconButton,
} from "@mui/material";
import { FC } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import VerifiedIcon from "@mui/icons-material/Verified";
import avatar from "../../images/Alfredo.png";

interface OngPageProps {}

const OngPage: FC<OngPageProps> = () => {
  const PetCard = () => {
    return (
      <Grid item xs={6}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Card sx={{ borderRadius: 4, height: 150, width: "100%" }}>
            Foto aqui
          </Card>
          <Typography>Nina</Typography>
        </Box>
      </Grid>
    );
  };

  return (
    <Stack spacing={2} paddingX={5} marginBottom={10}>
      <header><Avatar  
            src={avatar} 
            variant="square"
            sx={{ width: '90vw', height: '120vw' }}
            /></header>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          fontWeight="500"
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
          Somos um grupo de pessoas apaixonadas pelos animais e dedicamos nossas
          vidas para ajudar aqueles que estão perdidos ou abandonados.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Meta de Arrecadação</Typography>
        <Typography variant="body2">R$ 75,00 / R$ 100,00</Typography>
        <LinearProgress
          value={75}
          variant="determinate"
          sx={{ height: 24, border: "1px solid #4881D6", borderRadius: "4px" }}
        />
      </Box>
      <Box>
        <Typography variant="h6">Nossos Pets</Typography>
        <Grid container spacing={2}>
          {PetCard()}
          {PetCard()}
          {PetCard()}
          {PetCard()}
        </Grid>
      </Box>
      <Box>
        <Typography variant="h6">Nossas Redes</Typography>
        <Box display="flex" justifyContent="space-between">
          <IconButton>@</IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
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
  );
};

export default OngPage;
