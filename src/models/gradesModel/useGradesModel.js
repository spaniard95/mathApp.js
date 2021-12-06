import { useDispatch, useSelector } from "react-redux";
import { gradeInput } from "./gradesSlice";

const useGradesModel = () => {
  const dispatch = useDispatch();

  const handleGradeChange = (num, grade) => {
    if ((grade <= 10 && grade >= 0) || grade === "") {
      dispatch(gradeInput({ lessonId: num, grade: grade }));
    }
  };

  return {
    grades: useSelector((state) => state.grades),
    setGrade2: (num, grade) => handleGradeChange(num, grade),
  };
};

export default useGradesModel;
