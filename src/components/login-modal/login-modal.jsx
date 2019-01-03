import * as React from 'react';

export const LoginModal = ({params}) => (
    <div>
        LoginModal
        <button onClick={() => params.goTo.mainPage()}>Go to mainPage</button>
    </div>
);
