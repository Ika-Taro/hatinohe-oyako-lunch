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

    return (<div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h4>Register</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={registerSubmit}>
                            <div className="form-group mb-3">
                                <label>User Name</label>
                                <input type="" name="name" onChange={handleInput} value={registerInput.name} className="form-control" />
                                {/* <span>{registerInput.error_list.name}</span> */}
                            </div>
                            <div className="form-group mb-3">
                                <label>Mail Address</label>
                                <input type="" name="email" onChange={handleInput} value={registerInput.email} className="form-control" />
                                {/* <span>{registerInput.error_list.email}</span> */}
                            </div>
                            <div className="form-group mb-3">
                                <label>Password</label>
                                <input type="" name="password" onChange={handleInput} value={registerInput.password} className="form-control" />
                                {/* <span>{registerInput.error_list.password}</span> */}
                            </div>
                            <div className="form-group mb-3">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register