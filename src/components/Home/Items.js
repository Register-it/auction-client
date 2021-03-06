import React from "react";
import ItemPreview from "./ItemPreview";
import ItemPreviewLoader from "./ItemPreviewLoader";

import Error from "../Error/Error";
import { Pagination, Skeleton } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import { useGetItems } from "../../api/AuctionApi";

export default function Items({ page }) {
  const history = useHistory();
  const { loading, items, error, pagination } = useGetItems(page);
  const { resultPerPage, isLast, totalElements, isFirst } = pagination;

  function handlePageChange(_, page) {
    history.push("?page=" + page);
  }

  if (loading) {
    return (
      <section>
        <Skeleton animation="wave" width={`100%`} height={60} />
        {items.map((_) => (
          <ItemPreviewLoader key={Math.random().toString(8)} />
        ))}
      </section>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <section>
      <Pagination
        count={Math.floor(totalElements / resultPerPage)}
        showFirstButton={!isFirst}
        showLastButton={!isLast}
        hideNextButton={isLast}
        size="medium"
        page={page}
        onChange={handlePageChange}
      />
      {items.map((item) => (
        <ItemPreview item={item} key={item.id} />
      ))}
      <Pagination
        count={Math.floor(totalElements / resultPerPage)}
        showFirstButton={!isFirst}
        showLastButton={!isLast}
        hideNextButton={isLast}
        size="medium"
        page={page}
        onChange={handlePageChange}
      />
    </section>
  );
}
