import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
    return (
      <div className="border rounded-xl shadow p-4 bg-white hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-2">{course.description}</p>
        <span className="text-sm text-blue-600 font-medium">{course.category}</span>
        <Link to={`/courses/${course.id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Ver Detalhes
          </button>
        </Link>
      </div>
    );
  }
  