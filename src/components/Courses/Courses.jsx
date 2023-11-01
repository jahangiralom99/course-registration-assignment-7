import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ allCourses, handleSelectBtn }) => {
  return (
    <div className="md:w-[90%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {allCourses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleSelectBtn={handleSelectBtn}
          ></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  allCourses: PropTypes.array.isRequired,
  handleSelectBtn: PropTypes.func.isRequired,
};

export default Courses;
