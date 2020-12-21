import React from 'react'
import Header3 from './Header3'

export default function BasicList({ names, loading, error }) {
    return (
        <div>
            <header>
            <Header3 header3Text="Name List"/>
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