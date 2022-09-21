import axios from "axios";
import React,{ useState} from 'react'
import MCard from "./MCard.js";
import CircularProgress from '@mui/material/CircularProgress';

import TextField from '@mui/material/TextField'
import { Button } from "@mui/material";
export default function Api(){
  const [name,set]=useState([]);
  const [img,setimg]=useState([]);
  const [summary,setsummary]=useState([]);
  const [query,setquery]=useState([]);
  const [channel,setchannel]=useState([]);
 
  
    async function getdata(){
      set([]);
      setimg([]);
      setsummary([]);
      setchannel([]);
      document.getElementsByClassName("progress")[0].style.display="flex";
      const res=await axios.get(`https://api.tvmaze.com/search/shows?q='${query}'`);
      res.data.map((val,i)=>{
    
      
       if(val.show.image!=null)
       {

        setimg(img=>[...img,val.show.image.original]);
        set(name=>[...name,val.show.name]);
  
     
      
      }
      if(val.show.summary!=null) setsummary(summary=>[...summary,val.show.summary]);
      else setsummary(summary=>[...summary," "]);
      if(val.show.network!=null&&val.show.network.name!=null) setchannel(channel=>[...channel,val.show.network.name]);
      else setchannel(channel=>[...channel," "]);

      
       
      })
      document.getElementsByClassName("progress")[0].style.display="none";
      
    }

   
return (  <><div className="mdiv-2">
{<TextField id="standard-basic" label="Show Name" variant="standard" value={query} onChange={(e)=>{setquery(e.target.value)
 

}}/>}   <Button variant="outlined" color="secondary" onClick={getdata}>click to get</Button></div>
<div className="progress"><CircularProgress/></div>

  <div className='mdiv'>
 {name.map((val,i)=>{

  return(
   
<MCard name={val}
img={img[i]}
summary={<>{summary[i].replace(/(<([^>]+)>)/gi,"").trim()}</>}
channel={channel[i]}
/>


  );

}

)}</div></>);
   
}