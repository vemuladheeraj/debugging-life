export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-white/70">Looks like you took a wrong turn in the journey.</p>
        <a href="/" className="mt-6 inline-block px-4 py-2 rounded-lg border border-white/10 hover:border-neon-blue hover:text-neon-blue">Back Home</a>
      </div>
    </div>
  );
}


