import { Links } from "@remix-run/react";
import { Link } from "@remix-run/react";

function Header() {
    return (
        <html>
            <nav className="nav-bar">
                <div className="nav-logo-box">
                    <Link to="/" className="nav-logo">OZINO WINE</Link>
                </div>
            </nav>
        </html>
    )
}

export default Header;