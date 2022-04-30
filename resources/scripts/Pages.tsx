import  React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css'
import axios from "axios";


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

  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
      getBlogsData();
  },[])

  const getBlogsData = () => {
    axios
      .get('/api/blogs')
      .then(response => {
          setBlogs(response.data);     //バックエンドから返ってきたデータでBlogsを更新する
          console.log(response.data);//取得データ確認用のconsole.log()
      })
      .catch(() => {
          console.log('通信に失敗しました');
      });
    }

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
