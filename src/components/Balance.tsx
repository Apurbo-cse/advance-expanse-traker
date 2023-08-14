import React from 'react';

interface Props {

}

const Balance: React.FC<Props> = () => {
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span>10500</span>
            </h3>
        </div>
    )
}

export default Balance;



