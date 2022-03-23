import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="wrapper">
                <Link to="/">
                    <h1>Awesome Trivia Game</h1>
                </Link>
            </div>
        </header >
    )
}

export default Header