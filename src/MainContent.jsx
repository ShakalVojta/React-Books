import './MainContent.scss';

export default function MainContent({ currentItem }) {



    return (
        <main className="main">
            <h1 className="app__headline">Flourish and Blotts</h1>

            {
                currentItem === ''
                    && (
                        <p>Welcome!</p>
                    )
            }

            {
                currentItem === 'about'
                    && (
                        <p>About us: ...</p>
                    )
            }

            {
                currentItem === 'contact'
                    && (
                        <p>Please contact us</p>
                    )
            }
        </main>
    )

}