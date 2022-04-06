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
import { useReportContext } from "../../hooks/useReportContext";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

// OPTION LIST OF QUESTION NUMBERS
const defaultQuestionsQtd = [2, 3, 4, 5, 6];

export const ChoosePage = ({ children }: LayoutProps) => {
  const [showMoreQuestionsInput, setShowMoreQuestionsInput] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | null>(
    null
  );

  const navigate = useNavigate();
  const { handleSetQuestionsQtd } = useReportContext();

  // UPDATE STATE
  const handleShowMoreQUestionInput = () => setShowMoreQuestionsInput(true);
  const handleCloseMoreQUestionInput = () => setShowMoreQuestionsInput(false);

  // GET YOUR CHOSEN NUMBER
  const handleSelectNumberOfQuestions = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const currentTarget = Number(event.currentTarget.name);
    const targetName = currentTarget;

    if (targetName === numberOfQuestions) return setNumberOfQuestions(null);

    setNumberOfQuestions(currentTarget);
  };

  const handleCancelSelectionValues = () => {
    setNumberOfQuestions(null);
    handleCloseMoreQUestionInput();
  };

  // GET THE NUMBER ENTERED BY THE USER
  const handleChangeNumberOfQuestions = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = Number(event.currentTarget.value);

    if (inputValue < 0) return;

    setNumberOfQuestions(inputValue);
  };

  const handleConfirm = () => {
    handleSetQuestionsQtd(Number(numberOfQuestions));
    navigate("/start");
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
            <Button
              variant="outlined"
              name={String(questionQtd)}
              onClick={handleSelectNumberOfQuestions}
            >
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
                placeholder="Enter a number questions"
                value={numberOfQuestions || ""}
                onChange={handleChangeNumberOfQuestions}
                focused={true}
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
          disabled={!numberOfQuestions}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </Box>
    </Container>
  );
};
