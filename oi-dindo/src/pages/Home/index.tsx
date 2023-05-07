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
import OiDindoIcon from "../../images/OiDindoIcon.png";
import PetHelpImage from "../../images/PetHelpBanner.png";
import ThanksImage from "../../images/ThankYou.jpg";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
  const navigate = useNavigate();

  const PetCard = (pic: string, id: number, ongId: number, name: string) => {
    return (
      <CardActionArea
        onClick={() => navigate(`ong/${ongId}/pet/${id}`)}
        sx={{ position: "relative" }}
      >
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
        <Typography top={185} left={10} position="absolute" color="white">
          {name}
        </Typography>
      </CardActionArea>
    );
  };

  return (
    <Container
      sx={{
        width: "95vw",
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
              {PetCard(Peludo, 21, 2, "Peludo")}
              {PetCard(Dourado, 11, 1, "Dourado")}
              {PetCard(Luna, 22, 2, "Luna")}
              {PetCard(Liz, 12, 1, "Liz")}
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
          paddingLeft={2}
          direction={"column"}
          spacing={"24px"}
          height={"65%"}
        >
          <PostCard
            image={Morning}
            owner="Dindo Admin"
            text="Bom dia! Preparado para apadrinhar um novo pet hoje? :)"
            avatar={OiDindoIcon}
            isNews
          />
          <PostCard
            image={PetHelpImage}
            owner="Dindo Admin"
            text="Hoje estamos muito animados para anunciar a nova Ong parceira do Oi, Dindo! Sejam bem vindos ao time, PetHelp!"
            avatar={OiDindoIcon}
            isNews
          />
          <PostCard
            image={ThanksImage}
            owner="Dindo Admin"
            text="Hoje é dia de reconhecer todos os nossos maravilhosos parceiros que tornar o Oi Dindo possível. Obrigado!"
            avatar={OiDindoIcon}
            isNews
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
