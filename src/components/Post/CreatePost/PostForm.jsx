import React from 'react'
import './CreatePost.css'

// Components
import CodeEditor from '../../Code/CodeEditor'

const PostForm = (props) => {

    return (
            <div className="post-form-container">
                <form onSubmit={props.handleSubmit} className="post-form" style={{ marginTop: '50px' }}>
                    <div className="question-prompt">
                        <label>Enter your question</label>
                    </div>
                    <input
                        required
                        autoComplete='off'
                        placeholder="Question"
                        name="question"
                        value={props.question}
                        onChange={(e) => props.setQuestion(e.target.value)}
                    ></input>

                    <div className="border"></div>

                    <div className="code-prompt">
                        <label>Codeblock</label>
                        <button type="button" id="plus-button" onClick={() => props.setToggle(!props.toggle)}>+</button>
                    </div>

                    {props.toggle &&
                        <CodeEditor codeblock={props.codeblock} setCodeblock={props.setCodeblock}></CodeEditor>
                    }

                    <div className="border"></div>
                    <button type="submit">Submit</button>
                </form>
            </div>
    )
}

export default PostForm

