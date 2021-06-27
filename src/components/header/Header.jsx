import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Mellisa's</span>
        <span className="headerTitleLg">Blogger</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1526500627444-4ae11809ad24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        alt=""
      />
    </div>
  );
}
