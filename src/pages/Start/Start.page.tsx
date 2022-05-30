// context
import { useReportContext } from "hooks/useReportContext";

// router dom
import { useNavigate } from "react-router-dom";

// bootstrap
import { Box, Typography, Stack } from "@mui/material";
import { ButtonComponent } from "components/Button/Button.component";

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
            <ButtonComponent
              name="Cancel"
              variant="outlined"
              width="6rem"
              onClick={handleReturnToChoose}
            />

            <ButtonComponent
              name="Start"
              variant="contained"
              width="6rem"
              onClick={handleStart}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
