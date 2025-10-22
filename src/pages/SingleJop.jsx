import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaMapMarker, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Joplisting from "../components/Joplisting";
const SingleJop = ({ onDelete, onEdite }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [jop, setJop] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSingleJop = async () => {
      try {
        const singleJop = await fetch(`/api/jops/${params.id}`);
        const singleDataJop = await singleJop.json();
        setJop(singleDataJop);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleJop();
  }, []);

  // DELETE

  const handleDelete = (id) => {
    const confirm = window.confirm("are you sure you want to delete");
    if (!confirm) {
      return;
    }
    onDelete(id);
    navigate("/");
  };

  // EDITE

  const handleEdite = (id) => {
    console.log(`EDITE JOP NO : ${id}`);
    onEdite(id);
  };

  return loading ? (
    <Spinner />
  ) : (
    // <>
    //   <div className="bg-white rounded-xl shadow-md relative my-8 px-8">
    //     <div className="mb-6">
    //       <div className="text-gray-600 my-2">{jop.type}</div>
    //       <h3 className="text-xl font-bold">{jop.title}</h3>
    //     </div>

    //     <div className="mb-5">{jop.description}</div>

    //     <h3 className="text-indigo-500 mb-2">{jop.salary} / Year</h3>

    //     <div className="border border-gray-100 mb-5"></div>

    //     <div className="flex flex-col lg:flex-row justify-between mb-4">
    //       <div className="text-orange-700 mb-3">
    //         <FaMapMarker className="inline text-lg mr-1 mb-1" />
    //         {jop.location}
    //       </div>
    //       <Link
    //         to={`/`}
    //         className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm mb-3"
    //       >
    //         Back Home
    //       </Link>
    //     </div>
    //   </div>
    // </>

    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jops"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            Back to Jobs
            <FaArrowAltCircleLeft className="mt-1 ml-2" />
          </Link>
        </div>
      </section>
      <section className="bg-indigo-50 h-screen">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{jop.type}</div>
                <h1 className="text-3xl font-bold mb-4 md:text-xl">
                  {jop.title}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mt-1 mr-1" />
                  <p className="text-orange-700">{jop.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  {jop.description}
                </h3>

                <p className="mb-4">{jop.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{jop.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{jop.company.name}</h2>

                <p className="my-2">{jop.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {jop.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {jop.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/jops/edit/${params.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  onClick={() => handleDelete(params.id)}
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleJop;
