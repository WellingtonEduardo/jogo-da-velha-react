import moon from "../assets/imagem/moon.png"

export default function Background(props) {

    return (<div className="background-container">

        <img src={moon} alt="moon" />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>

    </div>)

}

