import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this user ?')
        if (proceed) {
            const url = `http://localhost:5000/student/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingUser = students.filter(user => user._id !== id)
                        setStudents(remainingUser);
                    };
                })
        }
    }

    return (
        <>
            <div className="container-fluid bg-danger">
                <div className="container bg-danger shadow-lg pb-5">
                    <h1 className="text-white text-center mb-3">All Students</h1>
                    <div className="row g-5">
                        {
                            students.map(student => <div className="col-lg-3 col-md-4 col-12">
                                <div className="card border-0 rounded-3 shadow-lg">
                                    <div className="card-header">
                                        <h3 className="text-danger">Name: {student.name}</h3>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item fw-bold">Email: {student.email}</li>
                                        <li className="list-group-item fw-bold">Address: {student.address}</li>
                                        <li className="list-group-item fw-bold">Class: {student.stuClass}</li>
                                        <li className="list-group-item fw-bold">City: {student.city}</li>
                                        <li className="list-group-item fw-bold">Division: {student.division}</li>
                                        <li className="list-group-item fw-bold">Zip: {student.zip}</li>
                                        <NavLink to={`/students/${student._id}`}>
                                            <button className="btn btn-danger mx-5 mb-2 px-5">Update</button>
                                        </NavLink>
                                        <button onClick={() => handleDelete(student._id)} className="btn btn-outline-danger mx-5 mb-2">Delete</button>
                                    </ul>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Students;