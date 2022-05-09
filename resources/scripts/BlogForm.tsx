import React from 'react';


function BlogFrom (props: { data: any; inputChange: any; btnFunc: any; btnReset: any }) {
  const { data, inputChange, btnFunc, btnReset} = props;
  return (
    <>
      <form>
          <input id="blog_form" type="text" name="shop_name" value={data.shop_name} onChange={inputChange} />
          <input id="blog_form" type="text" name="shop_category" value={data.shop_category} onChange={inputChange} />
          <input id="blog_form" type="text" name="kindness_rating" value={data.kindness_rating} onChange={inputChange} />
          <input id="blog_form" type="text" name="children_chair" value={data.children_chair} onChange={inputChange} />
          <input id="blog_form" type="text" name="tatami_room" value={data.tatami_room} onChange={inputChange} />
          <input id="blog_form" type="text" name="crib" value={data.crib} onChange={inputChange} />
          <input id="blog_form" type="text" name="parent_review" value={data.parent_review} onChange={inputChange} />
          <input id="blog_form" type="text" name="children_review" value={data.children_review} onChange={inputChange} />
      </form>
      <a href="/" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" onClick={btnFunc} >
            登録
      </a>
      <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="reset" onClick={btnReset} >
            リセット
      </button>
    </>
  );
}

export default BlogFrom;