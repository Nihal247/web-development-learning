function JobCard({ title ,company, location}) {
    function handleClick(){
        alert("You clicked Apply Now!");
    }
  return (<div className="job-card">
  <h2>{title} 
    </h2>
    <p>{company}</p>
    <p>{location}</p>
    <button onClick={handleClick}>Apply Now</button>
  </div>
   
    
  );
}
export default JobCard