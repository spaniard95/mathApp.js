
//filter the lessons that lesson.category include the categs
const getLessonsByCateg = (lessons, categs) => {
    return lessons.filter(lesson => {
        for (const category of lesson.category) {
            if (categs.includes(category)) return true;
        }
        return false;
    })
};

//get the lessons with grade above gradeLimit
const getLessonByGrade = (lessons, gradeLimit) => {
    return lessons.filter(lesson => lesson.grade >= gradeLimit)
}

//get a categories passed lessons, can be used with length for number of passed lessons
const getPassedLessonsByCateg = (lessons, categ) => {
    return getLessonsByCateg(
        getLessonByGrade(lessons, 5), 
        [categ]
    );
};

export const getLessonsBy = {
    getLessonByGrade,
    getLessonsByCateg,
    getPassedLessonsByCateg,
};

