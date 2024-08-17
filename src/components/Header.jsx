import logoAgencia from "./../assets/logo_agencia.png"

export default function Header() {
    return (
        <nav>
            <div className="logo">
                <img src={logoAgencia} alt="" />
            </div>
            <div className="menuUl">
                <ul>
                    <li>Início</li>
                    <li>Sobre Nós</li>
                    <li>Trabalhos</li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    )
}   