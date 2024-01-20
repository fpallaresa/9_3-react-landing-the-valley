import './logo.css';

function Logo(props) {
    
    return (
        <a className="logo" href={props.url}>
            <img src={props.source} alt={props.name}/>
        </a>
    );
}

export default Logo;