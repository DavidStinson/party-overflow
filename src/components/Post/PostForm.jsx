import React, { useState } from 'react'
import '../../styles/PostForm.css'
import '../../styles/prism.css'
import '../../styles/Pagination.css'

// Components
import CodeEditor from '../Code/CodeEditor'

const PostForm = (props) => {
    const [question, setQuestion] = useState('')
    const [codeblock, setCodeblock] = useState('')
    const [toggle, setToggle] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            question: question,
            codeblock: codeblock,
            added_by: props.currentUser._id,
        }
        props.handleCreatePost(formData)
    }

    return (
        <>
            <div className="hidden-container">
                <div className="pagination">
                    <h3>Create Post</h3>
                    <div className="pagination-buttons">
                        <button onClick={() => props.setDisplay(true)}>Cancel</button>
                    </div>
                </div>
            </div>

            <div className="post-form-container">
                <div className="post-form" style={{marginTop: '50px'}}>
                    <div className="question-prompt">
                        <label>Enter your question</label>
                    </div>
                    <input
                        required
                        autoComplete='off'
                        placeholder="Question"
                        name="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    ></input>

                    <div className="border"></div>

                    <div className="code-prompt">
                        <label>Codeblock</label>
                        <button id="plus-button" onClick={() => setToggle(!toggle)}>+</button>
                    </div>

                    {toggle &&
                        <CodeEditor codeblock={codeblock} setCodeblock={setCodeblock}></CodeEditor>
                    }

                    <div className="border"></div>
                    
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </div>
        </>





    )
}

export default PostForm

