import useCatalogModel from "./useCatalogModel";

const useLessonsCatalog = () => {
    const {lessons} = useLessonsCatalog();

    return {
        lessonsCatalog: lessons,
        getLessonsByCateg: "",
        getLessonsByFilterChecks: "",
        getPassedLessons: "", 
        
    }
};

export default useLessonsCatalog;