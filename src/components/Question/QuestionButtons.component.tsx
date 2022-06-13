// router dom
import { useNavigate } from "react-router-dom";

// mui/material
import { Box, Button } from "@mui/material";

export const QuestionButtons = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "4rem 0",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          variant="outlined"
          size="large"
          sx={{
            width: "6rem",
            marginRight: ".6rem",
            fontWeight: "bold",
          }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "6rem",
            marginRight: ".6rem",
            fontWeight: "bold",
          }}
          disabled
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "6rem",
            marginRight: ".6rem",
            fontWeight: "bold",
          }}
        >
          Next
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "20rem", fontWeight: "bold" }}
        >
          Go To Unanswered Questions
        </Button>
      </Box>
      <Button
        variant="contained"
        size="large"
        sx={{ width: "6rem", fontWeight: "bold" }}
        disabled
      >
        Submit
      </Button>
    </Box>
  );
};
