export default function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-sm border-t border-purple-200/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Digital Inspiration. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
