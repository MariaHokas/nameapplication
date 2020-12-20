import React from 'react'

export default function BasicList({ names, loading, error }) {
    return (
        <div>
            <header>
            <h3>Name List</h3>
            </header>
            {loading ? 'loading ' :
                <table>
                    <tbody>
                        <th>Name</th>
                        <th>Amount</th>
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