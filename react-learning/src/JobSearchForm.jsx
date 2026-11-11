import { useState } from "react";
function JobSearch(){
const [jobTitle ,setJobTitle]=useState("");
const [location, setLocation]=useState("");

return(<>
<input
value={jobTitle}
onChange={(event)=>setJobTitle(event.target.value)}
placeholder="Enter job title"
/>
<input
value={location}
onChange={(event)=>setLocation(event.target.value)}
placeholder="Enter location"

/>
<h2>{jobTitle}</h2>
<p>{location}</p>
</>)}
export default JobSearch;