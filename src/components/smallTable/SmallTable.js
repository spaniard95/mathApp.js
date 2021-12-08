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

const SmallTable = ({ arr1, arr2 }) => {
  return (
    <TableContainer sx>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <Chip label="Επιλογή 1" />
          </TableRow>
          <TableRow>
            <TableCell>Απαιτούμενα μαθήματα</TableCell>
            <TableCell align="right">Σύνολο</TableCell>
          </TableRow>
          <SmallTableRow arr={arr1} />
        </TableHead>
      </Table>
      {/* second table/second choice */}
      <Table size="small" aria-label="a dense table" sx={{ mt: 2 }}>
        <TableHead>
          <TableRow sx={{ padding: 0 }}>
            <Chip label="Επιλογή 2" />
          </TableRow>
          <TableRow>
            <TableCell>Απαιτούμενα μαθημάτα</TableCell>
            <TableCell align="right">Σύνολο</TableCell>
          </TableRow>
          <SmallTableRow arr={arr2} />
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default SmallTable;
