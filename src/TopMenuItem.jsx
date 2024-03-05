export default function TopMenuItem({ currentItem, setCurrentItem, slug, label }) {

    const handleClick = () => {
        setCurrentItem(slug)
    }

    return (
        <a
            className={ 'link' + (currentItem === slug ? ' link--highlighted' : '') }
            href="#"
            onClick={ handleClick }
        >
            { label }
        </a>
    )
}