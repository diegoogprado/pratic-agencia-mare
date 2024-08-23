import logoAgencia from "/assets/logo_agencia.png"
import openMenu from "../hooks/openMenu"

export default function Header() {

    const open = openMenu()

    return (
        <nav>
            <div className="logo">
                <img src={logoAgencia} alt="" />
            </div>
            <div className={`menuUl + ${open.maxBar}`}>
                <ul>
                    <li><a href="#initialSection">Início</a></li>
                    <li><a href="#servSection">Sobre Nós</a></li>
                    <li><a href="#recWork">Trabalhos</a></li>
                    <li><a href="#cta">Contato</a></li>
                </ul>
            </div>
            <div onClick={open.click}className="hambNav">
                <div className={`menuStick +${open.menuStick[0]}`}></div>
                <div className={`menuStick +${open.menuStick[1]}`}></div>
                <div className={`menuStick +${open.menuStick[2]}`}></div>
            </div>
        </nav>
    )
}   