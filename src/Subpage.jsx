import { Link, Outlet } from "react-router-dom";
import './Subpage.scss';

export default function Subpage() {
    return (
        <div className="subpage">
            <Link to="/">&lt; Back</Link>

            <div className="main__content">
                <Outlet/>
            </div>
        </div>
    );
}
