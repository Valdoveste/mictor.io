import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="panda">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link footer__brand" href="./"><img src="" alt="mictor.io logo" /></a>
                        </li>
                    </ul>

                    <ul className="footer__list">
                        <li><a href="">Contato</a></li>
                        <li><a href="">Sobre Nós</a></li>
                        <li><a href="">Produtos</a></li>
                    </ul>

                    <ul className="footer__list">
                        <li><a href="">Contato</a></li>
                        <li><a href="">Sobre Nós</a></li>
                        <li><a href="">Produtos</a></li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__item">
                            <h3>Contato:</h3>
                            <p>contato@mictorio.com.br</p>
                            <p>11 90216-1249</p>
                            <h3>Endereço:</h3>
                            <p>Estrada Sadae Takagi, 204</p>
                            <p> São Bernardo do Campo/SP</p>
                        </li>
                    </ul>
                </div>

                <div className="footer__copyrights">
                    <span>
                        <p>MICTOR.IO LTDA - Todos direitos reservados.</p>
                        <p>Desenvolvido por <a href="">Valdoveste</a>.</p>
                        <div>
                            <li>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                                </a>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.667 12c0 1.473-1.194 2.667-2.667 2.667-1.473 0-2.667-1.193-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667zm3.846-3.232c.038.843.046 1.096.046 3.232s-.008 2.389-.046 3.233c-.1 2.15-1.109 3.181-3.279 3.279-.844.038-1.097.047-3.234.047-2.136 0-2.39-.008-3.232-.046-2.174-.099-3.181-1.132-3.279-3.279-.039-.845-.048-1.098-.048-3.234s.009-2.389.047-3.232c.099-2.152 1.109-3.181 3.279-3.279.844-.039 1.097-.047 3.233-.047s2.39.008 3.233.046c2.168.099 3.18 1.128 3.28 3.28zm-2.405 3.232c0-2.269-1.84-4.108-4.108-4.108-2.269 0-4.108 1.839-4.108 4.108 0 2.269 1.84 4.108 4.108 4.108 2.269 0 4.108-1.839 4.108-4.108zm1.122-4.27c0-.53-.43-.96-.96-.96s-.96.43-.96.96.43.96.96.96c.531 0 .96-.43.96-.96zm6.77-7.73v24h-24v-24h24zm-4 12c0-2.172-.009-2.445-.048-3.298-.131-2.902-1.745-4.52-4.653-4.653-.854-.04-1.126-.049-3.299-.049s-2.444.009-3.298.048c-2.906.133-4.52 1.745-4.654 4.653-.039.854-.048 1.127-.048 3.299 0 2.173.009 2.445.048 3.298.134 2.906 1.746 4.521 4.654 4.654.854.039 1.125.048 3.298.048s2.445-.009 3.299-.048c2.902-.133 4.522-1.745 4.653-4.654.039-.853.048-1.125.048-3.298z" /></svg>
                                </a>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-9.333v24h-24v-24h24zm-4 12c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" /></svg>
                                </a>
                            </li>
                        </div>
                    </span>
                </div>
            </footer>
        );
    }
}

export default Footer;