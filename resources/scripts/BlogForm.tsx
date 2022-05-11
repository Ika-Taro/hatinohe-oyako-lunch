import React from 'react';
import "react-widgets/styles.css";

function BlogFrom (props: { data: any; inputChange: any; btnFunc: any; btnReset: any }) {
  const { data, inputChange, btnFunc, btnReset} = props;
  return (
    <>
      <form>
          <input id="blog_form" type="text" name="shop_name" value={data.shop_name} onChange={inputChange} />
          <select
            id="blog_form"
            name="shop_category"
            value={data.shop_category}
            onChange={inputChange}
          >
            <option value="">--</option>
            <option value="おすし">おすし</option>
            <option value="やきにく">やきにく</option>
            <option value="ラーメン">ラーメン</option>
            <option value="カレー">カレー</option>
            <option value="ハンバーグ">ハンバーグ</option>
            <option value="そのほか">そのほか</option>
          </select>

          <select
            id="blog_form"
            name="kindness_rating"
            value={data.kindness_rating}
            onChange={inputChange}
          >
            <option value="">--</option>
            <option value="1">ほし☆ひとつ</option>
            <option value="2">ほし☆ふたつ</option>
            <option value="3">ほし☆みっつ！</option>
          </select>

          <select 
            id="blog_form" 
            name="children_chair" 
            value={data.children_chair} 
            onChange={inputChange}>
              <option value="">--</option>
              <option value="あり">あり</option>
              <option value="なし">なし</option>
          </select>

          <select
            id="blog_form"
            name="tatami_room"
            value={data.tatami_room}
            onChange={inputChange}>
              <option value="">--</option>
              <option value="あり">あり</option>
              <option value="なし">なし</option>
          </select>

          <select
            id="blog_form"
            name="crib"
            value={data.crib}
            onChange={inputChange}>
              <option value="">--</option>
              <option value="あり">あり</option>
              <option value="なし">なし</option>
          </select>

          <input id="blog_form" type="text" name="parent_review" value={data.parent_review} onChange={inputChange} />
          <input id="blog_form" type="text" name="children_review" value={data.children_review} onChange={inputChange} />
      </form>
      <a 
      href="/"
      className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" onClick={btnFunc} >
            登録
      </a>
      <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="reset" onClick={btnReset} >
            リセット
      </button>
      
    </>
  );
}


export default BlogFrom;