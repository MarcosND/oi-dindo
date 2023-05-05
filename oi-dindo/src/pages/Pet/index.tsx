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
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { FunctionComponent, useEffect, useState } from "react";
import BannerImage from "../../components/BannerImage";
import Header from "./components/header";
import theme from "../../global/theme";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Ongs } from "../../models/mockData";

interface PetPageProps {}

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

  return (
    <Box>
      <BannerImage src={petData?.photo} distance={scrollOffset} />
      <Container>
        <Header pet={petData} />
        <div
          style={{
            width: "99%",
            height: "110%",
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

          <CardActions></CardActions>

          <CardContent>
            <Typography
              sx={{ paddingBottom: "4px" }}
              variant="h5"
              component="div"
            >
              Sobre o pet:
            </Typography>
            <Typography variant="body2">{petData?.description}</Typography>
            {/* <Typography sx={{ paddingTop: "12px" }} variant="body1">
              #carinhoso #curioso #pelocurto #brincalhão #obediente #sociável
            </Typography> */}
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
    </Box>
  );
};

export default PetPage;
