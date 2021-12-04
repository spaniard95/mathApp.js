import {
  Chip,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SmallTableRow from "./SmallTableRow";
import didaktikiFirst from "../../library/eidikeuseis";

const SmallTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <Chip label="Επιλογή 1" />
          </TableRow>
          <TableRow>
            <TableCell>Απαιτούμενα μαθήματα</TableCell>
            <TableCell align="right">Σύνολο</TableCell>
          </TableRow>

          <SmallTableRow arr={didaktikiFirst} />
        </TableHead>
      </Table>
      {/* second table/second choice */}
      <Table sx={{ mt: 5 }}>
        <TableHead>
          <TableRow sx={{ padding: 0 }}>
            <Chip label="Επιλογή 2" />
          </TableRow>
          <TableRow>
            <TableCell>Απαιτούμενα μαθημάτα</TableCell>
            <TableCell align="right">Σύνολο</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default SmallTable;
