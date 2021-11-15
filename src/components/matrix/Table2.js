import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { majors, categoriesLi } from "../../library";
import { getLessonsBy } from '../../library';
import useCatalogModel from '../../models/catalogModel/useCatalogModel';
import "./matrix.css";

function createData(categoryTitle, passed, limit1, limit2, limit3) {
  return { categoryTitle, passed, limit1, limit2, limit3};
}

const rows = ( lessons1 ) => {
  const { getPassedLessonsByCateg } = getLessonsBy;  
  
  return categoriesLi.map((categoryRow, index) => {
    console.log(getPassedLessonsByCateg(lessons1, 0))
    return createData(
      categoryRow,
      getPassedLessonsByCateg(lessons1, index).length,
      majors[0].requirements[index],
      majors[1].requirements[index],
      majors[2].requirements[index],
    )
  });
};

export default function BasicTable() {
  const { lessons } = useCatalogModel();
  
  return (
    <div class="results-matrix1">
     <Typography variant="h6" gutterBottom component="div">
        Πίνακας Αποτελέσματων
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500, padding: "none"}} size="small" aria-label="a dense table">
          <TableHead height="10">
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell padding={"none"} align="center">Κατευθύνσεις</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow >
              <TableCell padding={"1"}  align="center">Κατηγορίες Μαθημάτων</TableCell>
              <TableCell align="center">Επιτυχίες</TableCell>
              <TableCell align="center">Θεωρητικών Μαθηματικών</TableCell>
              <TableCell align="center" padding={"none"}>Εφαρμοσμένων Μαθηματικών</TableCell>
              <TableCell align="center">Θεωρητικών και Εφαρμοσμένων</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows(lessons).map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                  component="th" 
                  scope="row" 
                  align="center"
                >
                  {row.categoryTitle}
                </TableCell>
                <TableCell align="center">{row.passed}</TableCell>
                <TableCell align="center">{row.limit1}</TableCell>
                <TableCell align="center">{row.limit2}</TableCell>
                <TableCell align="center">{row.limit3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}