# RealTime-Data-Stream-Node-React
Realtime data streaming concept In Node js and React js
---------------------------------------------------------------------------------------------------------------------


Server Application: 

Developed in Node Js and has 2 routes:
1 -> To Start Streaming : Route will start streaming data as events. Content  type of response is text/event-stream
Response Header :
{
            Connection : "Keep-Alive",
            "Content-type":"text/event-stream",
            "Access-Control-Allow-Origin":"*"
}
endpoint :  http://localhost:4000/events


2-> To Stop Streaming: Route will stop the streaming from server. 
Response Header : {
            Connection : "Keep-Alive",
            "Content-type":"application/json",
            "Access-Control-Allow-Origin":"*"
        }
 endpoint :  http://localhost:4000/stop-events
 
 
 ==========================================================================================================================
 
 Client Application: 
 
 Client App is developed in React Js using functional components and React hooks.
 To  listen Data in events from Event listener EventSource is used.
 Reference : https://developer.mozilla.org/en-US/docs/Web/API/EventSource
 
 Application is enabled with 3 actions on events:
 1-> Start Streaming : Triggering this action will start streaming from server to client.
 2-> Stop Streaming: Action will stop streaming on client side. Basically it will close event listener on client. (Server is still sending data).
 3-> Stop Streaming from server: This will stop streaming from server.
 
 
==================================================================================================================
To Run Application : 

Run "npm install" in Client and Server Folder.
Default port for Server will be "4000"  and for client  "3000"

Run "nodemon index.js" in server folder
Run "npm start" in client

Thanks
