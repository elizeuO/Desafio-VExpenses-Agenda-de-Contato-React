import NotLogged from "../../components/notLogged/notLogged";
import Sidebar from "../../components/sidebar/sidebar";

function Novo({ user, setUser, sidebarActive }) {
    return (
      <div className="c-container">
        {user ? (
          <div className="l-flex">
            <Sidebar sidebarActive={sidebarActive} />
            
          </div>
        ) : (
          <NotLogged setUser={setUser} />
        )}
      </div>
    );
  }
  
  export default Novo;
  