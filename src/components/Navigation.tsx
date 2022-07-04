import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navBar">
            <Link className="navLink" to="/import">Import TXT</Link>
            <Link className="navLink" to="/">Input</Link>
            <Link className="navLink" to="/read">Read</Link>
        </nav>
    );
};