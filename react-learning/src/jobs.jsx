import { useState } from "react";
function JobCard({ title ,company, location}) {
    function handleClick(jobTitle){
        alert(`You Selected${jobTitle}`);
    }
    const [isSaved,setIsSaved]=useState(false)
  return (<div className="job-card">
  <h2>{title} 
    </h2>
    <p>{company}</p>
    <p>{location}</p>
    <p>{isSaved ? "Saved" :"Save Jobs"}</p>
<button onClick={() => handleClick(title)}>Apply Now</button>
<button onClick={()=>setIsSaved(!isSaved)}>{isSaved ?"Unsave Job" :"Save Job"}</button>
  </div>
   
    
  );
}
export default JobCard