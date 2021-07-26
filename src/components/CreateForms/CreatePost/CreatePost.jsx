import React, { useState } from 'react'
import '../CreateForm.css'

// Components
import PostForm from './PostForm'
import CreatePostHeader from './CreatePostHeader'

const CreatePost = (props) => {
    const [toggle, setToggle] = useState(false)
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
            <CreatePostHeader setDisplay={props.setDisplay}></CreatePostHeader>
            <PostForm
                setQuestion={setQuestion}
                handleSubmit={handleSubmit}

                codeblock={codeblock}
                setCodeblock={setCodeblock}

                toggle={toggle}
                setToggle={setToggle}
            ></PostForm>
        </>
    )
}

export default CreatePost

