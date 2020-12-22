import React from 'react';

export default function Header3({ loading, sum, error }) {
    return (
        <>
            {loading ? 'Loading' :
                <table>
                    <tbody>
                        <tr>
                            <th>Total</th>
                            <th>{sum}</th>
                        </tr>
                    </tbody>
                </table>}
            <p className="error">{error ? error : null}</p>
        </>
    )
}