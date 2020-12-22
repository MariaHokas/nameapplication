import React from 'react';

export default function AmountForm({ handleSubmit, inputRef, empty }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} placeholder="Type a name and get amount of the person.." />
                <button className="quickSearch_button">Get Amount</button>
            </form>
            <p className="error">{empty ? empty + inputRef.current.value : null} </p>
        </>
    )
}