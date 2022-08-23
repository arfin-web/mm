import React, { useRef } from 'react';
import './Home.css';

const Home = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const classRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();

    const handleForm = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const stuClass = classRef.current.value;
        const city = cityRef.current.value;
        const division = stateRef.current.value;
        const zip = zipRef.current.value;

        const newUser = { name, email, address, stuClass, city, division, zip };

        fetch('http://localhost:5000/', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Student Addded');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <div className="container-fluid bg-danger">
                <div className="container bg-danger shadow-lg home-container">
                    <h1 className="text-white fw-bold mb-4">Admit New Student</h1>
                    <div className="w-75">
                        <form onSubmit={handleForm} className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputName4" className="form-label text-white">Name</label>
                                <input ref={nameRef} type="text" className="form-control" id="inputName4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
                                <input ref={emailRef} type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label text-white">Address</label>
                                <input ref={addressRef} type="text" className="form-control" id="inputAddress" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label text-white">Class</label>
                                <input ref={classRef} type="text" className="form-control" id="inputAddress2" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label text-white">City</label>
                                <input ref={cityRef} type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label text-white">State</label>
                                <select ref={stateRef} id="inputState" className="form-select">
                                    <option selected>Dhaka</option>
                                    <option>Chattogram</option>
                                    <option>Rajshahi</option>
                                    <option>Rangpur</option>
                                    <option>Sylhet</option>
                                    <option>Khulna</option>
                                    <option>Barishal</option>
                                    <option>Noakhali</option>
                                    <option>Mymenshing</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label text-white">Zip</label>
                                <input ref={zipRef} type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <input type="submit" className="btn bg-white text-danger mt-2 mb-4 fw-bolder" value="Add Student" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;