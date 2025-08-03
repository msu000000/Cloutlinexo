export default function Footer() {
  return (
    <footer className="bg-black p-4 mt-10">
      <div className="container text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Cloutline. All rights reserved.
      </div>
    </footer>
  );
}