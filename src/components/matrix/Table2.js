import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { majors, categoriesLi } from "../../library";
import { getLessonsBy, finalGradeCalculator } from "../../library";
import useCatalogModel from "../../models/catalogModel/useCatalogModel";
import { CellChip } from "../cellChip";
import "./matrix.css";
import { styled } from "@mui/styles";

function createData(categoryTitle, passed, limit1, limit2, limit3) {
  return { categoryTitle, passed, limit1, limit2, limit3 };
}

const rows = (lessons) => {
  const { getPassedLessonsBySelectedCateg } = getLessonsBy;

  return categoriesLi.map((categoryRow, index) => {
    // console.log( categoryRow + getPassedLessonsByCateg(lessons, 0).length)
    return createData(
      categoryRow,
      getPassedLessonsBySelectedCateg(lessons, index)?.length || 0,
      majors[0].requirementsStrings[index],
      majors[1].requirementsStrings[index],
      majors[2].requirementsStrings[index]
    );
  });
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: "rgb(153, 187, 187)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function BasicTable() {
  const { lessons } = useCatalogModel();
  const { getLessonsByGrade } = getLessonsBy;

  const lessonsSum = getLessonsByGrade(lessons, 5).length; //returns array with all passed lessons

  console.log(finalGradeCalculator(getLessonsByGrade(lessons, 5)));
  return (
    <div class="results-matrix1">
      <Typography variant="h6" gutterBottom component="div">
        Πίνακας Αποτελέσματων
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 500, padding: "none" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead height="10">
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell padding={"none"} align="center">
                Κατευθύνσεις
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding={"1"} align="center">
                Κατηγορίες Μαθημάτων
              </TableCell>
              <TableCell align="center">Επιτυχίες</TableCell>
              <TableCell align="center">Θεωρητικών Μαθηματικών</TableCell>
              <TableCell align="center" padding={"none"}>
                Εφαρμοσμένων Μαθηματικών
              </TableCell>
              <TableCell align="center">Θεωρητικών και Εφαρμοσμένων</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows(lessons).map((row, index) => (
              <StyledTableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.categoryTitle}
                </TableCell>
                <TableCell align="center">{row.passed}</TableCell>

                <CellChip
                  limit={row.limit1}
                  passed={row.passed}
                  index={index}
                />
                <CellChip
                  limit={row.limit2}
                  passed={row.passed}
                  index={index}
                />
                <CellChip
                  limit={row.limit3}
                  passed={row.passed}
                  index={index}
                />
              </StyledTableRow>
            ))}
            <TableRow sx={{ backgroundColor: "white" }}>
              <TableCell align="center">Σύνολο</TableCell>
              <TableCell align="center">{lessonsSum}</TableCell>
              <CellChip limit={36} passed={lessonsSum} index={-1} />
              <CellChip limit={36} passed={lessonsSum} index={-1} />
              <CellChip limit={36} passed={lessonsSum} index={-1} />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
