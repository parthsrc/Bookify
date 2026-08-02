import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
import List from "../assets/Data/list.json";

function Search() {

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    const keyword = query.toLowerCase();

    const results = List.filter((course) =>
        course.title.toLowerCase().includes(keyword) ||
        course.description.toLowerCase().includes(keyword) ||
        course.category.toLowerCase().includes(keyword)
    );

    return (
        <>

            <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10">

                <h1 className="text-3xl font-bold">
                    Search Results
                </h1>

                <p className="mt-2 text-gray-500">
                    Showing results for <b>"{query}"</b>
                </p>

                {results.length === 0 ? (

                    <div className="mt-16 text-center">

                        <h2 className="text-2xl font-semibold">
                            No courses found
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Try another keyword.
                        </p>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">

                        {results.map((item) => (

                            <Cards
                                key={item.id}
                                item={item}
                            />

                        ))}

                    </div>

                )}

            </div>
        </>
    );
}

export default Search;