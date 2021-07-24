import React, { useState } from "react"

// Components
import CodeEditor from '../Code/CodeEditor'

const CommentForm = (props) => {
    const [text, setText] = useState('')
    const [codeblock, setCodeblock] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            comment_text: text,
            codeblock: codeblock,
            post_id: props.post._id,
            commenter: props.currentUser._id,
        }
        props.handleCreateComment(formData)
    }


    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <label>Comment</label>
            <input
                name="comment_text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <label>Codeblock</label>
            <CodeEditor
                name="code-editor"
                codeblock={codeblock}
                setCodeblock={setCodeblock}
            ></CodeEditor>
            <button>Submit</button>
        </form>
    )
}

export default CommentForm
