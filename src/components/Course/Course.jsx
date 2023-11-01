import PropTypes from 'prop-types';

const Course = ({course}) => {
    console.log(course);
    const { cover, posts, title, credit, price} = course;
    return (
        <div className='space-y-4 bg-[#FFF] p-3 shadow-xl rounded-lg'>
            <img className='w-full' src={cover} alt="" />
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p className='text-[#1C1B1B99]'>{posts}</p>
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Price : {price}</p>
                <p className='font-bold'>Credit : {credit} hr</p>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
  };

export default Course;