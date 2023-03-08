import React, { useState } from "react";

export const Pagination = ({postPerPage,totalPosts,getPage}) =>{    
    const pageNumber = [];
    const [lk , setLk] = useState(1);
    for(let l=0;l <= Math.ceil(totalPosts/postPerPage); l++){
        pageNumber.push(l); 
    }   
    return(<>
        <ul className="pagination pagination-sm">
            
            {pageNumber.map( (pgnum,i)=>{                 
                return ( <>                                                      
                    {pgnum === 0  ? 
                        <li className="page-item disabled" onClick={ ()=> getPage(pgnum+1) } > <a className="page-link" href="#." tabindex="-1">{pgnum+1}</a> </li>
                        :  
                        <li key={i} onClick={ ()=> getPage(pgnum+1) } className="page-item"><a className="page-link" href="#.">{pgnum}</a></li>  
                    }                    
                
                </>)             
                
            }) }            
        </ul>            
    </>)
}