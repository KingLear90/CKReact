export default function Header(link) {

    const menuOptions = ['Home', 'Aprendizaje', 'Galería', 'Contacto']
    const links = ["#Home", "#Aprendizaje", "#Galeria", "#Contacto"]

    return (
        <div id='header'>
            <h1>ChessKingdom</h1>
            <ul>
                {menuOptions.map(option => <a href="#">{option}</a>)}
            </ul>
        </div>        
    );
}

