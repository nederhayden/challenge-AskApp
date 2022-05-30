// context
import { useReportContext } from "hooks/useReportContext";

// router dom
import { useNavigate } from "react-router-dom";

// bootstrap
import { Box, Typography, Stack, Button } from "@mui/material";

export const StartPage = () => {
  const { questionsQtd } = useReportContext();

  const navigate = useNavigate();

  const handleReturnToChoose = () => {
    navigate("/");
  };

  const handleStart = () => {
    navigate("/questions");
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h4" textAlign="center" fontWeight="light">
          You will reply {questionsQtd} questions
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Button
              variant="outlined"
              size="large"
              sx={{ width: "6rem", margin: ".5rem .5rem", fontWeight: "bold" }}
              onClick={handleReturnToChoose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "6rem", margin: ".5rem .5rem", fontWeight: "bold" }}
              onClick={handleStart}
            >
              Start
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
