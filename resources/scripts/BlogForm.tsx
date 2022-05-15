import React from 'react';
import "react-widgets/styles.css";

function BlogFrom (props: { data: any; inputChange: any; btnFunc: any; }) {
  const { data, inputChange, btnFunc} = props;
  return (
    <>
      <form>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            おみせのなまえ
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input id="blog_form"
              className="border-solid border-2 border-gray-300 block w-full sm:text-sm rounded-md"
              type="text"
              name="shop_name"
              value={data.shop_name}
              onChange={inputChange} 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            おみせのしゅるい
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <select
              className="border-solid border-2 border-gray-300 block w-full sm:text-sm rounded-md"
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
          </div>
        </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              おやこへのやさしさ
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                className="border-solid border-2 border-gray-300 block w-full sm:text-sm rounded-md"
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
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              こどもいす
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                className="border-solid border-2 border-gray-300 block w-full sm:text-sm rounded-md"
                id="blog_form" 
                name="children_chair" 
                value={data.children_chair} 
                onChange={inputChange}>
                  <option value="">--</option>
                  <option value="あり">あり</option>
                  <option value="なし">なし</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              ざしき
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                className="border-solid border-2 border-gray-300 block w-full sm:text-sm rounded-md"
                id="blog_form"
                name="tatami_room"
                value={data.tatami_room}
                onChange={inputChange}>
                  <option value="">--</option>
                  <option value="あり">あり</option>
                  <option value="なし">なし</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              おむつこうかん台
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                className="border-solid border-2 border-gray-300 block w-full sm:text-sm rounded-md"
                id="blog_form"
                name="crib"
                value={data.crib}
                onChange={inputChange}>
                  <option value="">--</option>
                  <option value="あり">あり</option>
                  <option value="なし">なし</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              コメント
            </label>
            <div className="mt-1">
              <textarea
                id="blog_form"
                name="parent_review"
                rows={3}
                className="shadow-sm mt-1 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
                value={data.parent_review} onChange={inputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              こどもたちのコメント
            </label>
            <div className="mt-1">
              <textarea
                id="blog_form"
                name="children_review"
                rows={3}
                className="shadow-sm mt-1 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
                value={data.children_review} onChange={inputChange}
              />
            </div>
          </div>
      </form>
      <a 
      href="/"
      className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mt-2 rounded" type="submit" onClick={btnFunc} >
            登録
      </a>      
    </>
  );
}


export default BlogFrom;