import { API_KEY } from "@env";
import { useState } from "react";
import axios from "axios";

const usePalmQuery = (promptFunc) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = (input) => {
    setLoading(true);
    axios
      .post(
        `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${API_KEY}`,
        {
          prompt: { text: promptFunc(input) },
          temperature: 0.7,
          top_k: 40,
          top_p: 0.95,
          candidate_count: 1,
          max_output_tokens: 1024,
          stop_sequences: [],
        }
      )
      .then((res) => {
        setData(res.data.candidates[0].output);
        setLoading(false);
      })
      .catch((error) => {
        setData(
          "An error occured while connecting to server. Check your internet connection and retry"
        );
        setLoading(false);
      });
  };

  return { data, loading, fetchData };
};

export default usePalmQuery;
