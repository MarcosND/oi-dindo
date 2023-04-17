import { Title } from "@mui/icons-material";
import {
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { useApi } from "../../contexts/api";
import { Pet } from "../../models/pet";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const api = useApi();

  const [pets, setPets] = useState<Pet[]>();

  return (
    <Stack direction="column" spacing={7}>
      {/* <Button
            onClick={async () => {
                setPets(await api.list.pets())
            }}
        >
            FETCH    
        </Button> */}
      <Typography variant="h3">Olá Dindo!</Typography>
      <Typography variant="h4">Tela em construção</Typography>
      {pets?.map((pet) => {
        const photoUrl = api.find.photo(pet.photo.data.attributes.url);
        return (
          <Card key={pet.id}>
            <CardContent>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt={pet.name}
                src={photoUrl}
              />
              <Typography variant="h3">{pet.name}</Typography>
              <Typography variant="h5">{pet.description}</Typography>
              <Typography variant="h5">Peso: {pet.weight}kg</Typography>
              <Typography variant="h5">Idade: {pet.age} anos</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Home;
