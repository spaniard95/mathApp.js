import { TableCell, TableRow, Typography } from "@mui/material";
import { getLessonsBy } from "../../library";
import { useGradesModel } from "../../models/gradesModel";
import { CellChip, CellChipLesson } from "../cellChip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { height } from "@mui/system";

const SmallTableRow = ({ arr }) => {
  const { grades } = useGradesModel();
  const { getPassedLessonsById } = getLessonsBy;

  //special case when we have a "pass lesson1 or lesson2" statement
  //and we get an array as lessonNum
  const correctGrade = (lessonNum) => {
    return typeof lessonNum === "number"
      ? grades[lessonNum]
      : Math.max(grades[lessonNum[0]], grades[lessonNum[1]]);
  };
  const toChipOrNot = (passed, limit) => {
    return passed >= limit ? (
      <CheckCircleOutlineIcon color="success" fontSize="medium" sx={{}} />
    ) : (
      passed + "/" + limit
    );
  };

  return arr.map((row) => (
    <TableRow>
      <TableCell>
        {row.firstString + " "}
        {row.lessons.map((lessonNum) => (
          <CellChipLesson
            lessonNum={lessonNum}
            grade={correctGrade(lessonNum)}
          />
        ))}
      </TableCell>
      <TableCell align="center" sx={{ fontWeight: "bold" }}>
        {toChipOrNot(
          getPassedLessonsById(row.lessons, grades).length,
          row.lessonsLimit
        )}
      </TableCell>
    </TableRow>
  ));
};

export default SmallTableRow;
