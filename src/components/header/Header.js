import './header.css';
import Link from "../link/Link";
import Logo from "../logo/Logo";
import logoSRC from "../logo/assets/logo_theValley.png";

function Header() {
    
    return (
        <div className="header">
            <ul className="header__social">
                <li className="header__social-link"><Link type="estandar" name="Facebook" url="https://www.facebook.com/TheValleyDBS"/></li>
                <li className="header__social-link"><Link type="estandar" name="Instagram" url="https://www.instagram.com/thevalleydbs/"/></li>
                <li className="header__social-link"><Link type="estandar" name="Twitter" url="https://twitter.com/TheValleyDBS"/></li>
            </ul>
            <Logo name="Logo The Valley" url="https://thevalley.es/" source={logoSRC}/>
            <ul className="header__info">
                <li className="header__info-link"><Link type="estandar" name="Docu React" url="https://es.react.dev/"/></li>
                <li className="header__info-link"><Link type="button" name="Ir a The Valley" url="https://thevalley.es/"/></li>
            </ul>
        </div>
    );
}

export default Header;