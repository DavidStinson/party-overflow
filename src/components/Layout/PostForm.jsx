import React, { useState } from 'react'

//Components
// import CodeEditor from './CodeComponents/CodeEditor'

const PostForm = (props) => {
    const [question, setQuestion] = useState('')
    const [codeblock, setCodeblock] = useState('b')



    const handleSubmit = async (e) => {
        e.preventDefault()
        //make sure fields are filled out before allowing submit, if not display error message
        const formData = {
            question: question,
            codeblock: codeblock,
            added_by: props.currentUser._id,
        }
        props.handleCreatePost(formData)
    }

    return (
        <form className="post-form" onSubmit={(e) => handleSubmit(e)}>
            <label>Create Post</label>

            <input
                placeholder="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            ></input>

            {/* <CodeEditor
                name="code-editor"
                codeblock={codeblock}
                setCodeblock={setCodeblock}
            ></CodeEditor> */}

            <button>Submit</button>
        </form>
    )
}

export default PostForm