import data from "../data.json";
import Joplisting from "./Joplisting";
const JopListings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((joplist) => (
        <Joplisting key={joplist.id} joplist={joplist} />
      ))}
    </div>
  );
};

export default JopListings;
