import { Card, Icon, Stack, Typography } from "@mui/material";

import { FunctionComponent } from "react";

interface StatCardProps {
  stat: string;
  title: string;
  logo: React.ElementType;
}

const StatCard: FunctionComponent<StatCardProps> = ({ title, stat, logo }) => {
  return (
    <Stack direction="column">
      <Card sx={{ borderRadius: 2, paddingX: 2, paddingY: 0.7 }}>
        <Stack direction="row" spacing={1} alignItems={"center"}>
          <Typography variant="subtitle1" fontWeight={"semi-bold"}>
            {title}
          </Typography>
          <Icon component={logo} color="secondary" />
        </Stack>
      </Card>
      <Card
        elevation={0}
        sx={{
          borderRadius: 2,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          padding: 1,
          width: "80%",
          paddingTop: 4,
          marginTop: -3,
          zIndex: -1,
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(8px)",
          paddingX: "auto",
        }}
      >
        <Typography color="white" variant="subtitle2" fontWeight={"semi-bold"}>
          {stat}
        </Typography>
      </Card>
    </Stack>
  );
};

export default StatCard;
