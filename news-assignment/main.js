const apiEndPoint =
	"https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=9b2d86f88d3247beb0948e5c5a1300af";

const getSportsNews = () => {
	const articles = fetch(apiEndPoint)
		.then((res) => res.json())
		.then((data) => data.articles);

	return articles;
};

const cardsContainer = document.querySelector(".cards-container");
const detailedPageBody = document.querySelector("body#details");

const renderCards = async () => {
	const news = await getSportsNews();

	news.forEach((card) => {
		let cardDiv = document.createElement("div");
		const imgPlaceholder = "./imgs/placeholder.jpg";

		const date = new Date(card.publishedAt);
		const formatedDate = date.toLocaleDateString("ar-EG");

		cardDiv.innerHTML = `
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                <a href="#">
                    <img class="rounded-t-lg" src="${
											card.urlToImage ? card.urlToImage : imgPlaceholder
										}" alt="" />
                </a>
                <div class="p-5">
                    <a href="#" class='mb-3'>
                        <h5 class="mb-4 text-xl font-bold tracking-tight text-gray-900 line-clamp-2 ">${
													card.title
												}</h5>
                    </a>

                    <div class="flex items-center justify-between text-sm mb-5">
                    <span class="bg-blue-600 text-white rounded-full px-3 py-0.5 font-medium">${formatedDate}</span>
                    <span class="truncate">${card.author}</span>
                    </div>

                    <div class="flex items-center justify-between">
                      <button onclick="renderDetailedPage('${
												card.title
											}','${card.urlToImage}','${
			card.content
		}')" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                          تفاصيل الخبر
                      </button>
                      <a href="${
												card.url
											}" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                          المصدر
                      </a>
                    </div>
                </div>
            </div>
    `;

		cardsContainer.appendChild(cardDiv);
	});
};

const renderDetailedPage = (title, imgUrl, content) => {
	let url = new URL(window.location + "details");

	// Create URLSearchParams object
	let params = new URLSearchParams();

	// Add query parameters
	params.set("title", title);
	params.set("imgUrl", imgUrl);
	params.set("content", content);

	// Update the URL object with the new search parameters
	url.search = params.toString();

	// Log the updated URL
	console.log(url.toString()); 

	// To redirect to the new URL
	window.location.href = url.toString();
	// history.pushState({}, '', url.toString());
};

window.addEventListener("DOMContentLoaded", renderCards);
