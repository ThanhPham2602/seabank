import { Switch } from "antd";
import {useHandleStatusChange} from "./status.jsx" 

// function StatusBar() {
//     const isOnline = useOnlineStatus();
//     return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
//   }
  
  function SaveButton() {
    const isOnline = useHandleStatusChange();
  
    function handleChange() {
      console.log('✅ Progress saved');
    }
  
    return (
      <Switch> disabled={!isOnline} onClick={handleChange}
      </Switch>
    );
  }
  
  export default function App() {
    return (
      <>
        <SaveButton />
        {/* <StatusBar /> */}
      </>
    );
//   }