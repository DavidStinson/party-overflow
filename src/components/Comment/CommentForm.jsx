import React, { useState } from "react"

const CommentForm = (props) => {
    const [text, setText] = useState('')
    const [codeblock, setCodeblock] = useState('b')

    console.log(props)
    const handleSubmit = (e) => {
        e.preventDefault()
        //make sure fields are filled out before allowing submit, if not display error message
        const formData = {
            comment_text: text,
            codeblock: codeblock,
            post_id: props.post._id,
            added_by: props.currentUser._id,
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
            {/* <CodeEditor
                name="code-editor"
                codeblock={codeblock}
                setCodeblock={setCodeblock}
            ></CodeEditor> */}
            <button>Submit</button>
        </form>
    )
}

export default CommentForm
