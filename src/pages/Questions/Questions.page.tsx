// react
import { useEffect, useState } from "react";

// context
import { useReportContext } from "hooks/useReportContext";

// router dom
import { useNavigate } from "react-router-dom";

// api
import { api } from "configs/axios.config";

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
import { Loading } from "components/Loading/Loading.component";

export const QuestionsPage = () => {
  const [loading, setLoading] = useState(false);
  const [resultsData, setResultsData] = useState([]);
  const { questionsQtd } = useReportContext();

  const navigate = useNavigate();

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

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {loading ? (
        <Loading />
      ) : (
        resultsData.map((result: any, index) => {
          return (
            <FormControl key={index} sx={{ display: "flex" }}>
              <Typography variant="h5">Question 1 of {questionsQtd}</Typography>
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
            </FormControl>
          );
        })
      )}
    </Box>
  );
};
