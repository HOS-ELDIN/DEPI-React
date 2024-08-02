const apiEndPoint =
	"https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=9b2d86f88d3247beb0948e5c5a1300af";

const getSportsNews = () => {
	const articles = fetch(apiEndPoint)
		.then((res) => res.json())
		.then((data) => data.articles);

	return articles;
};

const cardsContainer = document.querySelector(".cards-container");
const detailedContainer = document.querySelector(".detailed-container");
const imgPlaceholder = "./imgs/placeholder.jpg";

const renderCards = async () => {
	const news = await getSportsNews();

	news.forEach((card) => {
		let cardDiv = document.createElement("div");

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

                    <div class="flex items-center justify-between text-sm mb-5 gap-5">
                    <span class="bg-blue-600 text-white rounded-full px-3 py-0.5 font-medium shrink-0">${formatedDate}</span>
                    <span class="truncate">${card.author}</span>
                    </div>

                    <div class="flex items-center justify-between">
                      <button onclick="renderDetailedPage('${encodeURIComponent(
												JSON.stringify(card)
											)}')" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
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

const renderDetailedPage = (card) => {
	const article = JSON.parse(decodeURIComponent(card));
	let detailedView = document.createElement("div");
	detailedView.className = "container my-8 mx-auto";

	detailedView.innerHTML = `
			<div class="flex items-center justify-between mb-5 gap-8">
				<h1 class="text-3xl leading-normal ">
					${article.title}
				</h1>
				<button onclick="backToHome()" class="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
						عودة
				</button>
			</div>
			<img
				src="${article.urlToImage ? article.urlToImage : imgPlaceholder}"
				class="mx-auto"
				alt=""
			/>

			<p class="mt-8">
			${
				article.content
					? article.content
					: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر	بشكل كبير في تينيّات هذا القرن مع إصدار رقائق ليتراسيت (Letraset)	البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ ع ظهور برامج النشر الإلكتروني مثل ألدوس بايج مايكر (Aldus PageMaker) والتي	حوت أيضاً على نسخ من نص لوريم إيبسوم."
			}
			</p>
	
	`;

	cardsContainer.classList.add("hidden");
	detailedContainer.innerHTML = "";
	detailedContainer.classList.remove("hidden");
	detailedContainer.appendChild(detailedView);
};

const backToHome = () => {
	detailedContainer.classList.add("hidden");
	detailedContainer.innerHTML = "";
	cardsContainer.classList.remove("hidden");
};

window.addEventListener("DOMContentLoaded", renderCards);
