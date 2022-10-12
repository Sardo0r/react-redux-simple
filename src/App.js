import "./styles.css";
import Products from "./products/index";
import Header from "./components/header";
export default function App() {
	return (
		<div className="App">
			<Header />
			<Products />
		</div>
	);
}
