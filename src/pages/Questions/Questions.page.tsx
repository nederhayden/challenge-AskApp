// bootstrap
import {
  Box,
  Button,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  Card,
} from "@mui/material";

const questions = ["Teste1", "Teste2", "Teste3", "Teste4"];

export const QuestionsPage = () => {
  return (
    <FormControl sx={{ display: "flex" }}>
      <Typography variant="h5">Question 1 of 6</Typography>
      <FormLabel sx={{ fontSize: "14px", fontWeight: "bold" }}>
        Difficulty: Medium
      </FormLabel>
      <FormLabel
        sx={{
          margin: "1rem 0",
        }}
      >
        In the 1994 movie "Speed", what is the minimum speed the bus must go to
        prevent to bomb from exploding?
      </FormLabel>
      {questions.map((q, index) => (
        <Card
          key={index}
          elevation={0}
          sx={{
            display: "flex",
            paddingLeft: "1rem",
            margin: ".2rem 0",
            border: "1px solid #c6c6c6",
            borderRadius: "4px",
            height: "60px",
          }}
        >
          <FormControlLabel value="teste" control={<Radio />} label={q} />
        </Card>
      ))}

      <Box
        sx={{
          display: "flex",
          margin: "4rem 0",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "6rem", marginRight: ".6rem", fontWeight: "bold" }}
            disabled
          >
            Back
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "6rem", marginRight: ".6rem", fontWeight: "bold" }}
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
    </FormControl>
  );
};
