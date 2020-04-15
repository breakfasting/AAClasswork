import React from 'react';

const Header = ({fn, title, id}) => {
    return (
        <h1 onClick={() => fn(id)}>
            {title}
        </h1>
    )
}

export default Header;