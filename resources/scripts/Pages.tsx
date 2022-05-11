import  React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css'
import axios from "axios";
import BlogForm from "./BlogForm"
import GlobalNav from './GlobalNav';
import { FaChild, FaBaby } from "react-icons/fa"
import { MdChildCare, MdBabyChangingStation  } from "react-icons/md"
import { RiParentLine, RiStarSmileFill } from "react-icons/ri"
import 'tw-elements';

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
        .post('/api/blogs/create' 
          ,formData)
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
        .then((res) => {
            const tempPosts: any= blogs;
            tempPosts.push(res.data);
            setBlogs(tempPosts);
        })
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
      <div className="relative">
        <div className="fixed bottom-5 right-5">
          <button type="button" className="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9 " data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
              className="w-3 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
              </path>
            </svg>
          </button>
        </div>
      </div>

      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
                Modal title
              </h5>
              <button type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body relative p-4">
              <BlogForm data={formData} btnFunc={createBlogs} btnReset={clearAllInputValue} inputChange={inputChange} />  
            </div>
            <div
              className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <GlobalNav />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rows.map((row, index) => (
              <div key={index}>
                  <div className="accordion rounded overflow-hidden shadow-lg" id="accordionExample5">
                    <div className="accordion-item">
                      <div className="flex justify-center text-xl font-bold my-5">{row.shop_name}</div>
                      <div className="flex justify-end" >
                        <div className="text-xs">カテゴリ</div><div className="basis-1/2 text-center border-solid border-2 border-teal-500 rounded">{row.category}</div>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="basis-1/3 text-center">
                          <label className="text-xs" htmlFor="crib">おむつ交換台</label><br/>
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
                      <button
                        className="
                        accordion-button
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border-0
                        rounded-none
                        transition
                        focus:outline-none
                        "
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="false"
                        aria-controls="collapseOne5"
                      >
                        <div className="text-center">
                          <label className="text-xs" >おやこへのやさしさ</label>
                          <div className="flex justify-center">
                            {[...Array(totalStars)].map((_arr, index) => {
                                return index < row.kindness_rating ?  <RiStarSmileFill  color="orange" size="2rem" /> : <RiStarSmileFill color="grey" size="2rem" />;
                            })}
                          </div>
                        </div>
                      </button>
                      <div id="collapseOne5" className="accordion-collapse collapse" aria-labelledby="headingOne5">
                        <div className="accordion-body">
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
                    </div>
                  </div>
              </div>
          ))}
        </div>
    </>
  )
}

  