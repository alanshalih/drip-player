import "./app.css";
import App from "./App.svelte";
import "./index.css"; 
const app = new App({
  target: document.getElementById("app"),
  props : {
    config : {
      height: '390',
      width: '640',
      videoId: 'qBeAUyuctHM',
      playerVars: {
        'controls': 0
      }
    }
  }
});

 
export default app.player;
