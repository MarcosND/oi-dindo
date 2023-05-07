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
//import PhoneIcon from "@mui/icons-material/Phone";
import VerifiedIcon from "@mui/icons-material/Verified";

import { useNavigate, useParams } from "react-router-dom";
import { Ongs } from "../../models/mockData";
import theme from "../../global/theme";

interface OngPageProps {}

const FaqCard = (question: string, answer: string) => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        display: "inline-block",
        minWidth: 280,
        whiteSpace: "normal",
      }}
    >
      <Typography
        color="white"
        sx={{ padding: "8px", textAlign: "left" }}
        fontWeight="bold"
      >
        {question}
      </Typography>
      <Typography
        color="white"
        sx={{
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingBottom: "8px",
          wordBreak: "normal",
          overflow: "hidden",
        }}
        variant="body1"
        align="left"
      >
        {answer}
      </Typography>
    </Box>
  );
};

const OngPage: FC<OngPageProps> = () => {
  const { ongId } = useParams();
  const ongData = Ongs.find((ong) => ong.id === Number(ongId));

  const goalPercentage =
    (Number(ongData?.current_goal) / Number(ongData?.money_goal)) * 100;

  const navigate = useNavigate();
  const PetCard = (pic: string, name: string, id: number) => {
    return (
      <Grid item xs={6} key={id}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius={1}
        >
          <Card sx={{ width: "100%" }}>
            <CardActionArea onClick={() => navigate(`pet/${id}`)}>
              <CardMedia
                component="img"
                image={pic}
                width="150px"
                height="100px"
              />
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
        src={ongData?.banner}
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
        <Avatar src={ongData?.logo} sx={{ width: 90, height: 90 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
          >
            {ongData?.name}
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
          <Typography whiteSpace="pre-line">{ongData?.description}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Meta de Arrecadação</Typography>
          <Typography variant="body2">
            R${ongData?.current_goal} / R$ {ongData?.money_goal}
          </Typography>
          <LinearProgress
            value={goalPercentage}
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
            {ongData?.pets.map((pet) => PetCard(pet.photo, pet.name, pet.id))}
          </Grid>
        </Box>
        <Box
          sx={{
            padding: "16px",
            border: "1px solid blue",
            borderRadius: "14px",
            width: "92vw",
          }}
        >
          <Typography
            sx={{ paddingBottom: "4px" }}
            variant="h5"
            component="div"
          >
            Perguntas
          </Typography>

          <Box sx={{ overflow: "auto", whiteSpace: "nowrap" }}>
            <Stack direction="row" spacing="11px">
              {ongData?.faq.map((faq) => FaqCard(faq.question, faq.answer))}
            </Stack>
          </Box>
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
              onClick={() => window.open(`mailto:${ongData?.email}`)}
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
              onClick={() => window.open(ongData?.facebook)}
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
              onClick={() => window.open(ongData?.instagram)}
            >
              <InstagramIcon
                style={{
                  color: "white",
                }}
              />
            </IconButton>
            {/* <IconButton
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
            </IconButton> */}
          </Box>
        </Box>
        <Box marginBottom={3}>
          <Typography variant="h6">Onde nos encontrar</Typography>
          <Typography>
            {ongData?.address} - {ongData?.phone}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default OngPage;
