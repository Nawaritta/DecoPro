import React from 'react'

const Button = ({ dest, title }) => {
    return (
        <a href={dest} className='p-2 rounded-full font-semibold text-lg text-white bg-orange-400 hover:bg-white hover:text-orange-300 cursor-pointer'>{title}</a>
    )
}

export default Button