import React, { useState, useEffect } from 'react';
import BlogForm from "./BlogForm"
import axios from "axios";

type Props = {
  shop_name: string;
  shop_category: string;
  kindness_rating: string;
  children_chair: string;
  tatami_room: string;
  crib: string;
  parent_review: string;
  children_review: string;
  match: any
}

const BlogEdit = (props: any) => {
  const params = props.match.params;

  const [editData, setEditData] = useState({
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
    getEditData();
  }, [])

  function getEditData(){
    axios
        .post('/api/edit', 
        {
            id: params.id
        }
        )
        .then(res => {
            setEditData(res.data);
        })
        .catch(() => {
            console.log('通信に失敗しました');
        });
  }

  function updatePost (){
    axios
        .post('/api/update', 
          {
            id: params.id,
            shop_name: editData.shop_name, 
            shop_category: editData.shop_category,
            kindness_rating: editData.kindness_rating,
            children_chair: editData.children_chair,
            tatami_room: editData.tatami_room,
            crib: editData.crib,
            parent_review: editData.parent_review,
            children_review: editData.children_review,
          })
        .then((res) => {
            setEditData(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const target = e.target;
    const name = target.name;
    setEditData(() => {
      return {...editData, [name]: target.value };
    });
  }

  return(
    <>
      <div>ジョジョ</div>
      <BlogForm data={editData} inputChange={inputChange} btnFunc={updatePost} btnReset={undefined}/>
    </>
  )

}

export default BlogEdit;