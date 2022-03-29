import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="wrapper">

                <img className="headerAvatar" src="https://avatars.dicebear.com/api/bottts/dddddddddddd.svg?colors[]=yellow" alt="robot avatar"></img>
                <Link to="/">
                    <h1>Trivia Time</h1>
                </Link>

            </div>
        </header >
    )
}

export default Header