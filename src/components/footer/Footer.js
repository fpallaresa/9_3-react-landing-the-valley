import './Footer.css'

function Footer(props) {
    
    return (

        <div className="footer">
            <span className="footer__copyright"> Copyright {props.year}</span>
        </div>

);
}

export default Footer;