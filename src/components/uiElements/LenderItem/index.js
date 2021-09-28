import React from 'react'
import './style.css'

export default function LenderItem({item}) {
    console.log('hrello')
    return (
        <div className="lenderItemLine">
            <div className="lenderItemLineWrapper">
                <div className="lenderItemLineLeft">
                    <div className="lenderItemLineIcon icon">
                    
                    </div>

                    <div className="lenderItemLineName">
                        {item.name}
                    </div>


                    <div className="lenderItemLineUsername">
                        {item.username}
                    
                    </div>

                    </div>

                    <div className="lenderItemLineRight">

                    <div className="lenderItemLinePercent">
                    {item.percent}
                    </div>

                    <div className="lenderItemLineValue">
                   
                    </div>

                
                    </div>
                </div>
        </div>
    )
}
