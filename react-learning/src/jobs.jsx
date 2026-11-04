function JobCard({ title ,company, location}) {
    function handleClick(jobTitle){
        alert(`You Selected${jobTitle}`);
    }
    const isSaved = true;
  return (<div className="job-card">
  <h2>{title} 
    </h2>
    <p>{company}</p>
    <p>{location}</p>
    <p>{isSaved ? "saved" :"savejobs"}</p>
<button onClick={() => handleClick(title)}>Apply Now</button>
  </div>
   
    
  );
}
export default JobCard