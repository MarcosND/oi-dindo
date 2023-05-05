import {
  Typography,
  Stack,
  Container,
  CardMedia,
  Avatar,
  Box,
  CardActionArea,
} from "@mui/material";
import { FC } from "react";
import PostCard from "../Mimos/components/postCard";

import marca1 from "../../images/marca1.png";
import marca2 from "../../images/marca2.png";
import marca3 from "../../images/marca3.png";
import marca4 from "../../images/marca4.png";

import Dourado from "../../images/Dourado.png";
import Peludo from "../../images/Peludo.png";
import Luna from "../../images/Luna.png";
import Liz from "../../images/Liz.png";
import Morning from "../../images/Morning.png";
import { useNavigate } from "react-router-dom";
import { Ongs } from "../../models/mockData";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
  const navigate = useNavigate();

  const PetCard = (pic: string, id: number, ongId: number) => {
    return (
      <CardActionArea onClick={() => navigate(`ong/${ongId}/pet/${id}`)}>
        <CardMedia
          sx={{
            width: "40vw",
            height: "220px",
            aspectRatio: "auto",
            borderRadius: "8px",
          }}
          component="img"
          image={pic}
        />
      </CardActionArea>
    );
  };

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom right, #8CC7F0, #FFFFFF 40%)",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Stack direction="column" spacing={"28px"} sx={{ paddingTop: "8px" }}>
        <Typography sx={{ paddingLeft: "32px" }} variant="h4" fontWeight={500}>
          Oi Dindo!
        </Typography>

        <Stack direction="column" spacing={"8px"}>
          <Typography
            sx={{ paddingLeft: "32px" }}
            variant="h6"
            fontWeight={500}
          >
            Pets que você vai amar
          </Typography>

          <Box
            sx={{ overflow: "auto", whiteSpace: "nowrap", paddingLeft: "32px" }}
          >
            <Stack direction="row" spacing={"11px"}>
              {PetCard(Peludo, 21, 2)}
              {PetCard(Dourado, 11, 1)}
              {PetCard(Luna, 22, 2)}
              {PetCard(Liz, 12, 1)}
            </Stack>
          </Box>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        spacing={"28px"}
        sx={{ paddingTop: "36px", paddingLeft: "0px" }}
      >
        <Stack
          direction="column"
          spacing={"8px"}
          sx={{
            backgroundColor: "#E8F4FC",
            width: "100vw",
            height: "122px",
            paddingLeft: "32px",
          }}
        >
          <Typography sx={{ paddingTop: "8px" }} variant="h6" fontWeight={500}>
            ONG'S parceiras
          </Typography>
          <Stack direction="row" spacing={"16px"}>
            {Ongs.map((ong) => (
              <Avatar
                src={ong.logo}
                sx={{ width: "65px", height: "65px" }}
                onClick={() => navigate(`ong/${ong.id}`)}
              />
            ))}
          </Stack>
        </Stack>

        <Stack
          direction="column"
          spacing={"8px"}
          sx={{
            backgroundColor: "#E8F4FC",
            width: "100vw",
            height: "122px",
            paddingLeft: "32px",
          }}
        >
          <Typography sx={{ paddingTop: "8px" }} variant="h6" fontWeight={500}>
            Marcas parceiras
          </Typography>
          <Stack direction="row" spacing={"16px"}>
            <Avatar
              src={marca1}
              sx={{ width: "65px", height: "65px" }}
              onClick={() =>
                window.open("https://www.instagram.com/bichomimadorecife/")
              }
            />
            <Avatar
              src={marca2}
              sx={{ width: "65px", height: "65px" }}
              onClick={() =>
                window.open("https://www.instagram.com/primopetoficial/")
              }
            />
            <Avatar
              src={marca3}
              sx={{ width: "65px", height: "65px" }}
              onClick={() => window.open("https://www.instagram.com/petz/")}
            />
            <Avatar
              src={marca4}
              sx={{ width: "65px", height: "65px" }}
              onClick={() =>
                window.open("https://www.instagram.com/pethome_pe/")
              }
            />
          </Stack>
        </Stack>

        <Stack
          sx={{ paddingLeft: "32px", paddingRight: "32px" }}
          direction={"column"}
          spacing={"24px"}
          height={"65%"}
        >
          <PostCard
            image={Morning}
            owner="Dindo Admin"
            text="Bom dia! Preparado para apadrinhar um novo pet hoje? :)"
          />
          <PostCard
            image={Morning}
            owner="Dindo Admin"
            text="Bom dia! Preparado para apadrinhar um novo pet hoje? :)"
          />
          <PostCard
            image={Morning}
            owner="Dindo Admin"
            text="Bom dia! Preparado para apadrinhar um novo pet hoje? :)"
          />
        </Stack>

        <Box
          sx={{
            backgroundColor: "clear",
            minHeight: 50,
          }}
        ></Box>
      </Stack>
    </Container>
  );
};

export default HomePage;
