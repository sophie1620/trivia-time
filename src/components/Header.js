import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="wrapper">

                <img className="headerAvatar" src="https://api.dicebear.com/9.x/bottts/svg" alt="robot avatar"></img>
                {/* https://avatars.dicebear.com/api/bottts/dddddddddddd.svg?colors[]=yellow */}
                <Link to="/">
                    <h1>Trivia Time</h1>
                </Link>

            </div>
        </header >
    )
}

export default Header