import { Box, Button, Grid } from "@mui/material";

export const ChoosePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      maxHeight={{ height: "100%" }}
    >
      <h1>How many questions would you like to answer?</h1>
      <Grid container spacing={2}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item key={index}>
            <Button variant="outlined">xs=2</Button>
          </Grid>
        ))}
      </Grid>
      <Button>Cancel</Button>
      <Button>Confirm</Button>
    </Box>
  );
};
