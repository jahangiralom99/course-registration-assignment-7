import PropTypes from "prop-types";
import { FaCommentDollar, FaCreditCard} from "react-icons/fa";

const Course = ({ course, handleSelectBtn }) => {
  const { cover, posts, title, credit, price } = course;
  return (
    <div className="space-y-4 bg-[#FFF] p-3 shadow-xl rounded-lg">
      <img className="w-full" src={cover} alt="" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-[#1C1B1B99]">{posts}</p>
      <div className="flex justify-between items-center">
        <p className="font-bold flex items-center gap-3">
          <FaCommentDollar></FaCommentDollar> Price : {price}
        </p>
        <p className="font-bold flex items-center gap-3"><FaCreditCard></FaCreditCard> Credit : {credit} hr</p>
      </div>
      <button
        onClick={() => handleSelectBtn(course)}
        className="w-full bg-[#2F80ED] rounded-lg py-2 text-white font-bold"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectBtn: PropTypes.func.isRequired,
};

export default Course;
