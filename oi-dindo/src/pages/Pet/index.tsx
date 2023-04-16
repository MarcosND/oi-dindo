import { Avatar, Card, CardActions, CardContent, Container, Button, Typography, Box, LinearProgress, Stack, useScrollTrigger, IconButton } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import { FunctionComponent, useEffect, useRef, useState } from "react";
import avatar from "../../images/Alfredo.png"
import BannerImage from "../../components/BannerImage";
import Header from "./components/header";
import theme from "../../global/theme";

interface PetPageProps {
    
}
  
const PetPage: FunctionComponent<PetPageProps> = () => {

    const trigger = useScrollTrigger({ threshold: 0, disableHysteresis: true });
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div ref={scrollRef}>
            <BannerImage src={avatar} distance={scrollOffset}/>

            <Container>
                <Header />
                <Card sx={{borderTopLeftRadius: 36, borderTopRightRadius: 36, paddingY: 1}}>
                    <CardContent>
                        <Stack direction="column" spacing={2} sx={{padding: "16px", border: "1px solid blue", borderRadius: 6}}>

                            <Stack direction="row" spacing={2} justifyContent="start">
                                <Button 
                                    sx={{borderRadius:2, minHeight: 40, margin:0}} 
                                    variant="contained"
                                >
                                    Apadrinhar
                                </Button>
                                <Button sx={{borderRadius:2, minHeight: 40, margin:0}} variant="contained" color="primary">
                                    <ShareIcon/>
                                </Button>
                            </Stack>
                            
                            <Stack direction="column">
                                <Typography variant="body2">
                                    X% arrecadado
                                </Typography>
                                <LinearProgress variant="determinate" color="primary" value={50} 
                                    sx={{
                                        height: 24, 
                                        border: 2, 
                                        borderColor: theme.palette.primary.dark,
                                    }}
                                />
                            </Stack>
                
                        </Stack>
                    </CardContent>

                    <CardActions>
                        
                    </CardActions>

                    <CardContent>
                            <Typography sx={{paddingBottom:"4px"}} variant="h5" component="div">
                                Sobre o pet:
                            </Typography>
                            <Typography variant="body2">
                                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </Typography>
                            <Typography sx={{paddingTop:"12px"}} variant="body1">
                            #carinhoso #curioso #pelocurto #brincalhão #obediente #sociável
                            </Typography>
                    </CardContent>
                    
                    <CardActions>
                        <Stack direction="row" spacing={"11px"}>
                            <Avatar  
                                src={avatar} 
                            />
                            <Button 
                                sx={{borderRadius:2}} 
                                variant="contained">Apadrinhar
                            </Button>
                        </Stack>
                    </CardActions>

                    <CardContent sx={{marginBottom: 14}}>
                        <Box sx={{padding: "16px", border: "1px solid blue", borderRadius: "14px", width:"100vw"}}>
                                <Typography sx={{paddingBottom:"4px"}} variant="h5" component="div">
                                    Perguntas
                                </Typography>

                                <Box sx={{overflow: "auto", whiteSpace: "nowrap"}}>
                                    <Stack direction="row" spacing={"11px"}>
                                        <Box sx={{backgroundColor: theme.palette.primary.light, display: "inline-block", minWidth:230, whiteSpace: "normal"}}>
                                            <Typography color="white" sx={{padding:"8px", textAlign: "left"}} variant="h6">
                                                Pergunta
                                            </Typography>
                                            <Typography color="white" sx={{paddingLeft:"8px", paddingRight:"8px", paddingBottom:"8px",wordBreak: "normal", overflow: "hidden"}} variant="body1" align="left">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                            </Typography>
                                        </Box>
                                        <Box sx={{backgroundColor: theme.palette.primary.light, display: "inline-block", minWidth:230, whiteSpace: "normal"}}>
                                            <Typography color="white" sx={{padding:"8px", textAlign: "left"}} variant="h6">
                                                Pergunta
                                            </Typography>
                                            <Typography color="white" sx={{paddingLeft:"8px", paddingRight:"8px", paddingBottom:"8px",wordBreak: "normal", overflow: "hidden"}} variant="body1" align="left">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                            </Typography>
                                        </Box>
                                        <Box sx={{backgroundColor: theme.palette.primary.light, display: "inline-block", minWidth:230, whiteSpace: "normal"}}>
                                            <Typography color="white" sx={{padding:"8px", textAlign: "left"}} variant="h6">
                                                Pergunta
                                            </Typography>
                                            <Typography color="white" sx={{paddingLeft:"8px", paddingRight:"8px", paddingBottom:"8px",wordBreak: "normal", overflow: "hidden"}} variant="body1" align="left">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                            </Typography>
                                        </Box>
                                        <Box sx={{backgroundColor: theme.palette.primary.light, display: "inline-block", minWidth:230, whiteSpace: "normal"}}>
                                            <Typography color="white" sx={{padding:"8px", textAlign: "left"}} variant="h6">
                                                Pergunta
                                            </Typography>
                                            <Typography color="white" sx={{paddingLeft:"8px", paddingRight:"8px", paddingBottom:"8px",wordBreak: "normal", overflow: "hidden"}} variant="body1" align="left">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                            </Typography>
                                        </Box>
                                        <Box sx={{backgroundColor:"clear", display: "inline-block", minWidth:100}}></Box>
                                    </Stack>
                                </Box>
                        </Box>
                    </CardContent>
                    
                </Card>
            </Container>
        </div>
    );
}
 
export default PetPage;

