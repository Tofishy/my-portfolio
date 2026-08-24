import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hello! I am Christopher Kent D. Logan, a BSCS student.</p>

      {}
      <Link to='/projects'>
        <button>View My Projects</button>
      </Link>
    </div>
  );
}
