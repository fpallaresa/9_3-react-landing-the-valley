import './MainMessage.css'

function MainMessage(props) {
    
    return (
        <div className="section">
            <h1>{props.titleh1}</h1>
            <h2>{props.titleh2}</h2>
        </div>
    );
}

export default MainMessage;