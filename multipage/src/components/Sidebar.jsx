import "../styles/Sidebar.css"; // Yeni import yolu

const Sidebar = ({ navigate }) => (
  <aside className="sidebar">
    <button onClick={() => navigate("home")}>Home Page</button>
    <button onClick={() => navigate("about")}>About</button>
    <button onClick={() => navigate("contact")}>Contact</button>
  </aside>
);

export default Sidebar;
