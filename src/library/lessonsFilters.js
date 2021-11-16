

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
            currentElem.category[currentElem.selected]  //if two categories, choose the selected
            :
            currentElem.category[0]                     //if one categorie exists
        ;                                                                             
        
        if(!group[currentCateg]){
            group[currentCateg] = [];
        }

        group[currentCateg].push(currentElem);
        return group;
    }, {});
};


//get the lessons with grade above gradeLimit
const getLessonByGrade = (lessons, gradeLimit) => {
    return lessons.filter(lesson => lesson.grade >= gradeLimit)
}

const getPassedLessonsBySelectedCateg = (lessons, categ) => {
    return groupByCategory(getLessonByGrade(lessons, 5))[categ];
};

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
    getPassedLessonsBySelectedCateg,
};

