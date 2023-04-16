import { Avatar, Card, CardActions, CardContent, Container, Button, Typography, Box, LinearProgress, Stack, Hidden } from "@mui/material";
import { FunctionComponent } from "react";
import avatar from "../../images/Alfredo.png"

interface PetPageProps {
    
}
 
const PetPage: FunctionComponent<PetPageProps> = () => {
    return (
        <Container>
            <Avatar  
            src={avatar} 
            variant="square"
            sx={{ width: '90vw', height: '120vw' }}
            />

            <Card elevation={0}>
                <Stack spacing={"0px"}>
                <CardContent>
                    <Box sx={{padding: "16px", border: "1px solid blue", borderRadius: "14px"}}>
                        <Typography sx={{paddingBottom:"8px"}} variant="h5" component="div">
                            Alfredo
                        </Typography>
                        <Typography variant="body2">
                            X% arrecadado
                        </Typography>
                        <LinearProgress variant="determinate" value={50} sx={{height: 24}}/>
                    </Box>
                </CardContent>

                <CardActions>
                    <Button 
                    sx={{borderRadius:2, minHeight: 40, left: "50%", margin:0, msTransform: "translateX(-50%)", transform: "translateX(-50%)"}} 
                    variant="contained">
                        Apadrinhar
                    </Button>
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

                <CardContent>
                    <Box sx={{padding: "16px", border: "1px solid blue", borderRadius: "14px", width:"100vw"}}>
                            <Typography sx={{paddingBottom:"4px"}} variant="h5" component="div">
                                Perguntas
                            </Typography>

                            <Box sx={{overflow: "auto", whiteSpace: "nowrap"}}>
                                <Stack direction="row" spacing={"11px"}>
                                    <Box sx={{backgroundColor: "blue", display: "inline-block", minWidth:230, whiteSpace: "normal"}}>
                                        <Typography sx={{padding:"8px", textAlign: "left"}} variant="h6">
                                            Pergunta
                                        </Typography>
                                        <Typography sx={{paddingLeft:"8px", paddingRight:"8px", paddingBottom:"8px",wordBreak: "normal", overflow: "hidden"}} variant="body1" align="left">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </Typography>
                                    </Box>
                                    <Box sx={{backgroundColor: "blue", display: "inline-block", minWidth:230, whiteSpace: "normal"}}>
                                        <Typography sx={{padding:"8px", textAlign: "left"}} variant="h6">
                                            Pergunta
                                        </Typography>
                                        <Typography sx={{paddingLeft:"8px", paddingRight:"8px", paddingBottom:"8px",wordBreak: "normal", overflow: "hidden"}} variant="body1" align="left">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </Typography>
                                    </Box>
                                    <Box sx={{backgroundColor: "blue", display: "inline-block", minWidth:230, whiteSpace: "normal"}}>
                                        <Typography sx={{padding:"8px", textAlign: "left"}} variant="h6">
                                            Pergunta
                                        </Typography>
                                        <Typography sx={{paddingLeft:"8px", paddingRight:"8px", paddingBottom:"8px",wordBreak: "normal", overflow: "hidden"}} variant="body1" align="left">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </Typography>
                                    </Box>
                                    <Box sx={{backgroundColor: "blue", display: "inline-block", minWidth:230, whiteSpace: "normal"}}>
                                        <Typography sx={{padding:"8px", textAlign: "left"}} variant="h6">
                                            Pergunta
                                        </Typography>
                                        <Typography sx={{paddingLeft:"8px", paddingRight:"8px", paddingBottom:"8px",wordBreak: "normal", overflow: "hidden"}} variant="body1" align="left">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </Typography>
                                    </Box>
                                    <Box sx={{backgroundColor:"clear", display: "inline-block", minWidth:100}}></Box>
                                </Stack>
                            </Box>
                    </Box>
                </CardContent>
                </Stack>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                
            </Card>
        </Container>
    );
}
 
export default PetPage;

