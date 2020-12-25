import React from 'react';

export default function AmountForm({ handleSubmit, forwardedRef }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={forwardedRef} placeholder="Type a name and get amount of the person.." />
                <button className="quickSearch_button">Get Amount</button>
            </form>
        </>
    )
}