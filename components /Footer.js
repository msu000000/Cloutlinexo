export default function Footer() {
  return (
    <footer style={{ padding: "1rem", background: "#000", color: "#fff", marginTop: "2rem" }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Cloutline. All rights reserved.</p>
    </footer>
  );
}