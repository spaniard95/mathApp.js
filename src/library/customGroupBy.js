const groupByCategory = (array) => {
    return array.reduce((group, currentElem) => {
        const currentCateg = currentElem.selected ? 
            currentElem.category[currentElem.selected]  //if two categories choose the selected
            :
            currentElem.category[0]
        ;                        //if one categorie choose the only category avalaible                                
        
        if(!group[currentCateg]){
            group[currentCateg] = [];
        }

        group[currentCateg].push(currentElem);
        return group;
    }, {});
};

export default groupByCategory;