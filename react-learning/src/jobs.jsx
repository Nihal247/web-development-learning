
function JobCard({ id,title ,company, location ,savedJobs, setSavedJobs}) {
    function handleClick(jobTitle){
        alert(`You Selected${jobTitle}`);
    }
const isSaved = savedJobs.includes(id);
function toggleSave(){
  if(isSaved){
setSavedJobs(savedJobs.filter(jobId=> jobId!==id))
  }
  else{
setSavedJobs([...savedJobs,id])
  }
}

  return (<div className="job-card">
  <h2>{title} 
    </h2>
    <p>{company}</p>
    <p>{location}</p>
    <p>{isSaved ? "Saved" :"Save Jobs"}</p>

<button onClick={() => handleClick(title)}>Apply Now</button>
<button onClick={toggleSave}>{isSaved?"Unsave Job":"Save Job"}</button>
  </div>
   
    
  );
}
export default JobCard