import React from 'react'
import Header3 from './Header3'

export default function BasicList({ names, loading, error }) {
    return (
        <div>
            <header>
                <Header3 header3Text="Name List" />
            </header>
            {loading ? 'loading ' :
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map(name =>
                            <tr key={name.nameGuid}>
                                <td>{name.names}</td>
                                <td>{name.amount}</td>
                            </tr>)}
                    </tbody>
                </table>}
          <p className="error">{error ? error : null}</p>  
        </div>
    );
}