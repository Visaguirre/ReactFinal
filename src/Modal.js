import React from 'react'


function Modal({ closeModal, blog, history, }) {

    const handleEdit = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
           
        <div className="create">
            <h2>Edit Your Blog</h2>
            <form >
                <label>Blog title:</label>
                    <input 
                    type="text" 
                    required 
                    />
                    <label>Blog body:</label>
                    <textarea
                    required
                    ></textarea>

                <label>Blog author:</label>
                    <input 
                    type="text" 
                    placeholder="Your Name"
                    required 
                    />
        
            </form>
        </div>
            <div className='footer'>
                <button className='delete-btn' onClick={()=>closeModal(false)}>Cancel</button>
                <button className='submit-btn' onClick={handleEdit}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Modal