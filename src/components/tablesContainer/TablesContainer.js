import AccordionTables from "../accordionTables"
import BasicTable from "../matrix";

import "./tablesContainer.css"

const TablesContainer = () => {
    return (
        <div class="tables-container">
            <BasicTable/>
            <AccordionTables/>
        </div>
    );
};

export default TablesContainer;