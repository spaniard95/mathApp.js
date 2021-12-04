

//filter the lessons that lesson.category include the categs
//doesnt care about selected
const getLessonsByCateg = (lessons, categs) => {
    return lessons.filter(lesson => {
        for (const category of lesson.category) {
            if (categs.includes(category)) return true;
        }
        return false;
    })
};

const groupByCategory = (array) => {
    return array.reduce((group, currentElem) => {
        const currentCateg = currentElem.selected ? 
            currentElem.category[currentElem.selected]  //if a lessons of two categories, choose the selected category
            :
            currentElem.category[0]                     //if a one categorie lesson
        ;                                                                             
        
        if(!group[currentCateg]){
            group[currentCateg] = [];
        }

        group[currentCateg].push(currentElem);
        return group;
    }, {});
};


//get the lessons with grade equal and above gradeLimit
const getLessonsByGrade = (lessons, gradeLimit) => {
    return lessons.filter(lesson => lesson.grade >= gradeLimit)
}

const getPassedLessonsBySelectedCateg = (lessons, categ) => {
    return groupByCategory(getLessonsByGrade(lessons, 5))[categ];
};

//get a categories passed lessons, can be used with array.length to get the number of passed lessons
const getPassedLessonsByCateg = (lessons, categ) => {
    return getLessonsByCateg(
        getLessonsByGrade(lessons, 5), 
        [categ]
    );
};

export const getLessonsBy = {
    getLessonsByGrade,
    getLessonsByCateg,
    getPassedLessonsByCateg,
    getPassedLessonsBySelectedCateg,
};

