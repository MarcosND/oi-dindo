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
import avatar from "../../images/Alfredo.png";
import BannerImage from "../../components/BannerImage";
import Header from "./components/header";
import theme from "../../global/theme";
import Ong from "../../images/ong_image.png";
import { useLocation, useNavigate } from "react-router-dom";

interface PetPageProps {}

const PetPage: FunctionComponent<PetPageProps> = () => {
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
      <BannerImage src={avatar} distance={scrollOffset} />

      <Container>
        <Header />
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
                <Typography variant="body2">X% arrecadado</Typography>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={progress}
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
            <Typography variant="body2">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Typography>
            <Typography sx={{ paddingTop: "12px" }} variant="body1">
              #carinhoso #curioso #pelocurto #brincalhão #obediente #sociável
            </Typography>
          </CardContent>

          <CardActions>
            <Stack direction="row" spacing={"11px"}>
              <Avatar src={Ong} />
              <Button
                sx={{ borderRadius: 2 }}
                variant="contained"
                onClick={() => navigate("/apadrinhamento")}
              >
                Apadrinhar
              </Button>
            </Stack>
          </CardActions>

          <CardContent sx={{ marginBottom: 14 }}>
            <Box
              sx={{
                padding: "16px",
                border: "1px solid blue",
                borderRadius: "14px",
                width: "100vw",
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
                <Stack direction="row" spacing={"11px"}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      display: "inline-block",
                      minWidth: 230,
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography
                      color="white"
                      sx={{ padding: "8px", textAlign: "left" }}
                      variant="h6"
                    >
                      Pergunta
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      display: "inline-block",
                      minWidth: 230,
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography
                      color="white"
                      sx={{ padding: "8px", textAlign: "left" }}
                      variant="h6"
                    >
                      Pergunta
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      display: "inline-block",
                      minWidth: 230,
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography
                      color="white"
                      sx={{ padding: "8px", textAlign: "left" }}
                      variant="h6"
                    >
                      Pergunta
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      display: "inline-block",
                      minWidth: 230,
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography
                      color="white"
                      sx={{ padding: "8px", textAlign: "left" }}
                      variant="h6"
                    >
                      Pergunta
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "clear",
                      display: "inline-block",
                      minWidth: 100,
                    }}
                  ></Box>
                </Stack>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PetPage;
