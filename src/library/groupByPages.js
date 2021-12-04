const groupByPages = (lessons, perPage) => {
    const group = {};
    
    let pageNum = 0;

    lessons.forEach((lesson, index) => {   
        if (index % (pageNum  * perPage) === 0 || pageNum == 0) {  //when mod equals 0 it means we change page
          ++pageNum;
          group[pageNum] = [lesson];
        } else {
           group[pageNum].push(lesson);           //push lesson in the group/page it belongs
        }
    })
    return group;
};

export default groupByPages;