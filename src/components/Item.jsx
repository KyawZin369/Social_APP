import { Box, Card, CardContent, Typography, IconButton,CardActionArea } from "@mui/material";

import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { green , teal} from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Item({ item, remove, primary }) {
  const navigate = useNavigate()
  return (
    <Card sx={{ mb: 2, border: primary ? 1 : 0, borderColor: teal[500] }}>
      <CardActionArea onClick={()=>navigate(`/post/${item.id}`)}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <TimeIcon fontSize="10" color="success" />
              <Typography variant="caption" sx={{ color: green[500] }}>
                A few second ago
              </Typography>
            </Box>
            <IconButton
              sx={{ color: "text.fade" }}
              size="small"
              onClick={(e) => {
                remove(item.id);
                e.stopPropagation();
              }}
            >
              <DeleteIcon color="inherit" fontSize="inherit" />
            </IconButton>
          </Box>

          <Typography sx={{ my: 3 }}>{item.content}</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <UserIcon fontSize="12" color="info" />
            <Typography variant="caption">{item.user.name}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
