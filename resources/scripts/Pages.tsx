import  React from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css'

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
    <>
      <ul>
        <li>shop-name</li>
        <li>category</li>
        <li>kind</li>
        <li>children-chair</li>
        <li>tatami</li>
        <li>crib</li>
      </ul>
      <input type="text">
      </input>
      <input type="text">
      </input>
    </>
  )
}