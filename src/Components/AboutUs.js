import React from 'react'

export default function AboutUs(props) {
    return (
        <div className='container' style={{color: props.mode=== 'light'?'black':'White'}}>
            <h1 className='my-2'>About the Text Utility Tool</h1>
            <p className='my-1' >The Text Utility Tool is Online Word Counter and character counter tool which can allows you to manipulate text by converting it between uppercase, lowercase and Sentence Case.Also, it  It also provides the functionality to copy the modified text to your clipboard, making it convenient for you to use the transformed text in other applications or documents.</p>
            <hr className="hr hr-blurry" />
            <h2>Features</h2>
            <ul className=' my-1'>
                <li>Word and character counter</li>
                <li>Convert text uppercase to lowercase</li>
                <li>Convert text lowercase to uppercase</li>
                <li>Copy Modified Text</li>
                <li>Average time taken to read content</li>
                <li>Output content preview</li>
            </ul>
            <hr className="hr hr-blurry " />
            <h2>How to use?</h2>
            <ol>
                <li>Paste the text you want to modify into the input area of the tool.</li>
                <li>Click either the "Convert to Lowercase" or "Convert to Uppercase" to "Convert to Sentence case" button, depending on the desired conversion.</li>
                <li>The modified text will appear in the output area.</li>
                <li>To copy the modified text, click the "Copy Text" button</li>
            </ol>
        </div>
    )
}
