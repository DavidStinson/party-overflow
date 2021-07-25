import React, { useState } from 'react'
import '../../styles/PostForm.css'
import '../../styles/prism.css'
import '../../styles/Pagination.css'

// Components
import CodeEditor from '../Code/CodeEditor'

const PostForm = (props) => {
    const [question, setQuestion] = useState('')
    const [codeblock, setCodeblock] = useState('')

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
                <form className="post-form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-prompt">
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

                    <div className="form-prompt">
                        <label>Codeblock</label>
                    </div>
                    <CodeEditor codeblock={codeblock} setCodeblock={setCodeblock}></CodeEditor>

                    <button>Submit</button>

                </form>

            </div>
        </>





    )
}

export default PostForm

