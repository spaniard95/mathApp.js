import Card from "../card";
import "./catalog.css";
import { Pagination, Typography } from "@mui/material";
import { useFilterModel } from "../../models/filterModel";
import useCatalogModel from "../../models/catalogModel/useCatalogModel";
import { getLessonsBy, groupByPages } from "../../library";
import { useEffect, useState } from "react";
import { useGradesModel } from "../../models/gradesModel";

const Catalog = () => {
  const [pageNum, setPageNum] = useState(1); //pageNum is the current page in the pagination

  //accessing the slices of redux state
  const { checks, checkedCategs } = useFilterModel();
  const { lessons } = useCatalogModel();
  const { grades } = useGradesModel();

  const { getLessonsByCateg } = getLessonsBy;

  //we get the filtered by categ-checks lessons
  const filteredLessons = getLessonsByCateg(lessons, checkedCategs(checks));
  //we groupBy the lessons by page
  const perPageLessons = groupByPages(filteredLessons, 30); //30 lessons per page, can be customised

  // if the number of pages is too much after a filterCheck go to the last page
  useEffect(() => {
    if (Object.keys(perPageLessons).length <= pageNum)
      setPageNum(Object.keys(perPageLessons).length);
  }, [perPageLessons]);

  return (
    <div className="catalog-box">
      <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
        {`Κατάλογος μαθημάτων (${filteredLessons.length})`}
      </Typography>
      <div class="pagination">
        <Pagination
          sx={{ float: "right" }}
          shape="rounded"
          size="small"
          count={Object.keys(perPageLessons).length}
          onChange={(e) => setPageNum(e.target.textContent)} //i think it is legit
        />
      </div>
      <list class="card-container">
        {perPageLessons[pageNum]?.map((lesson) => (
          <Card
            num={lesson.number}
            title={lesson.name}
            category={lesson.category}
            grade={grades[lesson.number]}
            selected={lesson.selected}
          />
        ))}
      </list>
    </div>
  );
};

export default Catalog;
