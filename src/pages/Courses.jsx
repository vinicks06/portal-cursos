import CourseList from "../components/CourseList";

export default function Courses() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Todos os Cursos</h1>
      <CourseList />
    </div>
  );
}
