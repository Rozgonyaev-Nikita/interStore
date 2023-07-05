import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { ITovarProps } from "../../interface/tovar.interface";

const SimilarTovaItem: React.FC<ITovarProps> = ({ tovar }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tovar.image}
          alt="green iguana"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ height: 60, overflow: "hidden" }}
          >
            {tovar.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: 100, overflow: "hidden" }}
          >
            {tovar.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SimilarTovaItem;
