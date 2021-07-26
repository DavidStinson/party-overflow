import React, { useState } from "react"

// Components
import CodeEditor from '../../Code/CodeEditor'

const CommentForm = (props) => {
    const [text, setText] = useState('')
    const [toggle, setToggle] = useState(false)
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
        <form onSubmit={handleSubmit} className="create-form">
            <div className="question-prompt">
                <label>Enter your Comment</label>
            </div>
            
            <input
                required
                autoComplete='off'
                placeholder="Comment"
                name="comment_text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>

            <div className="border"></div>

            <div className="code-prompt">
                <label>Codeblock</label>
                <button type="button" id="plus-button" onClick={() => setToggle(!toggle)}>+</button>
            </div>

            {toggle &&
                <CodeEditor
                    name="code-editor"
                    codeblock={codeblock}
                    setCodeblock={setCodeblock}
                ></CodeEditor>
            }

            <div className="border"></div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default CommentForm
