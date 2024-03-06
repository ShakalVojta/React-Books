import { useState } from "react"
import './TopMenu.scss';
import TopMenuItem from "./TopMenuItem";
import { Link } from "react-router-dom";

export default function TopMenu({ currentItem, setCurrentItem }) {
    const [open, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    }

    return (
        <div className="topmenu">

            {
                open
                    ? (
                        <nav className="topmenu__links">
                            {/* <TopMenuItem currentItem={ currentItem } setCurrentItem={ setCurrentItem } slug="" label="Home" />
                            <TopMenuItem currentItem={ currentItem } setCurrentItem={ setCurrentItem } slug="products" label="Products" />
                            <TopMenuItem currentItem={ currentItem } setCurrentItem={ setCurrentItem } slug="about" label="About us" />
                            <TopMenuItem currentItem={ currentItem } setCurrentItem={ setCurrentItem } slug="contact" label="Contact" /> */}

                            <Link to="/">Home</Link>
                            <Link to="/about-us">About us</Link>
                            <Link to="/contact">Contact</Link>
                            
                            <div onClick={ handleCloseMenu }>&times;</div>
                        </nav>
                    )
                    : (
                        <div onClick={ () => setOpen(true) } className="topmenu__burger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )
            }

        </div>
    )
}