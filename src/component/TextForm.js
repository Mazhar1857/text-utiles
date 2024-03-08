import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.alert('Text converted to upper case', 'success');
    }
    const handleDownClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.alert('Text converted to lower case', 'success');
    }

    const clearText = () => {

        setText('');
        props.alert('Text cleared', 'success')
    }

    const copy = () => {

        navigator.clipboard.writeText(text);
        props.alert('Text copied', 'success')

    }

    const handleOnChange = (event) => {

        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className='container'>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? '#031d37' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>

            </div>
            <div className='container'>
                <button disabled={text.length === 0} type="button" onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to upperCase</button>
                <button disabled={text.length === 0} type="button" onClick={handleDownClick} className="btn btn-primary mx-2 my-2">Convert to lowerCase</button>
                <button disabled={text.length === 0} type="button" onClick={clearText} className="btn btn-primary mx-2 my-2">Clear</button>
                <button disabled={text.length === 0} type="button" onClick={copy} className="btn btn-primary mx-2 my-2">Copy</button>
            </div>
            <div className='container my-2'>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Text summary</h1>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.split(/\s+/).filter((item) => { return item.length !== 0 }).length} word  and {text.length} character</p>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h2>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text}</p>
            </div>
        </>
    )
}
