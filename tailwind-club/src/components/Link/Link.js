import React from 'react';

const Link = (props) => {
    const{name, Link}= props.route;
    return (
        
        <li className='mr-10'>
            <a href= {Link}>{name}</a>
            
        </li>
    );
};

export default Link;