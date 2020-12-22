import React from 'react';

export default function AmountList({ names, loading, error }) {
    return (
        <>
            {loading ? 'Type a Name...' :
                <div>
                    {names.map(name =>
                        <div key={name.nameGuid}>
                            <h4>{name.name1}'s amount is {name.amount}</h4>
                        </div>)}
                </div>
            }
            <p className="error">{error ? error : null}</p>
            <hr />
        </>
    )
}