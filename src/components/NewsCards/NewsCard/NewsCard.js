import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";
import axios from "axios";

const RAPID_API_KEY = "03eb101d0fmshb0706173ad1ad3fp10e571jsnec54da3a35be";
const RAPID_API_HOST = "chatgpt-42.p.rapidapi.com";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
  i,
  setSummary,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  const summarizer = async () => {
    try {
      setSummary("LOADING...");
      const response = await axios.post(
        "https://chatgpt-42.p.rapidapi.com/conversationgpt4",
        {
          messages: [
            {
              role: "user",
              content: `Give Summary of ${title} in 50 words with respect to current world news`,
            },
          ],
          system_prompt: "",
          temperature: 0.9,
          top_k: 5,
          top_p: 0.9,
          max_tokens: 256,
          web_access: false,
        },
        {
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": RAPID_API_KEY,
            "X-RapidAPI-Host": RAPID_API_HOST,
          },
        }
      );

      if (response.data.result !== null) {
        setSummary(response.data.result); // Assuming result is the data to be displayed
        console.log(response.data.result);
      } else {
        setSummary("Please Try Again");
      }
    } catch (error) {
      console.error(error);
      setSummary("Error Occurred");
    }
  };

  return (
    <Card
      ref={elRefs[i]}
      className={activeArticle === i ? classes.activeCard : classes.card}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
          title={title}
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={summarizer}>
          SUMMARIZE
        </Button>
        <Typography variant="h5" color="textSecondary" component="h2">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
