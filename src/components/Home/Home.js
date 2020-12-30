import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { withHtmlPageMetadata } from "../HtmlPageMetadata";
import Items from "./Items";

function Home() {
  function useQueryParam() {
    return new URLSearchParams(useLocation().search);
  }

  const queryParam = useQueryParam();
  const pageFromUrl = Number(queryParam.get("page") || 0);

  const [page, setPage] = useState(pageFromUrl);
  useEffect(() => {
    setPage(pageFromUrl);
  }, [pageFromUrl]);

  return (
    <section>
      <Typography variant="h3" component="strong" display="block">
        Asta online di beneficenza
      </Typography>
      <Items page={page} />
    </section>
  );
}

export default withHtmlPageMetadata(
  "Aste online - Register devs",
  "Puoi comprare tutto quello che vuoi, se hai i soldini"
)(Home);
