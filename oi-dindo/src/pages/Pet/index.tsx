import { Avatar, Card, CardActions, CardContent, Container, Button, Typography, Box, LinearProgress, Stack } from "@mui/material";
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
            sx={{ width: '100vw', height: '120vw' }}
            />

            <Card elevation={0}>
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
                    sx={{borderRadius:2, minHeight: 40}} 
                    variant="contained">Apadrinhar
                    </Button>
                </CardActions>

                <CardContent>
                    <Box sx={{padding: "16px", border: "1px solid blue", borderRadius: "14px"}}>
                        <Typography sx={{paddingBottom:"4px"}} variant="h5" component="div">
                            Sobre o pet:
                        </Typography>
                        <Typography variant="body2">
                            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </Typography>
                        <Typography sx={{paddingTop:"12px"}} variant="body1">
                        #carinhoso #curioso #pelocurto #brincalhão #obediente #sociável
                        </Typography>
                    </Box>
                </CardContent>

                <CardActions>
                    <Stack direction="row" spacing={"11px"}>
                        <Avatar  
                            src={avatar} 
                            sx={{}}
                        />
                        <Button 
                            sx={{borderRadius:2, minHeight: 40}} 
                            variant="contained">Apadrinhar
                        </Button>
                    </Stack>
                </CardActions>

                <CardContent>
                    <Box sx={{padding: "16px", border: "1px solid blue", borderRadius: "14px"}}>
                            <Typography sx={{paddingBottom:"4px"}} variant="h5" component="div">
                                Perguntas
                            </Typography>

                            <Box sx={{overflow: "auto", whiteSpace: "nowrap"}}>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    Home
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    News
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    Contact
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    teste1
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    teste2
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    teste3
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    teste4
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    teste4
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    teste4
                                </Typography>
                                <Typography sx={{padding:"8px", display: "inline-block", textAlign: "center"}} variant="body1">
                                    teste4
                                </Typography>
                            </Box>
                    </Box>
                </CardContent>

                <CardActions>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </CardActions>
            </Card>
        </Container>
    );
}
 
export default PetPage;

