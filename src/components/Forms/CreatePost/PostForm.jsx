import React from 'react'
import '../CreateForm.css'

// Components
import CodeEditor from '../../Code/CodeEditor'

const PostForm = (props) => {

    return (
            <div className="create-form-container">
                <form onSubmit={props.handleSubmit} className="create-form" style={{ marginTop: '50px' }}>
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

