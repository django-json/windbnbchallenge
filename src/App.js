import "./App.css";

import List from "./components/list/list.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import stays from "./stays.json";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="stays">
				<div className="stays__heading">
					<h1 className="stays__place">Stays in Finland</h1>
					<p className="stays__total">{`${stays.length} stays`}</p>
				</div>
				<List stays={stays} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
