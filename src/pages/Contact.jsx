export default function Contact() {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Fale Conosco</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Seu nome" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Seu email" className="w-full border p-2 rounded" />
          <textarea placeholder="Sua mensagem" className="w-full border p-2 rounded" rows="4"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
        </form>
      </div>
    );
  }
  