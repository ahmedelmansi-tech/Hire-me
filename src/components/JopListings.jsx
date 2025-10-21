// import data from "../data.json";
import { useEffect, useState } from "react";
import Joplisting from "./Joplisting";
import Spinner from "./Spinner";

const JopListings = ({ isHome = true }) => {
  const [loading, setLoading] = useState(true);
  const [jops, setJops] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/jops");
        const data = await res.json();
        setJops(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const recentJops = isHome ? jops.slice(0, 3) : jops;

  // return <Spinner />;
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <h1 className="text-center text-indigo-500 font-bold text-4xl my-6">
            {isHome ? "Recent Jops" : "Browse Jobs"}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJops.map((joplist) => (
              <Joplisting key={joplist.id} joplist={joplist} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default JopListings;
