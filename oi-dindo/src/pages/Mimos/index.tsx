import React, { ChangeEvent, useState } from "react";
import { Box, Container, Typography, Tab, Tabs, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as CustomCatIcon } from "../../images/CatIcon.svg";
import { ReactComponent as CustomDogIcon } from "../../images/DogIcon.svg";
import { ReactComponent as CustomPetIcon } from "../../images/PetIcon.svg";
import PostCard from "./components/postCard";

import Luna from "../../images/Luna.png";
import Nina from "../../images/Nina.png";
import Cacau from "../../images/Cacau.png";
import Anjos from "../../images/Anjos.png";
import NinaSleep from "../../images/NinaSleep.jpg";
import MundoMarley from "../../images/MarleyLogo.jpg";
import PetHelp from "../../images/PetHelpLogo.png";

const ScrollableTabs = styled(Tabs)({
  overflowX: "auto",
  whiteSpace: "nowrap",
});

const MimosPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom right, #8CC7F0, #FFFFFF 80%)",
      }}
    >
      <Box py={2}>
        <Typography variant="h4" align="left" fontWeight="500">
          Oi, Dinde!
          <br />
          Veio me ver?
        </Typography>
        <ScrollableTabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            label={
              <>
                <CustomPetIcon />
                Todos
              </>
            }
          />
          <Tab
            label={
              <>
                <CustomCatIcon />
                Nina
              </>
            }
          />
          <Tab
            label={
              <>
                <CustomCatIcon />
                Cacau
              </>
            }
          />
          <Tab
            label={
              <>
                <CustomDogIcon />
                Luna
              </>
            }
          />
          {/* Add more tabs here */}
        </ScrollableTabs>
      </Box>

      <Stack
        direction={"column"}
        spacing={3}
        height={"65%"}
        sx={{ overflowY: "scroll" }}
      >
        {(selectedTab === 0 || selectedTab === 3) && (
          <PostCard
            image={Luna}
            owner="O Mundo do Marley"
            text="A luna está animada e passeando hoje! Olha que coisa mais fofa :)"
            avatar={MundoMarley}
            ongId="2"
          />
        )}
        {(selectedTab === 0 || selectedTab === 1) && (
          <PostCard
            image={Nina}
            owner="Pet Help"
            text="Eita que preguiça! Quase que a Nina não sai da cama hoje :p"
            avatar={PetHelp}
            ongId="4"
          />
        )}
        {(selectedTab === 0 || selectedTab === 2) && (
          <PostCard
            image={Cacau}
            owner="Anjos do Poço"
            text="A Cacau está bem pensativa hoje. Mas como sempre belíssima!"
            avatar={Anjos}
            ongId="3"
          />
        )}
        {(selectedTab === 0 || selectedTab === 1) && (
          <PostCard
            image={NinaSleep}
            owner="Pet Help"
            text="Pegamos no flagra o cochilo da tarde da Nina :p"
            avatar={PetHelp}
            ongId="4"
          />
        )}
      </Stack>
    </Container>
  );
};

export default MimosPage;
