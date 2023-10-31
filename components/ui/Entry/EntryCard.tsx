import { DragEvent, useContext } from "react";
import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { UIContext } from "@/context/ui";
import { useRouter } from "next/router";
import { getDateFormatFromNow } from "@/utils/dateFunctions";

interface Props {
  entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {
  const { setOnDragEnd, setOnDragStart } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    setOnDragStart();
  };

  const onDragEnd = () => {
    setOnDragEnd();
  };

  const onClick = () => {
    const router = useRouter();
    router.push(`/entries/${entry._id}`);
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        marginBottom: 1,
      }}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
            paddingRight: 2,
          }}
        >
          <Typography variant="body2">{getDateFormatFromNow(entry.createdAt)}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
