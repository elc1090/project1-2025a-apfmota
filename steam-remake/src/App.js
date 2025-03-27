import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<header>
			<div className="flex right">
				<div className="download-login">
					<a href="/#" className="download">Instale o Steam</a>
					<span><a href="/#">iniciar sessão</a></span>
					<span className="split">|</span>
					<span><a href="/#">idioma</a></span>
				</div>
			</div>
			<div className="flex" id="Menu">
				<div>
					<img id="Logo" width="176" height="44" alt="Logo Steam" src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"/>
				</div>
				<menu>
					<section className="selected">Loja</section>
					<section>Comunidade</section>
					<section>Sobre</section>
					<section>Suporte</section>
				</menu>
			</div>
		</header>
	);
}

export default App;
