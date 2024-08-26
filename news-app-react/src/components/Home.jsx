/* eslint-disable react/prop-types */
import imgPlaceholder from "../../public/placeholder.jpg";
import { Link } from "react-router-dom";



const Home = ({newsArray}) => {

	return (
		<div className="cards-container grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-5 m-3 sm:m-8">
			{newsArray.map((article, index) => (
				<div
					key={article.title}
					className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto"
				>
					<a href="#">
						<img
							className="rounded-t-lg"
							src={article.urlToImage ? article.urlToImage : imgPlaceholder}
							alt=""
						/>
					</a>
					<div className="p-5">
						<a
							href="#"
							className="mb-3"
						>
							<h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 line-clamp-2 ">
								{article.title}
							</h5>
						</a>

						<div className="flex items-center justify-between text-sm mb-5 gap-5">
							<span className="bg-blue-600 text-white rounded-full px-3 py-0.5 font-medium shrink-0">
								{new Date(article.publishedAt).toLocaleDateString("ar-EG")}
							</span>
							<span className="truncate">{article.author}</span>
						</div>

						<div className="flex items-center justify-between">
							<Link
								to={`/details/${index}`}
								className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
							>
								تفاصيل الخبر
							</Link>
							<a
								href={article.url}
								target="_blank"
								className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
							>
								المصدر
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
