//filter the lessons that lesson.categories include the categs

const getLessonsByCateg = (lessons, categs) => {
    return lessons.filter(lesson => {
        categs.forEach(category => {
            return lesson.categories.includes(category);
        });
    })
};


