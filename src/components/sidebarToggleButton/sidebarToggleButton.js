import { useState } from "react";

import "./sideBarToggleButton.scss";

function SidebarToggleButton({setSidebarActive}) {

  const [buttonActive, setButtonActive] = useState(true);

  const classValues = buttonActive ? 'c-header__toggle-sidebar  active': 'c-header__toggle-sidebar';

  function toggleSidebarButton(ev){
    
    if(buttonActive){
      setButtonActive(false);
       setSidebarActive(false);
       ev.target.title = 'Mostrar barra lateral';
    }else{
      setButtonActive(true);
       setSidebarActive(true);
       ev.target.title = 'Ocultar barra lateral';
  }
}


  return (
    <button className={classValues} onClick={toggleSidebarButton} title="Mostrar barra lateral">
      <div className="c-header__toggle-sidebar__dash"></div>
    </button>
  );
}

export default SidebarToggleButton;
