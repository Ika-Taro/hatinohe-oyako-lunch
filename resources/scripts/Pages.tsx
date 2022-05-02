import  React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css'
import axios from "axios";
import BlogForm from "./BlogForm"


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

  const [formData, setFormData] = useState({
    shop_name:'', 
    shop_category:'',
    kindness_rating:'',
    children_chair:'',
    tatami_room:'',
    crib:'',
    parent_review:'',
    children_review:''
  });
  
  useEffect(() => {
      getBlogsData();
  },[])

  const getBlogsData = () => {
    axios
      .get('/api/blogs')
      .then(response => {
          setBlogs(response.data);
          console.log(response.data);
      })
      .catch(() => {
          console.log('通信に失敗しました');
      });
    }
    
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist();
      const target = e.target;
      const name = target.name;
      setFormData(() => {
        return {...formData, [name]: target.value };
      });
    }

  //   const inputChange = (e: { target: { name: [string, number], value: [string, number] ; }; }) => {
  //     const key = e.target.name;
  //     const value = e.target.value;
  //     formData[key] = value;
  //     let data = Object.assign({}, formData);
  //     setFormData(data);
  // }
  
  const clearAllInputValue = () => {
    setFormData({
      shop_name: '', 
      shop_category:'',
      kindness_rating:'',
      children_chair:'',
      tatami_room:'',
      crib:'',
      parent_review:'',
      children_review:''
      });
  };

  const createBlogs: any  = () => {
    axios
        .post('/api/blogs/create' ,formData)
        // ,{
        //     shop_name: formData.shop_name,
        //     shop_category: formData.shop_category,
        //     kindness_rating: formData.kindness_rating,
        //     children_chair: formData.children_chair,
        //     tatami_room: formData.tatami_room,
        //     crib: formData.crib,
        //     parent_review: formData.parent_review,
        //     children_review: formData.children_review
        // })
        // .then((res) => {
        //     const tempPosts: any= blogs;
        //     tempPosts.push(res.data);
        //     setBlogs(tempPosts);
        // })
        .then(function (response) {
          console.log(response);
        })
        
        .catch(error => {
            console.log(error);
        });
  }

  const deletePost = async (post: { id: any; }) => {
    await axios
        .post('/api/delete', {
        id: post.id
    })
    // .then((res) => {
    //     this.setState({
    //         posts: res.posts
    //     });  
    // })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

  let rows: any[] = [];

  blogs.map ((post: any ) => 
      rows.push({
        shop_name: post.shop_name,
        category: post.shop_category,
        kindness_rating: post.kindness_rating,
        children_chair: post.children_chair,
        tatami: post.tatami_room,
        crib: post.crib,
        parent_review: post.parent_review,
        children_review: post.children_review,
        // editBtn: <a key={post.id} href={`/blog/edit/${post.id}`}>編集</a>,
        deleteBtn: <a href="/blog" onClick={() => deletePost(post)}>削除</a>,
      })
  )
  return (
    <>
      <div>
        <BlogForm data={formData} btnFunc={createBlogs} btnReset={clearAllInputValue} inputChange={inputChange} />
      </div>
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

