import { TableCell, TableRow } from "@mui/material";
import { CellChipLesson } from "../cellChip";

const SmallTableRow = ({ arr }) => {
  return arr.map((row) => (
    <TableRow>
      <TableCell>
        {row.firstString + " "}
        {row.lessons.map((lesson) => (
          <CellChipLesson
            lessonNum={lesson}
            passed={false} //needs work
          />
        ))}
      </TableCell>
      <TableCell align="right">{row.lessonsLimit}</TableCell>
    </TableRow>
  ));
};

export default SmallTableRow;
