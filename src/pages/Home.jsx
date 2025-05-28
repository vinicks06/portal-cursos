import HeroBanner from "../components/HeroBanner";
import CourseList from "../components/CourseList";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <h2 className="text-2xl font-bold text-center mt-8 mb-4">Cursos em Destaque</h2>
      <CourseList />
    </div>
  );
}
