// react
import { useState, MouseEvent, ChangeEvent } from "react";

// router dom
import { useNavigate } from "react-router-dom";

// context
import { useReportContext } from "hooks/useReportContext";

// mui/material
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

// option list of question numbers
const defaultQuestionsQtd = [2, 3, 4, 5, 6];

export const ChoosePage = () => {
  const [showMoreQuestionsInput, setShowMoreQuestionsInput] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | null>(
    null
  );

  const { handleSetQuestionsQtd } = useReportContext();

  const navigate = useNavigate();

  //  update state
  const handleShowMoreQUestionInput = () => {
    setNumberOfQuestions(null);
    setShowMoreQuestionsInput(true);
  };
  const handleCloseMoreQUestionInput = () => setShowMoreQuestionsInput(false);

  // get your chosen number
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

  // get the number entered by the user
  const handleChangeNumberOfQuestions = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = Number(event.currentTarget.value);

    if (inputValue < 0) return;

    setNumberOfQuestions(inputValue);
  };

  const handleConfirm = () => {
    // passing numberOfQuestions for start page
    handleSetQuestionsQtd(Number(numberOfQuestions));
    navigate("/start");
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
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
              variant={
                numberOfQuestions === questionQtd ? "contained" : "outlined"
              }
              name={String(questionQtd)}
              onClick={handleSelectNumberOfQuestions}
              sx={{ fontWeight: "bold" }}
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
          sx={{ width: "20rem", margin: ".5rem .5rem", fontWeight: "bold" }}
          onClick={handleCancelSelectionValues}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "20rem", margin: ".5rem .5rem", fontWeight: "bold" }}
          disabled={!numberOfQuestions}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </Box>
    </Container>
  );
};
