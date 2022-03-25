import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="wave"></div>
            <div className="wrapper">
                <Link to="/">
                    <h1>Trivia Time</h1>
                </Link>
            </div>
        </header >
    )
}

export default Header