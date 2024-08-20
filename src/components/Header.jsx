import logoAgencia from "/assets/logo_agencia.png"

export default function Header() {
    return (
        <nav>
            <div className="logo">
                <img src={logoAgencia} alt="" />
            </div>
            <div className="menuUl">
                <ul>
                    <li><a href="#initialSection">Início</a></li>
                    <li><a href="#servSection">Sobre Nós</a></li>
                    <li><a href="#recWork">Trabalhos</a></li>
                    <li><a href="#cta">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}   