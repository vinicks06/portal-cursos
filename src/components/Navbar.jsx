export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">CursosOnline</h1>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/courses" className="hover:underline">Cursos</a></li>
          <li><a href="/about" className="hover:underline">Sobre</a></li>
          <li><a href="/contact" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    );
  }
  