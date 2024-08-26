import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Detailed from "./components/Details";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";

function App() {
	const [newsArray, setNewsArray] = useState([]);

	const apiEndPoint =
		"https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=9b2d86f88d3247beb0948e5c5a1300af";

	useEffect(() => {
		const getNews = async () => {
			const articles = await fetch(apiEndPoint)
				.then((res) => res.json())
				.then((data) => data.articles);
			setNewsArray(articles);
		};

		getNews();
	}, []);
	return (
		<div className="flex flex-col w-full">
			<h1 className="capitalize text-center text-4xl py-8 border-b font-semibold">
				api news assignment
			</h1>

			<Routes>
				<Route
					path="/"
					element={<Home newsArray={newsArray} />}
				/>
				<Route
					path="/details/:articleId"
					element={<Detailed newsArray={newsArray} />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</div>
	);
}

export default App;
