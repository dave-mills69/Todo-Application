import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please Add a Task")
            return
        }

        onAdd({ text, day })
        setText('')
        setDay('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <input className='btn btn-block' type='Submit' value='Save Task'/>
        </ form>
    )
}

export default AddTask
