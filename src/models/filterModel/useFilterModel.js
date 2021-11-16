import { useDispatch, useSelector } from "react-redux";
import { clicked, checkAll} from "./filterSlice.js";

const useFilterModel = () => {
    const dispatch = useDispatch();
    
    //gives categs by index, example [true, false, true] => [0,2]
    const getCategByChecks = (checks) => {
        return checks.reduce((categs, currentCheck, index) => {
            if (currentCheck) return [...categs, index]
            return categs;
        }, []);
    };
    
    return {
        clickCheck: (index) => dispatch(clicked(index)),
        checkAll: (index) => dispatch(checkAll(index)),
        checks: useSelector((state) => state.filter.value),
        checkedCategs: (checks) => getCategByChecks(checks)
    }
};

export default useFilterModel;