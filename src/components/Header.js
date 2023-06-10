import React from "react";


function Header({onDarkModeClick, isDarkMode}){

    /* const [isDarkMode, setIsDarkMode] = useState(false);

    function onDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode); */
      

    return (
        <div>
            <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
            </header>
        </div>
    )
}
export default Header;