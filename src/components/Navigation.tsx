import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navBar">
            <Link className="navLink" to="/editor">Input</Link>
            <Link className="navLink" to="/read">Read</Link>
        </nav>
    );
};