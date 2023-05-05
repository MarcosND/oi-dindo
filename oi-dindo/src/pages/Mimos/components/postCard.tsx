import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  CardMedia,
  IconButton,
  Modal,
} from "@mui/material";
import { useState, FC } from "react";
import ShareIcon from "@mui/icons-material/Share";
import Lottie from "react-lottie-player";
import animatedPetJSON from "../../../images/animatedPet.json";
import SharingComponent from "../../../components/Sharing";

interface PostCardProps {
  image: string;
  text: string;
  owner: string;
}

const PostCard: FC<PostCardProps> = ({ image, owner, text }) => {
  const modalBottomBoxStyle = {
    position: "absolute" as "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -45%)",
    width: "80%",
    bgcolor: "background.paper",
    borderRadius: "0 0 12px 12px",
    boxShadow: 24,
    pt: 8,
    pb: 4,
    px: 4,
  };
  const modalTopBoxStyle = {
    zIndex: 2,
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -140%)",
    height: "20%",
    width: "80%",
    bgcolor: "#8CC7F0",
    borderRadius: "12px 12px 36px 0px",
    p: 4,
  };
  const modalAnimationStyle = {
    position: "absolute" as "absolute",
    left: "50%",
    transform: "translate(-50%, -56%)",
    width: 300,
    zIndex: 2,
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box>
        {/* Render the list of posts here */}
        <Card sx={{ borderRadius: 2, backgroundColor: "#E8F4FC" }}>
          <CardContent>
            <Stack direction="row">
              <Typography variant="h6" component="div">
                {owner}
              </Typography>
            </Stack>
          </CardContent>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt="Animal Image"
            sx={{
              padding: 2,
              borderRadius: 8,
            }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
          <IconButton aria-label="share" onClick={handleClickOpen}>
            <ShareIcon />
          </IconButton>
        </Card>
      </Box>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack>
          <Box sx={modalTopBoxStyle}>
            <Lottie
              loop
              animationData={animatedPetJSON}
              play
              style={modalAnimationStyle}
            />
          </Box>
          <Box sx={modalBottomBoxStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Compartilhe sobre mim!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Toda a ajuda é válida e quanto mais gente me ajudando, melhor.
            </Typography>
            <Stack direction="row" justifyContent={"center"} marginTop={2}>
              <SharingComponent
                shareUrl={"https://www.instagram.com/cantinhofilo/"}
                title={`Econtrei ${"Alfredo"} do ${"Cantinho da Filó"} pelo app Oi, Dindo!\n`}
              />
            </Stack>
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

export default PostCard;
