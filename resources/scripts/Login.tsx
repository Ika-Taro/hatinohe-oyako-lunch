import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () =>{

    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: '',
    });

    const handleInput = (e: { persist: () => void; target: { name: any; value: any; }; }) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("ログイン成功", res.data.message, "success");
                    navigate('/');
                    location.reload();
                } else if (res.data.status === 401){
                    swal("注意", res.data.message, "warning");
                } else {
                    setLogin({...loginInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="col-md-6 col-lg-6 mx-auto">
                    <div className="card">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                    </div>
                    <div className="card-body">
                        <form className="mt-8 space-y-6" onSubmit={loginSubmit}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        メールアドレス
                                    </label>
                                        <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        onChange={handleInput}
                                        value={loginInput.email}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        />
                                        {/* <span>{loginInput.error_list.email}</span> */}
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        パスワード
                                    </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={handleInput} 
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                        {/* <span>{loginInput.error_list.password}</span> */}
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit" 
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                >
                                    ログイン
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;