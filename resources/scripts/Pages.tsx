import  React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css'
import axios from "axios";
import BlogForm from "./BlogForm"
import GlobalNav from './GlobalNav';
import { FaChild, FaBaby } from "react-icons/fa"
import { MdChildCare, MdBabyChangingStation  } from "react-icons/md"
import { RiParentLine, RiStarSmileFill } from "react-icons/ri"

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
        deleteBtn: <a href="/" onClick={() => deletePost(post)}>削除</a>,
      })
  )
  const totalStars = 3;

  return (
    <>
      <GlobalNav />
      <div>
        <BlogForm data={formData} btnFunc={createBlogs} btnReset={clearAllInputValue} inputChange={inputChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rows.map((row, index) => (
              <div key={index}>
                  <div className="rounded overflow-hidden shadow-lg">
                    <div className="flex justify-center text-xl font-bold">{row.shop_name}</div>
                    <div className="flex justify-end" >
                      <div className="text-xs">カテゴリ</div><div className="basis-1/4 text-center border-solid border-2 border-teal-500 rounded">{row.category}</div>
                    </div>
                    <div className="flex justify-evenly">
                      <div className="basis-1/3 text-center">
                        <label className="text-xs" htmlFor="crib">ベビーベッド</label><br/>
                        <span className="flex justify-center" id="crib"><MdBabyChangingStation />{row.crib}</span>
                      </div>
                      <div className="basis-1/3 text-center">
                        <label className="text-xs" htmlFor="children_chair">子供イス</label><br/>
                        <span className="flex justify-center" id="children_chair"><MdChildCare />{row.children_chair}</span>
                      </div>
                      <div className="basis-1/3 text-center">
                        <label className="text-xs" htmlFor="tatami">座敷</label><br/>
                        <span className="flex justify-center" id="tatami"><FaBaby />{row.tatami}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <label className="text-xs" >コメント</label>
                      <div className="flex justify-center">
                        {[...Array(totalStars)].map((_arr, index) => {
                            return index < row.kindness_rating ?  <RiStarSmileFill  color="orange" /> : <RiStarSmileFill color="grey"/>;
                        })}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs" htmlFor="parent_review">コメント</label>
                      <div className="flex" id="parent_review"><RiParentLine />{row.parent_review}</div>
                    </div>
                    <div>
                      <label className="text-xs" htmlFor="children_review">こどものコメント</label>
                      <div className="flex" id="children_review"><FaChild />{row.children_review}</div>
                    </div>
                    <button className="w-full bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white rounded-b-lg">{row.deleteBtn}</button>
                  </div>
              </div>
          ))}
        </div>
    </>
  )
}

  