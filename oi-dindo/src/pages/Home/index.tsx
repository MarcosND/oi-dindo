import { AspectRatio, Height, Title } from "@mui/icons-material";
import {
  Typography,
  Stack,
  Container,
  Button,
  CardMedia,
  Card,
  CardContent,
  Avatar,
  Box,
  CardActionArea,
  Grid
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { useApi } from "../../contexts/api";
import { Pet } from "../../models/pet";
import { FC } from "react";
import theme from "../../global/theme";
import PostCard from "../Mimos/components/postCard";


import Ong from "../../images/ong_image.png";
import Ong1 from "../../images/ong1.png";
import Ong2 from "../../images/ong2.png";
import Ong3 from "../../images/ong3.png";

import marca1 from "../../images/marca1.png";
import marca2 from "../../images/marca2.png";
import marca3 from "../../images/marca3.png";
import marca4 from "../../images/marca4.png";

import Alfredo from "../../images/Alfredo.png";
import Geremias from "../../images/Geremias.png";
import Rodolfo from "../../images/Rodolfo.png";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

  const HomePage: FC<HomeProps> = () => {
    const navigate = useNavigate();

    const PetCard = (pic: string) => {
      return (
        <CardActionArea onClick={() => navigate("ong/pet")}>
          <CardMedia sx={{width:"40vw", aspectRatio:"auto", borderRadius: "8px"}} component="img" image={pic} />
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
            padding: "0px"
        }}
    >
    <Stack direction="column" spacing={"28px"} sx={{paddingTop:"8px"}}>
      <Typography sx={{paddingLeft:"32px"}} variant="h4" fontWeight={500}>Oi Dindo!</Typography>

      <Stack direction="column" spacing={"8px"}>
      <Typography sx={{paddingLeft:"32px"}} variant="h6" fontWeight={500}>Pets que você vai amar</Typography>

      <Box sx={{ overflow: "auto", whiteSpace: "nowrap", paddingLeft:"32px" }}>
        <Stack direction="row" spacing={"11px"}>
          {PetCard(Alfredo)}
          {PetCard(Geremias)}
          {PetCard(Rodolfo)}
        </Stack>
      </Box>
      </Stack>
    </Stack>
    
    <Stack direction="column" spacing={"28px"} sx={{paddingTop:"36px", paddingLeft:"0px"}}>
      <Stack direction="column" spacing={"8px"} sx={{ backgroundColor: "#E8F4FC", width:"100vw", height:"122px", paddingLeft:"32px"}}>
        <Typography sx={{paddingTop: "8px"}} variant="h6" fontWeight={500}>ONG'S parceiras</Typography>
        <Stack direction="row" spacing={"16px"} >
          <Avatar src={Ong} sx={{width:"65px", height:"65px"}}/>
          <Avatar src={Ong1} sx={{width:"65px", height:"65px"}}/>
          <Avatar src={Ong2} sx={{width:"65px", height:"65px"}}/>
          <Avatar src={Ong3} sx={{width:"65px", height:"65px"}}/>
        </Stack>
      </Stack>
      
      <Stack direction="column" spacing={"8px"} sx={{ backgroundColor: "#E8F4FC", width:"100vw", height:"122px", paddingLeft:"32px"}}>
        <Typography sx={{paddingTop: "8px"}} variant="h6" fontWeight={500}>Marcas parceiras</Typography>
        <Stack direction="row" spacing={"16px"} >
          <Avatar src={marca1} sx={{width:"65px", height:"65px"}}/>
          <Avatar src={marca2} sx={{width:"65px", height:"65px"}}/>
          <Avatar src={marca3} sx={{width:"65px", height:"65px"}}/>
          <Avatar src={marca4} sx={{width:"65px", height:"65px"}}/>
        </Stack>
      </Stack>

      <Stack sx={{paddingLeft: "32px", paddingRight: "32px"}} direction={"column"} spacing={"24px"} height={"65%"}>
        <PostCard />
        <PostCard />
        <PostCard />
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
