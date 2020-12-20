import React from 'react'

export default function BasicList({ names, loading, error }) {
    return (
        <div>
            <h2>Fetch from database tömnönönönö</h2>
            {loading ? 'loading ' :
                <table>
                    <tbody>
                        {names.map(name =>
                            <tr key={name.nameGuid}>
                                <td>{name.name1}</td>
                                <td>{name.amount}</td>
                            </tr>)}
                    </tbody>
                </table>}
            {error ? error : null}
        </div>
    );
}