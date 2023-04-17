import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

import loginImg from "../../images/Login.svg";

interface LoginPageProps {
  setIsAuth: Dispatch<SetStateAction<string | null>>;
}

const LoginPage: FunctionComponent<LoginPageProps> = ({ setIsAuth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <img
        src={loginImg}
        alt="footprint"
        style={{
          width: "103%",
          objectFit: "cover",
          position: "absolute",
          top: 30,
          zIndex: -1,
          transform: "translate(-5%, -5%)",
        }}
      />
      <Stack padding={5} spacing={3}>
        <Typography
          variant="h4"
          fontWeight="bold"
          alignSelf="center"
          marginBottom={5}
        >
          Login
        </Typography>
        <TextField label="E-mail" variant="outlined" />
        <TextField
          label="Senha"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleClickShowPassword}
                >
                  {showPassword ? (
                    <Visibility color="primary" />
                  ) : (
                    <VisibilityOff color="primary" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box display="flex" justifyContent="space-between">
          <Button
            sx={{
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Não possuo uma conta
          </Button>
          <Button
            sx={{ textTransform: "none", color: "grey", fontStyle: "italic" }}
          >
            Esqueceu a senha?
          </Button>
        </Box>
        <Button
          onClick={() => {
            localStorage.setItem("auth", "true");
            setIsAuth("true");
          }}
          variant="contained"
          sx={{
            textTransform: "none",
            height: 60,
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          Entrar
        </Button>
      </Stack>
    </>
  );
};

export default LoginPage;
