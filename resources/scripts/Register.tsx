import React, { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: '',
    });

    const handleInput = (e: { persist: () => void; target: { name: any; value: any; }; }) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate('/')
                } else {
                    setRegister({...registerInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="col-md-6 col-lg-6 mx-auto">
                    <div className="card">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
                    </div>
                    <div className="card-body">
                        <form className="mt-8 space-y-6" onSubmit={registerSubmit}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        ニックネーム
                                    </label>
                                    <input
                                    id="name"
                                    type=""
                                    name="name"
                                    onChange={handleInput}
                                    value={registerInput.name}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                    placeholder="Nickname"
                                    />
                                    {/* <span>{registerInput.error_list.name}</span> */}
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                            メールアドレス
                                    </label>
                                        <input
                                        id="email-address"
                                        type=""
                                        name="email"
                                        onChange={handleInput}
                                        value={registerInput.email}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        />
                                        {/* <span>{registerInput.error_list.email}</span> */}
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        パスワード
                                    </label>
                                        <input
                                        id="password"
                                        type=""
                                        name="password"
                                        onChange={handleInput}
                                        value={registerInput.password}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                        {/* <span>{registerInput.error_list.password}</span> */}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                >
                                登録
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register