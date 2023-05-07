import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Container,
  Button,
  Typography,
  Box,
  LinearProgress,
  Stack,
  Modal,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { FunctionComponent, useEffect, useState } from "react";
import BannerImage from "../../components/BannerImage";
import Header from "./components/header";
import theme from "../../global/theme";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Ongs } from "../../models/mockData";
import Lottie from "react-lottie-player";
import animatedPetJSON from "../../images/animatedPet.json";
import SharingComponent from "../../components/Sharing";

interface PetPageProps {}

const modalBottomBoxStyle = {
  position: "absolute" as "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -45%)",
  width: "80%",
  bgcolor: "background.paper",
  borderRadius: "0 0 12px 12px",
  boxShadow: 24,
  pt: 8,
  pb: 4,
  px: 4,
};
const modalTopBoxStyle = {
  zIndex: 2,
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -140%)",
  height: "20%",
  width: "80%",
  bgcolor: "#8CC7F0",
  borderRadius: "12px 12px 36px 0px",
  p: 4,
};
const modalAnimationStyle = {
  position: "absolute" as "absolute",
  left: "50%",
  transform: "translate(-50%, -56%)",
  width: 300,
  zIndex: 2,
};

const PetPage: FunctionComponent<PetPageProps> = () => {
  const { petId, ongId } = useParams();
  const ongData = Ongs.find((ong) => ong.id === Number(ongId));
  const petData = ongData?.pets.find((pet) => pet.id === Number(petId));

  const goalPercentage =
    (Number(petData?.valueEarned) / Number(petData?.totalValue)) * 100;

  const state = useLocation().state;
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    if (state?.progress && state.progress !== progress) {
      setProgress(state.progress);
    }
  }, [state, progress]);

  const [scrollOffset, setScrollOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <BannerImage src={petData?.photo} distance={scrollOffset} />
      <Container>
        <Header pet={petData} />
        <div
          style={{
            width: "99%",
            height: "120%",
            objectFit: "cover",
            position: "absolute",
            overflowX: "hidden",
            overflowY: "hidden",
            zIndex: -1,
            transform: "translate(-4%, 0%)",
            borderRadius: "36px 36px 0px 0px",
            boxShadow: "10px 5px 5px black",
            background: "white",
          }}
        />
        <Card
          elevation={0}
          sx={{
            borderTopLeftRadius: 36,
            borderTopRightRadius: 36,
            paddingY: 1,
          }}
        >
          <CardContent>
            <Stack
              direction="column"
              spacing={2}
              sx={{
                padding: "16px",
                border: "1px solid blue",
                borderRadius: 6,
              }}
            >
              <Stack direction="row" spacing={2} justifyContent="start">
                <Button
                  sx={{ borderRadius: 2, minHeight: 40, margin: 0 }}
                  variant="contained"
                  onClick={() => navigate("/apadrinhamento")}
                >
                  Apadrinhar
                </Button>
                <Button
                  sx={{ borderRadius: 2, minHeight: 40, margin: 0 }}
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpen}
                >
                  <ShareIcon />
                </Button>
              </Stack>

              <Stack direction="column">
                <Typography variant="body2">
                  {goalPercentage.toFixed(0)}% arrecadado
                </Typography>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={goalPercentage}
                  sx={{
                    height: 24,
                    border: 2,
                    borderColor: theme.palette.primary.dark,
                  }}
                  style={{
                    borderRadius: 12,
                  }}
                />
              </Stack>
            </Stack>
          </CardContent>

          <CardContent>
            <Typography
              sx={{ paddingBottom: "4px" }}
              variant="h5"
              component="div"
            >
              Sobre o pet:
            </Typography>
            <Typography variant="body2" whiteSpace="pre-line">
              {petData?.description}
            </Typography>
            <Typography
              mt={1}
              sx={{ paddingBottom: "4px" }}
              variant="h5"
              component="div"
            >
              Gastos Mensais:
            </Typography>
            <Typography paddingLeft={2.5}>
              <ul>
                <li>Equipe veterinária: R$ 100,00 / mês</li>
                <li>Banho: R$ 45,00 / mês</li>
                <li>Vacina: R$ 6,70 / mês</li>
                <li>Antipulgas: R$ 120,00 / mês</li>
              </ul>
            </Typography>
            <Typography fontWeight="bold" display="flex">
              Total:<Typography ml={1}> R$ 271,70 / mês</Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={"11px"}>
              <Avatar
                src={ongData?.logo}
                onClick={() =>
                  navigate(`../ong/${ongData?.id}`, { replace: true })
                }
              />
              <Button
                sx={{ borderRadius: 2 }}
                variant="contained"
                onClick={() => navigate("/apadrinhamento")}
              >
                Apadrinhar
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Container>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack>
          <Box sx={modalTopBoxStyle}>
            <Lottie
              loop
              animationData={animatedPetJSON}
              play
              style={modalAnimationStyle}
            />
          </Box>
          <Box sx={modalBottomBoxStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Compartilhe sobre mim!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Toda a ajuda é válida e quanto mais gente me ajudando, melhor.
            </Typography>
            <Stack direction="row" justifyContent={"center"} marginTop={2}>
              <SharingComponent
                shareUrl={ongData?.instagram || ""}
                title={`Apadrinhe ${petData?.name} da Ong ${ongData?.name} pelo app Oi, Dindo!\n`}
              />
            </Stack>
          </Box>
        </Stack>
      </Modal>
    </Box>
  );
};

export default PetPage;
