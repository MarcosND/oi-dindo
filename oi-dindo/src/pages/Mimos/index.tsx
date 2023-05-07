import React, { ChangeEvent, useState } from "react";
import { Box, Container, Typography, Tab, Tabs, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as CustomCatIcon } from "../../images/CatIcon.svg";
import { ReactComponent as CustomDogIcon } from "../../images/DogIcon.svg";
import { ReactComponent as CustomPetIcon } from "../../images/PetIcon.svg";
import PostCard from "./components/postCard";

import Luna from "../../images/Luna.png";
import MundoMarley from "../../images/MarleyLogo.jpg";

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
                Gato A
              </>
            }
          />
          <Tab
            label={
              <>
                <CustomDogIcon />
                Dog A
              </>
            }
          />
          <Tab
            label={
              <>
                <CustomDogIcon />
                Dog B
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
        <PostCard
          image={Luna}
          owner="Mundo do Marley"
          text="A luna está animada e passeando hoje!"
          avatar={MundoMarley}
          ongId={"2"}
        />
        <PostCard
          image={Luna}
          owner="Mundo do Marley"
          text="A luna está animada e passeando hoje!"
          avatar={MundoMarley}
        />
        <PostCard
          image={Luna}
          owner="Mundo do Marley"
          text="A luna está animada e passeando hoje!"
          avatar={MundoMarley}
        />
      </Stack>
    </Container>
  );
};

export default MimosPage;
