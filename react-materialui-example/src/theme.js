//import { createTheme } from "@mui/system";
import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    },
    deleteButton: {
      backgroundColor: "red",
      border: "1px solid black",
    },
  },
});
