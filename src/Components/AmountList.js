import React, { useEffect, useState } from 'react';

export default function AmountList({ names, loading, error, forwardedRef }) {
    const [currentRef, setCurrentRef] = useState('')
    useEffect(() => {
        setCurrentRef(forwardedRef.current.value);
    })
    if (names.length > 0 || currentRef.length === 0)
        return (
            <>
                {loading ? 'Type a Name...' :
                    <div>
                        {names.map(name =>
                            <div key={name.nameGuid}>
                                <h3>{name.names}'s amount is {name.amount}</h3>
                            </div>)}
                    </div>
                }
                <p className="error">{error ? error : null}</p>
                <hr />
            </>
        );
    else
        return (
            <>
                <p className="error">Sorry I didn't find anything by name: <strong>{currentRef}</strong></p>
            </>
        );
}