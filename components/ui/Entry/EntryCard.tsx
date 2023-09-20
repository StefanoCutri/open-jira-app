import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const EntryCard = () => {
  return (
    <Card
      sx={{
        marginBottom: 1,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            This is a description
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
            paddingRight: 2,
          }}
        >
          <Typography variant="body2">30 min ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
