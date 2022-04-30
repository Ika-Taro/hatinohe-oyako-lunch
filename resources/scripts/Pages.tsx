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
  
  let rows: any[] = [];

  blogs.map ((post: any) => 
      rows.push({
        shop_name: post.shop_name,
        category: post.category,
        kindness_rating: post.kindness_rating,
        children_chair: post.children_chair,
        tatami: post.tatami,
        crib: post.crib,
        parent_review: post.parent_review,
        children_review: post.children_review,
      })

  )
  return (
    <>
      {rows.map((row, index) => (
        <div key={index}>
          {Object.keys(row).map(function(key, i) {
                    return(
                        <div key={i}>{row[key]}</div>
                    );
                })}
        </div>
      ))}
    </>
  )
}
