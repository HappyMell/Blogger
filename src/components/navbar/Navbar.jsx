import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./navbar.scss";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://mellisa-blogger.herokuapp.com/images/";

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link
              to={"https://mellisa-blogger.herokuapp.com/"}
              className="link"
            >
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to={"https://mellisa-blogger.herokuapp.com/write"}
              className="link"
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogOut}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="https://mellisa-blogger.herokuapp.com/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                to={"https://mellisa-blogger.herokuapp.com/login"}
                className="link"
              >
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link
                to={"https://mellisa-blogger.herokuapp.com/register"}
                className="link"
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
