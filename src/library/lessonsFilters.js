//filter the lessons that lesson.category include the categs
//doesnt care about selected
const getLessonsByCateg = (lessons, categs) => {
  return lessons.filter((lesson) => {
    for (const category of lesson.category) {
      if (categs.includes(category)) return true;
    }
    return false;
  });
};
//not used
const groupByCategory = (array) => {
  return array.reduce((group, currentElem) => {
    const currentCateg = currentElem.selected
      ? currentElem.category[currentElem.selected] //if a lessons of two categories, choose the selected category
      : currentElem.category[0]; //if a one categorie lesson
    if (!group[currentCateg]) {
      group[currentCateg] = [];
    }

    group[currentCateg].push(currentElem);
    return group;
  }, {});
};

//get the lessons with grade equal and above gradeLimit
const getLessonsByGrade = (lessons, grades, gradeLimit) => {
  return lessons.filter((lesson) => grades[lesson.number] || 0 >= gradeLimit);
};

const getPassedLessonsBySelectedCateg = (lessons, grades, categ) => {
  return groupByCategory(getLessonsByGrade(lessons, grades, 5))[categ];
};

//get a categories passed lessons, can be used with array.length to get the number of passed lessons
const getPassedLessonsByCateg = (lessons, grades, categ) => {
  return getLessonsByCateg(getLessonsByGrade(lessons, grades, 5), [categ]);
};

const getPassedLessonsById = (lessonsId, grades) => {
  return lessonsId.filter((lessonId) => {
    return typeof lessonId === "number"
      ? grades[lessonId] >= 5
      : grades[lessonId[0]] >= 5 || grades[lessonId[1]] >= 5;
  });
};

export const getLessonsBy = {
  getLessonsByGrade,
  getLessonsByCateg,
  getPassedLessonsByCateg,
  getPassedLessonsBySelectedCateg,
  getPassedLessonsById,
};
