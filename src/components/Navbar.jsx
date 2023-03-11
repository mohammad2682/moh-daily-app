import { Link } from "react-router-dom";

const Navbar = ({user}) => {
    return (
        <div className="navbar">
            <span className="logo"><Link className="link" to="/">Moh Daily App</Link></span>
            {
                user ? (
                    <ul className="list">
                        <li className="listItem">
                            <img src="" alt="" className="avatar" />
                        </li>
                        <li className="listItem">User Name</li>
                        <li className="listItem">Logout</li>
                    </ul>
                ) : (
                    <Link className='link' to='/login'>Login</Link>
                )
            }
            
        </div>
    )
}

export default Navbar;