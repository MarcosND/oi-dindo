import { Typography, Stack, Avatar, Button, Box, Divider } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

import Img from "../../images/Profile_Pic.svg";
import Pet from "@mui/icons-material/Pets";
import Favorite from "@mui/icons-material/Favorite";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  setIsAuth: Dispatch<SetStateAction<string | null>>;
}

const Profile: FC<ProfileProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" alignItems="center">
      <Avatar
        sx={{
          height: 150,
          width: 150,
          marginTop: 3,
          border: "2px solid #FAB15D",
        }}
        src={Img}
      />
      <Typography variant="h4" fontWeight="bold" marginY={2}>
        Lucas Silva
      </Typography>
      <Button
        sx={{
          display: "flex",
          alignItem: "center",
          width: "100%",
          justifyContent: "space-between",
          paddingY: 2,
          paddingX: 4,
          boxSizing: "border-box",
          borderBottom: "1px solid #D67224",
        }}
        onClick={() => navigate("/mimos")}
      >
        <Box display="flex" alignItems="center">
          <Favorite color="secondary" />
          <Typography
            variant="button"
            sx={{
              textTransform: "none",
              fontSize: "23px",
              color: "black",
              marginLeft: 1,
            }}
          >
            Meus Mimos
          </Typography>
        </Box>
        <Arrow color="secondary" />
      </Button>
      <Divider sx={{ background: "#FAB15D" }} />
      <Button
        sx={{
          display: "flex",
          alignItem: "center",
          width: "100%",
          justifyContent: "space-between",
          paddingY: 2,
          paddingX: 4,
          boxSizing: "border-box",
          borderBottom: "1px solid #D67224",
        }}
        onClick={() => navigate("/")}
      >
        <Box display="flex" alignItems="center">
          <Pet color="secondary" />
          <Typography
            variant="button"
            sx={{
              textTransform: "none",
              fontSize: "23px",
              color: "black",
              marginLeft: 1,
            }}
          >
            Novidades
          </Typography>
        </Box>
        <Arrow color="secondary" />
      </Button>
      <Button
        sx={{
          display: "flex",
          alignItem: "center",
          width: "100%",
          justifyContent: "space-between",
          paddingY: 2,
          paddingX: 4,
          boxSizing: "border-box",
          borderBottom: "1px solid #D67224",
        }}
        onClick={() => {
          localStorage.setItem("auth", "false");
          setIsAuth("false");
          navigate("/");
        }}
      >
        <Box display="flex" alignItems="center">
          <Logout color="secondary" />
          <Typography
            variant="button"
            sx={{
              textTransform: "none",
              fontSize: "23px",
              color: "black",
              marginLeft: 1,
            }}
          >
            Sair
          </Typography>
        </Box>
        <Arrow color="secondary" />
      </Button>
    </Stack>
  );
};

export default Profile;
