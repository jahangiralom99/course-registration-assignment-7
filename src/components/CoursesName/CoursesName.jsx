import PropTypes from "prop-types";
const CoursesName = ({ courseNames }) => {
  let count = 1;
  return (
    <div className="md:sticky top-0 bg-[#FFF] h-[500px] p-4">
      <div className="border p-3">
        <h1 className="text-center text-2xl font-bold text-[#2F80ED]">
          Credit Hour Remaining 7 hr
        </h1>
        <hr className="border mt-2" />
      </div>
      <h1 className="text-2xl font-bold ">Course Name</h1>
      <div className="mt-6 text-[#1C1B1B99] space-y-2">
        {courseNames.map((name) => (
          <p key={name.id}>
            {count++} {name.title}
          </p>
        ))}
      </div>
      <div className="space-y-4 mt-4">
        <p className="font-bold">Total Credit Hour : 13 </p>
        <h6 className="font-bold">Total Price : 48000 USD</h6>
      </div>
    </div>
  );
};

CoursesName.propTypes = {
  courseNames: PropTypes.array.isRequired,
};
export default CoursesName;
