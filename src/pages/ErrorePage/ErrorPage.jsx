import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-10">
        <div className="flex flex-col justify-center items-center">
           <img className="w-72" src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />

       </div>
       <section className="flex items-center h-full text-2xl dark:bg-gray-50 dark:text-gray-800">
       <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
           <div className="max-w-md text-center">
               <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
               <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
               <Link to='/' className="px-8 py-3 text-white hover:bg-gray-300 bg-orange-400 rounded-xl font-semibold  ">Back to homepage</Link>
           </div>
       </div>
   </section>
      </div>

    );
};

export default ErrorPage;