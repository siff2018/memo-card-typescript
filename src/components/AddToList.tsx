import React,{useState} from 'react'
import {IState as IProps} from '../App'

const AddToList = () => {
    const [input, setInput] = useState({
        name: "",
        age : "",
        note: "",
        img : "",
        url : ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
       setInput({
        ...input, [e.target.name]: e.target.value
       })
    }

    const handleClick = (): void => {

    }

    return(
        <div className='AddToList'>
            <input
             type='text'
             placeholder="Name"
             className='AddToList-input'
             value={input.name}
             onChange={(e) => {}}
             name="name"
            />
            <input
             type='text'
             placeholder="Age"
             className='AddToList-input'
             value={input.age}
             name="age"
             onChange={handleChange}
            />
            <input
             type='text'
             placeholder="Image Url"
             className='AddToList-input'
             value={input.url}
             onChange={handleChange}
             name='url'
            />
            <textarea
             
             placeholder="Notes"
             className='AddToList-input'
             value={input.note}
             name='note'
             onChange={handleChange}
            />

            <button className='AddToList-btn'
                    onClick={handleClick}
            >

                Add a List
            </button>
         </div>
    )
}


export default AddToList;