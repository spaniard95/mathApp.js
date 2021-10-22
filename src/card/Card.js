import "./card.css"

const Card = ({num, title, catalog, grade=-1}) => {
    return (
        <div class="flex-card">
            <n id="num">{num}</n>
            {grade!= -1 &&  
                <div>
                    <b id="line"> </b>
                    <a id="grade">{grade}</a>
                </div>
            }
            <div id="double">
                <div>{title}</div>
                <div>{catalog}</div>
            </div>
            
        </div>
    );
};

export default Card;