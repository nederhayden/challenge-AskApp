import { ReactNode, useState, MouseEvent, ChangeEvent } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

interface LayoutProps {
  children: ReactNode;
}

const defaultQuestionsQtd = [2, 3, 4, 5, 6];

export const ChoosePage = ({ children }: LayoutProps) => {
  const [showMoreQuestionsInput, setShowMoreQuestionsInput] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | null>(
    null
  );

  const handleShowMoreQUestionInput = () => setShowMoreQuestionsInput(true);
  const handleCloseMoreQUestionInput = () => setShowMoreQuestionsInput(false);

  const handleSelectNumberOfQuestions = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const targetName = Number(event.currentTarget.name);

    if (targetName === numberOfQuestions) return setNumberOfQuestions(null);

    setNumberOfQuestions(Number(event.currentTarget.name));
  };

  const handleCancelSelectionValues = () => {
    setNumberOfQuestions(null);
    handleCloseMoreQUestionInput();
  };

  const handleChangeNumberOfQuestions = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = Number(event.currentTarget.value);

    if (inputValue < 0) return;

    setNumberOfQuestions(inputValue);
  };

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
            <Button variant="outlined" onClick={handleSelectNumberOfQuestions}>
              {questionQtd}
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Tooltip title="Add more questions">
            {showMoreQuestionsInput ? (
              <TextField
                size="small"
                type="number"
                color="primary"
                label="Number of Questions"
                placeholder="Enter with a number of questions"
                value={numberOfQuestions || ""}
                onChange={handleChangeNumberOfQuestions}
              />
            ) : (
              <Button variant="outlined" onClick={handleShowMoreQUestionInput}>
                <AddIcon />
              </Button>
            )}
          </Tooltip>
        </Grid>
      </Grid>

      <Box sx={{ margin: "1rem" }}>
        <Button
          variant="outlined"
          size="large"
          sx={{ width: "20rem", margin: ".5rem .5rem" }}
          onClick={handleCancelSelectionValues}
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
