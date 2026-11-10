import { useState } from "react";
import './App.css'
import JobCard from "./jobs";
function App(){
  const [savedJobs, setSavedJobs] = useState([]);
 const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Kozhikode"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Cloud Systems",
    location: "Bengaluru"
  },
  {
    id: 3,
    title: "React Developer",
    company: "Digital Labs",
    location: "Kochi"
  },
  {
    id:4,
    title:" UI/UX Designer",
    company: "Creative Studio",
    location: "Chennai"
  }
];
  return(<>
  <h2>Saved Jobs: {savedJobs.length}</h2>

{jobs.map(job => (
  <JobCard key={job.id}id={job.id} title={job.title} company={job.company} location={job.location} savedJobs={savedJobs} setSavedJobs={setSavedJobs}/>
))
}</>)

}
export default App