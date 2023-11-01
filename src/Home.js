import "./styles/home.css"


export default function Home() {

    return (
        <div className="home-wrapper">
            <div className="hello">
                <h1>
                 Willkommen in meinem React Portfolio!
                </h1>
                <span>             
                    <p>Mein Name ist Ivandzhelin Yordanova, aber du darfst mich gerne Angie nennen.</p>
                    <p> Auf dieser Seite möchte ich einige Projekte vorstellen, die ich mit Hilfe von HTML, CSS, JavaScript und React erstellt habe.</p>
                    <p>Das komplette Projekt befindet sich ebenfalls auf <a href="https://github.com/EvJord" target="_blank"> GitHub.</a></p>             
                    <p className="last-p">Ich wünsche dir viel Spaß!</p>
                </span>
            </div>
        </div>
    )
} 