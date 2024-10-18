  import React from "react"
 
 function Header ({pageName, pageNumber} :{pageName: string, pageNumber: number}){

    
    return(
        <div className="  p-2 bg-white text-black text-center">
          This is {pageName} and this is page No. {pageNumber}
      
        </div>

    )
 }
 export default Header