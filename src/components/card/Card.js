import "./card.css"

const Card = ({num, title, catalog, grade=-1}) => {
    return (
        <li class="flex-card">
            <n id="num">{num}</n>
            {grade!= null &&  
                <div>
                    <b id="line"> </b>
                    <a id="grade">{grade}</a>
                </div>
            }
            <div id="double">
                <div>{title}</div>
              {catalog.map(cat => <c>{cat + " "}</c>)}
            </div>        
        </li>
    );
};

export default Card;