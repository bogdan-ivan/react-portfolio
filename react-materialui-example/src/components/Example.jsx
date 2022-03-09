import { Button } from "@mui/material";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Delete } from "@mui/icons-material";

const DeleteButton = {
  color: "red",
};

const Example = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        startIcon={<Delete />}
        style={{ backgroundColor: "purple", color: "yellow" }}
      >
        Hello World
      </Button>
      <Button
        variant="contained"
        sx={{
          height: 233,
          width: 350,
          backgroundColor: "success.dark",
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
      >
        System styled
      </Button>
      <Button
        variant="contained"
        size="large"
        color="primary"
        sx={DeleteButton}
      >
        Hi prim
      </Button>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        sx={DeleteButton}
      >
        Hi sec
      </Button>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        sx={{ ...DeleteButton, p: 5 }}
      >
        Hi sec
      </Button>
      <AcUnitIcon />
    </div>
  );
};

export default Example;
