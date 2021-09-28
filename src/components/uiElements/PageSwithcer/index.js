import React from 'react'
import { useState } from 'react'
import './style.css'


export default function PageSwitcher({currentPage, setCurrentPage, itemsAmount, itemsPerPage, update}) {
  
    let pagesAmount;

    if (itemsAmount % itemsPerPage == 0){
        pagesAmount =  itemsAmount / itemsPerPage
    }else{
        pagesAmount = Math.floor(itemsAmount / itemsPerPage) + 1;
    }
    
    


    const changePage = (pageNumber) => {
      if(pageNumber < 1){
          setCurrentPage(1)
          update(0, itemsPerPage);
        
      }else if(pageNumber > pagesAmount){
          setCurrentPage(pagesAmount)
          update(itemsPerPage * (pagesAmount - 1), (itemsPerPage * (pagesAmount - 1)) + itemsPerPage)
      }else{
          setCurrentPage(pageNumber)
          update(itemsPerPage * (pageNumber - 1), (itemsPerPage * (pageNumber - 1)) + itemsPerPage)
      }
    }

    const pagesArray = Array.from(Array(pagesAmount).keys());
   

    return (
        <React.Fragment>
            <div className="pageSwitcherWrapper">
                <div className="pageSwitcherLeft button" onClick={() => changePage(currentPage - 1)}>
                <i className="fas fa-chevron-left"></i>

                </div>

              
                  {pagesArray.map((item, index) => (
                    <div key={index} onClick={() => changePage(item+1)} className={ currentPage === item+1 ? "pageSwitcherItem pageSwitcherItemActive button" : "pageSwitcherItem button"}>{item+1}</div>
                  ))}
               

                <div className="pageSwitcherRight button" onClick={() => changePage(currentPage + 1)}>
                <i className="fas fa-chevron-right"></i>

                </div>
            </div>
        </React.Fragment>
    )
}
