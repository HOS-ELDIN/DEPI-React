import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="grid place-content-center flex-1 w-full text-5xl font-semibold capitalize text-red-500">
			<p>نأسف الصفحة المطلوبة غير موجوده</p>

			<Link
				to={"/"}
				className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-10 mx-auto"
			>
				العودة إلي الرئيسية
			</Link>
		</div>
	);
};

export default NotFound;
