/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import imgPlaceholder from "../../public/placeholder.jpg";
import { useEffect } from "react";

const Detailed = ({ newsArray }) => {
	const { articleId } = useParams();
	const navigate = useNavigate();
	const article = newsArray[articleId];

	useEffect(() => {
		if (!article) {
			navigate("/");
		}
	}, []);

	return (
		article && (
			<div className="container my-8 mx-auto">
				<div className="flex items-center justify-between mb-5 gap-8">
					<h1 className="text-3xl leading-normal ">{article.title}</h1>
					<Link
						to={"/"}
						className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
					>
						عودة
					</Link>
				</div>
				<img
					src={article.urlToImage ? article.urlToImage : imgPlaceholder}
					className="mx-auto"
					alt=""
				/>

				<p className="mt-8">
					{article.content
						? article.content
						: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر	بشكل كبير في تينيّات هذا القرن مع إصدار رقائق ليتراسيت (Letraset)	البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ ع ظهور برامج النشر الإلكتروني مثل ألدوس بايج مايكر (Aldus PageMaker) والتي	حوت أيضاً على نسخ من نص لوريم إيبسوم."}
				</p>
			</div>
		)
	);
};

export default Detailed;
