import React from 'react';
import Element from './Element'

const serverStartStreamingUrl = "http://localhost:4000/events";
const serverStopStreamingUrl = "http://localhost:4000/stop-events";

let eventSource;
function App() {
  const [data,setData] = React.useState();

  const startStream = React.useCallback(()=>{
    eventSource = new  EventSource(serverStartStreamingUrl);
    eventSource.onmessage = res=>{
      setData(JSON.parse(res.data))
    };
  },[]);

  React.useEffect(()=>{
    startStream();
    return ()=>{
      eventSource.close();
    };
  },[startStream]);

  const stopStreamOnServer =  React.useCallback(()=>{
   fetch(serverStopStreamingUrl);
  },[]);


  return (
   <div style={{"margin":'100px'}}> 
        <h2> Realtime Streaming of Values  </h2>
        <Element key={Math.random()} data={data}/>
        <button onClick={()=>startStream()}> Start Streaming </button> <br/>
        <button onClick={()=> eventSource.close()}> Stop Streaming </button> <br/>
        <button onClick={()=> stopStreamOnServer()}> Stop Streaming From Server </button>
   </div>
  );
}

export default React.memo(App);


