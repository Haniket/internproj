import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UpdateEmp } from "./updateemp";

function EmpCard({ data, handleEdit, handleDelete }) {
    const { _id, title, description } = data;

    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="button-container">
                <button className="button" name={_id} onClick={handleEdit}>
                    edit
                </button>
                <button className="button" name={_id} onClick={handleDelete}>
                    delete
                </button>
            </div>
        </li>
    );
}

export function ShowEmp() {
    const [emp, setEmp] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(
        function () {
            axios
                .get("http://localhost:8000/api/employee")
                .then((res) => {
                    console.log("data",res.data);
                    setEmp(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        [update, UpdateEmp ]
    );

    function handleEdit(e) {
        setId(e.target.name);
        setOpen(true);
    }

    function handleUpdate() {
        console.log("update:", update, !update);
        setUpdate(!update);
    }

    function handleDelete(e) {
        axios.delete(`http://localhost:8000/api/employee/${e.target.name}`);

        setEmp((data) => {
            return data.filter((emp) => emp._id !== e.target.name);
        });
    }

    function handleClose() {
        setId("");
        setOpen(false);
    }

    return (
        <section className="container">
            <Link to="/create-emp" className="button-new">
                <button className="button">New</button>
            </Link>
            <section className="contents">
                <h1>Employee</h1>
                <ul className="list-container">
                    {emp.map((data) => (
                        <EmpCard
                            data={data}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            </section>
            {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            &times;
                        </p>

                        <UpdateEmp
                            _id={id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                        />
                    </div>
                </section>
            ) : (
                ""
            )}
        </section>
    );
}
