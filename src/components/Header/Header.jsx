import React from "react";


// window.addEventListener("scroll", (e) => {
//     var header = document.getElementById("header__navbar");

//     if (window.scrollY > (header.scrollHeight))
//         header.classList.add("--fixed");
        
//     if (window.scrollY === 0)
//         header.classList.remove("--fixed");
// })

class Header extends React.Component {
    render() {
        return (
            <nav id="header__navbar">
                <ul className="header__navbar__list">
                    <li className="header__navbar__item">
                        <a className="header__navbar__link header__navbar__brand" href="./"><img src="" alt="mictor.io logo" /></a>
                    </li>
                </ul>

                <ul className="header__navbar__list">
                    <li className="header__navbar__item">
                        <a className="header__navbar__link" href="./">Sobre Nós</a>
                    </li>
                    <li className="header__navbar__item">
                        <a className="header__navbar__link" href="./">Mictorios</a>
                    </li>
                    <li className="header__navbar__item">
                        <a className="header__navbar__link" href="./">Contato</a>
                    </li>
                    <li className="header__navbar__item">
                        <a className="header__navbar__link" href="./">Contato</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;