import { useState } from 'react'

export const Menu = ({title, selected, children}) => {

    const [active, setActive] = useState(false)

    return (
        <section onMouseOver={() => {setActive(true)}} onMouseOut={() => {setActive(false)}} className={selected ? 'selected' : ''}>
            {title}
            {active &&
                <div className='dropDown'>{children}</div>
            }
        </section>
    )
}

export const DropDownItem = ({title}) => {
    return (
        <div className='item'>{title}</div>
    )
}