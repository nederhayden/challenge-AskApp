// bootstrap
import {
  Box,
  Container,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { ButtonComponent } from "components/Button/Button.component";

const questions = ["Teste1", "Teste2", "Teste3", "Teste4"];

export const QuestionsPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormControl>
        <Typography variant="h5">Question 1 of 6</Typography>
        <FormLabel sx={{ fontSize: "14px", fontWeight: "bold" }}>
          Difficulty: Medium
        </FormLabel>
        <FormLabel
          sx={{
            margin: "1rem 0",
          }}
        >
          In the 1994 movie "Speed", what is the minimum speed the bus must go
          to prevent to bomb from exploding?
        </FormLabel>
        <RadioGroup>
          {questions.map((q) => (
            <FormControlLabel
              sx={{
                border: "1px solid #c6c6c6",
                borderRadius: "4px",
                height: "60px",
                margin: ".2rem",
              }}
              value="teste"
              control={<Radio />}
              label={q}
            />
          ))}
        </RadioGroup>

        <Box
          sx={{
            display: "flex",
            margin: "4rem 0",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <ButtonComponent
              name="Back"
              variant="contained"
              marginRight=".6rem"
              disabled
            />
            <ButtonComponent
              name="Next"
              variant="contained"
              marginRight=".6rem"
            />
            <ButtonComponent
              name="Go To Unanswered Questions"
              variant="contained"
            />
          </Box>
          <ButtonComponent name="Submit" variant="contained" disabled />
        </Box>
      </FormControl>
    </Container>
  );
};
