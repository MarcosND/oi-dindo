import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import animatedPetJSON from './animatedPet.json' 

import Footprint from "../../images/Login.svg";
import QRCode from "../../images/qrcode.jpeg";
import Lottie from "react-lottie-player";

interface ApadrinhamentoPageProps {

}

const ApadrinhamentoPage: FunctionComponent<ApadrinhamentoPageProps> = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openDone, setOpenDone] = useState(false);

  const modalConfirmStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -45%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    py: 4,
    px: 4,
  }
  const modalBottomBoxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -45%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '12px 0 12px 12px',
    boxShadow: 24,
    py: 6,
    px: 4,
  };
  const modalTopBoxStyle = {
    zIndex: 2,
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -155%)',
    height: '10%',
    width: '50%',
    bgcolor: '#8CC7F0',
    borderRadius: '12px 12px 36px 0px',
    p: 4,
  };
  const modalAnimationStyle = {
    position: 'absolute' as 'absolute',
    left: '50%',
    transform: 'translate(-50%, -56%)',
    width: 300,
    zIndex: 2,
  };

  return (
    <>
    {/* Confirm modal */}
    <Modal
      open={openConfirm}
      onClose={() => {
        setOpenConfirm(false)
        setOpenDone(true)
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalConfirmStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Basta realizar o pagamento!
          </Typography>
          <img 
            src={QRCode}
            alt="footprint"
            style={{
              width: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Agradecemos a sua contribuição!
          </Typography>
        </Box>
    </Modal>

    {/* Done modal */}
    <Modal
      open={openDone}
      onClose={() => setOpenDone(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack>
        <Box
          sx={modalTopBoxStyle}
        >
          <Lottie
            loop
            animationData={animatedPetJSON}
            play
            style={modalAnimationStyle}
          />
        </Box>
        <Box sx={modalBottomBoxStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Você acaba de se tornar um herói na vida de um animal!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Agradecemos a sua contribuição!
          </Typography>
        </Box>
      </Stack>
    </Modal>

      <img
        src={Footprint}
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
      <Stack padding={5} spacing={3} height={"100%"} alignContent={"space-between"}>
        <Typography
          variant="h4"
          fontWeight="bold"
          alignSelf="center"
          marginBottom={5}
          align={"center"}
        >
          Falta pouco para você ser meu dindo!
        </Typography>

        <Box style={{marginBottom: '45px'}}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            style={{
              marginBottom: '50px'
            }}
          >
            <FormControlLabel value="montlhy" control={<Radio />} label="Quero contribuir mensalmente" />
            <FormControlLabel value="once" control={<Radio />} label="Quero doar uma vez só" />
          </RadioGroup>

          <Typography>Valor da contribuição</Typography>
          <TextField variant="outlined" placeholder="Digite ou escolha um valor"/>
          <Typography fontSize={12}>Você receberá mimos a cada 15 dias</Typography>
        </Box>

        <Typography>Ao clicar em Concluir, um código pix será gerado para que o pagamento seja realizado</Typography>
        <Button
          onClick={() => setOpenConfirm(true)}
          variant="contained"
          sx={{
            textTransform: "none",
            height: 60,
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          Concluir
        </Button>
      </Stack>
    </>
  );
};

export default ApadrinhamentoPage;
