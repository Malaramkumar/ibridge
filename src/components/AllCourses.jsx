const courses = [
  "Java Training",
  "Python Training",
  "AWS Training",
  "Full-Stack Developer Training",
  "Data Science Training",
  "DevOps Training",
  ".NET Training",
  "Android Training",
  "Web Development training",
  "Cloud Computing",
  "R Language Training",
  "Mobile App Development",
  "VmWare Training",
  "Digital Marketing Training",
  "UI / UX Training"
];

const AllCourses = () => {
  return (
    <div style={{ paddingTop: '160px', padding: '20px' }}>
      <h2>All Programs</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course} – Brief description goes here.</li>
        ))}
      </ul>
    </div>
  );
};

export default AllCourses;
