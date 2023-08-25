import React, { useState } from 'react';
import style from './newTodo.module.css'

const NewTodo = (props) => {

    const[todo , setTodo] = useState({title : "", description : ""})
    const{title , description} = todo

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return{...oldTodo , [name]:e.target.value}
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo)
        setTodo({title : "" , description : ""})
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style["form-field"]}>
                <label htmlFor="title">Title : </label>
                <input type="text" id="title" name="title" value={title} onChange={handleChange}></input>
            </div>

            <div className={style["form-field"]}>
                <label htmlFor="description">Desc :</label>
                <textarea type="text" id="description" name="description" value={description} onChange={handleChange}></textarea>
            </div>

            <button type="submit">Add</button>
        </form>
    );
};

export default NewTodo;
