import './link.css';

function Link(props) {

    return (
        props.type === "button" ?
        <button className="link-button" href={props.url}>{props.name}</button> :
        <a className="link" href={props.url}>{props.name}</a>
    );
}

export default Link;