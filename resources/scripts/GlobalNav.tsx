import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function GlobalNav () {

    const navigate = useNavigate();

    const logoutSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem(res.data.token)
                localStorage.removeItem('auth_name');
                localStorage.removeItem(res.data.username)
                swal("ログアウトしました", res.data.message, "success");
                navigate('/');
                location.reload();
            } 
        });
    }

    let AuthButtons: any = "";

    if (!localStorage.getItem('auth_token')){
        AuthButtons = (
        <>
            <nav className="flex flex-row-reverse aline-center flex-wrap bg-teal-500">
                <Link to="/register">
                    <span className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white m-4 ml-2">会員登録</span>
                </Link>
                <Link to="/login">
                    <span className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white my-4 ">ログイン</span>
                </Link>
            </nav>
        </>
        );
    } else {
        AuthButtons = (
        <>
            <nav className="flex flex-row-reverse  flex-wrap bg-teal-500 ">
                <div onClick={logoutSubmit}>
                    <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white m-4 ">ログアウト</button>
                </div>
                <Link to="/">
                    <span className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white my-4 ">投稿</span>
                </Link>
            </nav>
        </>
        );
    }

    return(
        <div>
            {AuthButtons}
        </div>
    )
}

export default GlobalNav;   