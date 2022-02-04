import React from 'react'

export interface HeaderProps{
    title: string,
    color?: string
}

const Header = (props: HeaderProps) => {
    return (
        <h1 style={{color: props.color ? props.color : "black" }}>
            {props.title}
        </h1>
    )
}

export default Header
