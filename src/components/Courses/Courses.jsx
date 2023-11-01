import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({allCourses}) => {
    return (
        <div className="md:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-8">
            {
                    allCourses.map((course) => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
           }
           </div>
        </div>
    );
};

Courses.propTypes = {
    allCourses: PropTypes.array.isRequired,
  };

export default Courses;