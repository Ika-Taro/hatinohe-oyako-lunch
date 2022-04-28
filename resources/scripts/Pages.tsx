import  React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <nav>
        <Link to="blog">ぜんぶみる</Link>
      </nav>
    </div>
  );
}

export function Blog() {
  return (
  <div>
    こんにちは
  </div>
  )
}