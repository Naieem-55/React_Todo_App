import React from 'react'
import style from './todo.module.css'

const Todo = (props) => {

  const{title , description} = props.todo
  const{id} = props
  const handleDelete = (id) => {
    props.onRemoveTodo(id)
  }
  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <i>{description}</i>
        </div>

        <div>
            <button className={style.btn} onClick={() => {
              handleDelete(id)
            }}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </article>
  )
}

export default Todo