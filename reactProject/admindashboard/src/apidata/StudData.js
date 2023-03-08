import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";

export const StudData = () =>{
    const [studData, setStudData] = useState([]);
    const [crntPage, setCrntPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(30);

    const indexOfLastPage = crntPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const newStudData = studData.slice(indexOfFirstPage,indexOfLastPage);
const[data, setData] = useState(newStudData);

    const getStuData = async() =>{
         const resp = await axios.get(`https://mitbio.edu.in/rgform2021.php?user_login=mitsbrs@admin`);         
         setStudData(resp.data);
    }
    useEffect( ()=>{
         getStuData();
    },[]);

    const getPage = (pgnum) =>{
        alert(pgnum)
        setCrntPage(pgnum);
    }
    console.log(newStudData)
    const searchStud = (e) => {
      // alert("search")
      // console.log("__________Search___________");      
      const values = e.target.value;      
      let search = values.toLowerCase();
      console.log(values.length);
      if(values.length >= 1 ){
        const respData = studData.filter( (items)=> 
          items.first_name.toLowerCase().includes(search) 
          || items.last_name.toLowerCase().includes(search)
          || items.email.toLowerCase().includes(search)
        );
        setStudData(respData);
      }else{
        // fetch data if the input field is blank
        // alert(0)
        getStuData();
      }               
    }

    return(<>
<div classNameName="container">
  <div className="row">
    <div className="col-sm-5 text-center">
      <div className="form-group">      
        <input type="text" className="form-control" onChange={searchStud} id="search" aria-describedby="searchHelp" placeholder="Search..." />      
      </div>
    </div>
  </div>    
</div>
<table className="table table-dark table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Order Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Cast</th>
      <th>DOB</th>
      <th>Category</th>
      <th>Student Email</th> 
      <th>Contact No.</th>     
      <th>Course</th> 
      <th>Entrace Exam</th>     
      <th>Need Hostel</th>      
      <th>Address</th>
      <th>City</th>
      <th>Pincode</th>
      <th>State</th>
      <th>Nationality</th>      
      <th>Payment Status</th>      
    </tr>
  </thead>
  <tbody>   
    {newStudData.map( (items)=>{
        return(
        <tr>
            <th scope="row">{items.id}</th>
            <td>{items.order_id}</td>
            <td> {items.first_name} </td>
            <td>{items.last_name	}</td>
            <td>{items.cast	}</td>
            <td>{items.dob}</td>
            <td>{items.category	}</td>            
            <td>{items.email}</td>
            <td>{items.phone}</td>
            <td>{items.course}</td>
            <td>
              {!items.entrace_exam? " " : items.entrace_exam+" \," }  
              {!items.entrace_exam_jee? " " : items.entrace_exam_jee+" \," }  
              {!items.entrance_exams_cet? " " : items.entrance_exams_cet+" \,"} 
              {!items.entrance_exams_gate? " " : items.entrance_exams_gate+" \,"} 
              {!items.entrance_exams_net? " " : items.entrance_exams_net+" \,"}  
              {!items.entrance_exams_pera? " " : items.entrance_exams_pera} 
            </td>
            <td>{items.need_hostel}</td>
            <td>{items.address}</td>
            <td>{items.city}</td>
            <td>{items.pincode}</td>
            <td>{items.state}</td>
            <td>{items.nationality}</td>                        
            <td>{!items.paymentStatus? "Pending" : items.paymentStatus }</td> 
            {/* <td><a href={"https://mitbio.edu.in/registrationforms/"+items.id+"_"+items.first_name+"_"+items.last_name+"_ApplicationForm.pdf"} download tager="_BLANK">download</a></td>            */}
        </tr>           
        )
    }) }   
    
  </tbody>
</table>
<Pagination postPerPage={postsPerPage} totalPosts={studData.length}  getPage={getPage} />
    </>);
}