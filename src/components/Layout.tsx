import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="App">

            <div className="header">
                <h1>Expense Tracker</h1>
            </div>

            <div className="main">
                {children}
            </div>

            <div className="footer">&copy;2022 Learn with Sumit</div>
        </div>
    )
}

export default Layout;
