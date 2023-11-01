import PropTypes from "prop-types";
const CoursesName = ({ courseNames }) => {
    let count = 1;
  return (
    <div className="">
      <div className="border p-3">
        <h1 className="text-center text-2xl font-bold text-[#2F80ED]">
          Credit Hour Remaining 7 hr
              </h1>
        <hr className="border mt-2" />
      </div>
          <h1 className="text-2xl font-bold ">Course Name</h1>
          {
              courseNames.map((name) => <p key={name.id}>{count++} {name.title}</p>)
          }
          <p>Total </p>
    </div>
  );
};

CoursesName.propTypes = {
  courseNames: PropTypes.array.isRequired,
};
export default CoursesName;
