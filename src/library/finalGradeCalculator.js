const SYNTELESTIS_VARITITAS_IPOXREOTIKON = 2;
const SYNTELESTIS_VARITITAS = 1.5 ;

// based on the info provided by the "ΟΔΗΓΟΣ ΠΡΟΠΤΥΧΙΑΚΩΝ ΣΠΟΥΔΩΝ ΤΟΥ 19-20"
//page 212, chapter 7.2.4
const finalGradeCalculator = ( passedLessons ) => {
    const [numanator, denominator] = passedLessons.reduce( (franctionAccumulator, lesson) => {
        let syntelestis;
        const [num, den] = franctionAccumulator;
        lesson.category[0] === 0 ? //the lesson is "υποχρεωτικό"
            syntelestis = SYNTELESTIS_VARITITAS_IPOXREOTIKON
            :
            syntelestis = SYNTELESTIS_VARITITAS
        ;
        return [num + syntelestis * lesson.grade, den + syntelestis];
    }, [0, 0]);
    
    return ( numanator / denominator) ;
};

export default finalGradeCalculator;