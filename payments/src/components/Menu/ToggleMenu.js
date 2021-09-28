import React, { useState } from 'react'
import Hamburger from 'hamburger-react';

export const ToggleMenu = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="btn-menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    )
}
