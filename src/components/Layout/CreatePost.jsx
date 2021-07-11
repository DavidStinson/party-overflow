import React, { useState } from 'react'

//Components
// import CodeEditor from './CodeComponents/CodeEditor'

const CreatePost = (props) => {
    // const { setPosts, setDisplay, createPost, currentUser } = props
    // //State
    // const [question, setQuestion] = useState('')
    // const [codeblock, setCodeblock] = useState('')


    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const formData = {
    //         question: question,
    //         codeblock: codeblock,
    //         user_id: currentUser._id,
    //         addedBy: currentUser._id,
    //     }
    //     try {
    //         const response = await createPost(formData)
    //         response.post.user_id = currentUser
    //         setPosts(posts => [response.post, ...posts])
    //         setDisplay(true)
    //     } catch (error) {
    //         throw error
    //     }
    // }

    return (
        <div></div>
        // <form className="post-form" onSubmit={handleSubmit}>
        //     <label>Create Post</label>

        //     <input
        //         placeholder="question"
        //         name="question"
        //         value={question}
        //         onChange={(e) => setQuestion(e.target.value)}
        //     ></input>

        //     <CodeEditor
        //         name="code-editor"
        //         codeblock={codeblock}
        //         setCodeblock={setCodeblock}
        //     ></CodeEditor>

        //     <button>Submit</button>
        // </form>
    )
}

export default CreatePost