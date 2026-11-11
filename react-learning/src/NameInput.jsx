import { useState } from "react";
function NameInput(){
const [name ,setName]=useState("");
return(<>
<input type="text"
value={name}
onChange={(event)=>setName(event.target.value)}
/>
<h2>{name}</h2>
</>)}
export default NameInput