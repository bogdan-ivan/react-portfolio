//import React from 'react' don't need anymore

import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, color, onAdd, showAdd}) => { // destructuring
    // const onClick = (e) => {
    //     console.log("on click");
    // }
    const location = useLocation();
    return (
        <header className='header'>
            <h1 style={{color: color}}>{title}</h1>
            { location.pathname === '/' &&
                <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} 
                onClick={onAdd} />}
        </header>
    )
}

// if we don't pass props these will be used
Header.defaultProps = {
    title: "Task Tracker",
}

// don't need to use this with typescript
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
const headingStyle = {
    color: 'blue'
}

export default Header
