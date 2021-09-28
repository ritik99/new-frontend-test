import React, { useEffect } from 'react'
import { useState } from 'react'
import './style.css'

export default function DropdownMenu({dropdownData, dropdownSelected, setDropdownSelected}) {

    const [showMenu, setShowMenu] = useState(false);

    

    const selectItem = (item) => {
        console.log(item)
        setDropdownSelected(item);
        setShowMenu(false);
    }

    return (
        <React.Fragment>
            <div className="customDropdownWrapper">
            <div className={showMenu ? "customDropdown customDropdownOpened" : "customDropdown"}>
                <div onClick={() => setShowMenu(prev => !prev)} className="customDropdownLine">
                
                    {dropdownSelected.value}
                    <div className={showMenu ? "customDropdownLineArrow customDropdownLineArrowOpened" : "customDropdownLineArrow"}></div>
                </div>
             

                {dropdownData.map((item, index) => (

                

                    <div key={index} className="customDropdownOptionLine button" onClick={() => {selectItem(item)}}>
                        {item.value}
                    </div>

                ))}
              
              </div>
            </div>
            
        </React.Fragment>
    )
}
