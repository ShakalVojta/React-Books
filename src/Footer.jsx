import { useContext } from 'react'
import './Footer.scss'
import Context from './Context'

export default function Footer() {
    const { dispatch} = useContext(Context)

    return (
        <>
        <footer className="footer">
            <div className="footer__copyright">
                &copy; 2024 Flourish and Blotts
            </div>
        </footer>
        </>
    )
}