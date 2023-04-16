import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { FunctionComponent } from "react";

interface StatCardProps {
    
}
  
const StatCard: FunctionComponent<StatCardProps> = () => {

    

    return (
        <Stack direction="column">
            <Card sx={{borderRadius: 2, paddingX: 2, paddingY: 0.7, width: 80}}>
                <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="subtitle1" fontWeight={"semi-bold"}>{"Peso"}</Typography>
                    <FitnessCenterIcon color="secondary"/>
                </Stack>
            </Card>
            <Card 
                elevation={0}
                sx={{
                    borderRadius: 2, 
                    borderTopLeftRadius: 0, 
                    borderTopRightRadius: 0, 
                    padding: 1, 
                    width: 50, 
                    paddingTop: 4,
                    marginTop: -3,
                    zIndex: -1,
                    background: "rgba(255, 255, 255, 0.3)", 
                    backdropFilter: "blur(8px)",
                    paddingX: "auto"
                }}
            >
                <Typography color="white" variant="subtitle2" fontWeight={"semi-bold"}>{"10 Kg"}</Typography>
            </Card>
        </Stack>
    );
}
 
export default StatCard;

