import { ReactNode } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

interface LayoutProps {
  children: ReactNode;
}

const defaultQuestionsQtd = [2, 3, 4, 5, 6];

export const ChoosePage = ({ children }: LayoutProps) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "92%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ margin: "1rem" }}>
        How many questions would you like to answer?
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
        }}
      >
        {defaultQuestionsQtd.map((questionQtd) => (
          <Grid item key={questionQtd}>
            <Button variant="outlined">{questionQtd}</Button>
          </Grid>
        ))}
        <Grid item>
          <Tooltip title="Add more questions">
            <Button variant="outlined">
              <AddIcon />
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Box sx={{ margin: "1rem" }}>
        <Button
          variant="outlined"
          size="large"
          sx={{ width: "20rem", margin: ".5rem .5rem" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "20rem", margin: ".5rem .5rem" }}
          disabled
        >
          Confirm
        </Button>
      </Box>
    </Container>
  );
};
