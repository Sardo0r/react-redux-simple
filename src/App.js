import "./styles.css";
import Products from "./products/index";
import Header from "./components/header";
import { useEffect } from "react";
import { setStorage } from "./utils/local-storage.js";
import { loadState } from "./utils/storage";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import ShoppingBag from "./views/shopping";
import { Button } from "@mantine/core";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function App() {
	useEffect(() => {
		if (!loadState('products') && !loadState('products')) {
			setStorage('products', [])
		}
		console.log('render')
	}, [])
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/shopping-bag" element={<ShoppingBag />} />
			</Routes>
			<Button my={30} onClick={() => window.open('https://github.com/Sardo0r')} variant="gradient" leftIcon={<GitHubLogoIcon />}>Sardo0r</Button>
		</div>
	);
}
