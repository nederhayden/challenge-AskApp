// react
import { useEffect, useState } from "react";

// context
import { useReportContext } from "hooks/useReportContext";

// api
import { api } from "configs/axios.config";

// mui/material
import {
  Box,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  Card,
} from "@mui/material";

// components
import { Loading } from "components/Loading/Loading.component";
import { QuestionButtons } from "components/Question/QuestionButtons.component";

export const QuestionsPage = () => {
  const [loading, setLoading] = useState(false);
  const [resultsData, setResultsData] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const { questionsQtd } = useReportContext();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await api.get(`/api.php?amount=${questionsQtd}`);
      const data = response.data.results;

      setResultsData(data);
      console.log(data);

      setLoading(false);
    };

    getData();
  }, [questionsQtd]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {loading ? (
        <Loading />
      ) : (
        resultsData.map((result: any, index) => {
          if (activeQuestion === index) {
            return (
              <FormControl key={index} sx={{ display: "flex" }}>
                <Typography variant="h5">{`Question ${
                  activeQuestion + 1
                } of ${questionsQtd}`}</Typography>
                <FormLabel sx={{ fontSize: "14px", fontWeight: "bold" }}>
                  Difficulty: {result.difficulty}
                </FormLabel>
                <FormLabel
                  sx={{
                    margin: "1rem 0",
                  }}
                >
                  {result.question}
                </FormLabel>
                <Card
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
                  <FormControlLabel
                    value={result.correct_answer}
                    control={<Radio />}
                    label={result.correct_answer}
                  />
                </Card>

                <QuestionButtons />
              </FormControl>
            );
          }
        })
      )}
    </Box>
  );
};
