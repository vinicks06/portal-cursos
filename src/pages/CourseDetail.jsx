import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-red-600 font-semibold">Curso não encontrado.</p>
        <button
          className="mt-4 text-blue-600 hover:underline"
          onClick={() => navigate("/courses")}
        >
          Voltar para Cursos
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        className="mb-4 text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Voltar
      </button>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-600 mb-4">{course.description}</p>

        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {course.category}
          </span>
          <span className="ml-2 text-sm text-gray-500">· {course.duration}</span>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Conteúdo:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {course.modules.map((modulo, idx) => (
              <li key={idx}>{modulo}</li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-500">
          Instrutor(a): <span className="font-semibold">{course.instructor}</span>
        </p>
      </div>
    </div>
  );
}
