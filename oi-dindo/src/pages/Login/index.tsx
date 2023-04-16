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

interface LoginPageProps {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const LoginPage: FunctionComponent<LoginPageProps> = ({ setIsAuth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
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
                {showPassword ? <Visibility /> : <VisibilityOff />}
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
        onClick={() => setIsAuth(true)}
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
  );
};

export default LoginPage;
