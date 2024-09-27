import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text change to Upper Case", "success");

    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text change to Lower Case", "success");

    }

    const handleSentenceClick = () => {
        let sentences = text.split(".");

        // capitalize the first letter of each sentence
        let capitalizedSentences = sentences.map(sentence => {
            // trim any leading or trailing whitespace from the sentence
            sentence = sentence.trim();

            // get the first letter of the sentence and capitalize it
            let firstLetter = sentence.charAt(0).toUpperCase();

            // get the rest of the sentence and add it to the capitalized first letter
            let restOfSentence = sentence.slice(1);

            // return the capitalized sentence
            return `${firstLetter}${restOfSentence}`;
        });

        // join the sentences back together with a period separator
        let newText = capitalizedSentences.join(". ");
        setText(newText);
        props.showAlert("Text change to Sentence Case", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'White' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter text here...' value={text} onChange={handleOnChange} id="myBox" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061532', color: props.mode === 'light' ? 'black' : 'White' }} rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleSentenceClick}>Convert to Sentence Case</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className='container my-2' style={{ color: props.mode === 'light' ? 'black' : 'White' }}>
                <h1>Summary</h1>
                <p>{text.split(" ").filter((e) => { return e.length !== 0 }).length} word {text.length} numbers</p>
                <p>{0.008 * text.split(" ").filter((e) => { return e.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Noting to preview here..."}</p>
            </div>
        </>
    )
}
