import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Student = () => {
    const [student, setStudent] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/students/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, []);

    const handleName = (e) => {
        const updatedName = e.target.value;
        const updatedUser = { ...student }
        updatedUser.name = updatedName;
        setStudent(updatedUser)
    }

    const handleEmail = (e) => {
        const updatedEmail = e.target.value;
        const updatedUser = { ...student }
        updatedUser.email = updatedEmail;
        setStudent(updatedUser)
    }

    const handleAddress = (e) => {
        const updatedAddress = e.target.value;
        const updatedUser = { ...student }
        updatedUser.address = updatedAddress;
        setStudent(updatedUser)
    }

    const handlestuClass = (e) => {
        const updatedstuClass = e.target.value;
        const updatedUser = { ...student }
        updatedUser.stuClass = updatedstuClass;
        setStudent(updatedUser)
    }

    const handleCity = (e) => {
        const updatedCity = e.target.value;
        const updatedUser = { ...student }
        updatedUser.city = updatedCity;
        setStudent(updatedUser)
    }

    const handleDivision = (e) => {
        const updatedDivision = e.target.value;
        const updatedUser = { ...student }
        updatedUser.division = updatedDivision;
        setStudent(updatedUser)
    }

    const handleZip = (e) => {
        const updatedZip = e.target.value;
        const updatedUser = { ...student }
        updatedUser.zip = updatedZip;
        setStudent(updatedUser)
    }

    const handleUpdate = (e) => {
        const url = `http://localhost:5000/students/${id}`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfully')
                }
            })
        e.preventDefault()
    }

    return (
        <>
            <div className="container-fluid bg-danger">
                <div className="container bg-danger shadow-lg home-container">
                    <h1 className="text-white fw-bold mb-4">Update Student Information</h1>
                    <div className="w-75">
                        <form onSubmit={handleUpdate} className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputName4" className="form-label text-white">Name</label>
                                <input onChange={handleName} value={student.name || ''} type="text" className="form-control" id="inputName4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
                                <input onChange={handleEmail} value={student.email || ''} type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label text-white">Address</label>
                                <input onChange={handleAddress} value={student.address || ''} type="text" className="form-control" id="inputAddress" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label text-white">Class</label>
                                <input onChange={handlestuClass} value={student.stuClass || ''} type="text" className="form-control" id="inputAddress2" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label text-white">City</label>
                                <input onChange={handleCity} value={student.city || ''} type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label text-white">State</label>
                                <select onChange={handleDivision} value={student.division || ''} id="inputState" className="form-select">
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
                                <input onChange={handleZip} value={student.zip || ''} type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <input type="submit" className="btn bg-white text-danger mt-2 mb-4 fw-bolder" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Student;