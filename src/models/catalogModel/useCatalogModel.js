import { useDispatch, useSelector } from "react-redux";
import { gradeInput, categoryChange } from "./catalogSlice";

const useCatalogModel = () => {
    const dispatch = useDispatch();
    
    //not used 
    const handleCategoryChange = (num, categoryIndex) => {
        dispatch(categoryChange({num: num, selected: categoryIndex}))
    };
    //if grade acceptable (5<=grade<=10) update catalog
    const handleGradeChange = (num, grade) => {  
        if(grade<=10 && grade>=0 || grade==="") dispatch(gradeInput({num: num,grade: grade})); //if grade acceptable update catalog

    };

    return {
        lessons: useSelector((state) => state.catalog),
        setCategoryChange: (num, categoryIndex) => dispatch(categoryChange({num: num, selected: categoryIndex})),
        setGrade: (num, grade) => handleGradeChange(num, grade),   
    };
};

export default useCatalogModel;