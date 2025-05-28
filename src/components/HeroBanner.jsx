export default function HeroBanner() {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-16">
        <h1 className="text-4xl font-bold mb-4">Aprenda com os Melhores Cursos</h1>
        <p className="text-lg mb-6">Explore áreas como programação, design, negócios e muito mais!</p>
        <a href="/courses" className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">
          Ver Cursos
        </a>
      </section>
    );
  }
  