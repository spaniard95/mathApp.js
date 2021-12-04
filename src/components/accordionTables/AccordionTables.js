import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import SmallTable from "../smallTable";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionTables = () => {
    return (
        <div>
            <Typography variant="h6" gutterBottom component="div" marginTop={10}>
                Πίνακες Ειδικεύσεων
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}         
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        marginTop: 2
                    }}
                >
                    <Typography>Ειδίκευση Διδακτικής</Typography>
                </AccordionSummary>
                <AccordionDetails>
                 {/* first table */}
                 <SmallTable/> 
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}         
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        marginTop: 2
                    }}
                >
                    <Typography>Ειδίκευση Στατιστικής και Επιχειρησιακής Έρευνας</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* second table */}
                    <SmallTable/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}         
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        marginTop: 2
                    }}
                >
                    <Typography>Ειδίκευση Υπολογιστικών Μαθηματικών</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* third table */}
                    <SmallTable/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
export default AccordionTables;