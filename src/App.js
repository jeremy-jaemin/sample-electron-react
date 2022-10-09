const { 
  SEND_HELLO_PING
} = require("./constant");

function App() {
  const { ipcRenderer } = window.require("electron");
  const printHello = () => {
    ipcRenderer.send(SEND_HELLO_PING, "send");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Electron-React World!!</h1>
        <button onClick={printHello}>Click it</button>
      </header>
    </div>
  );
}
export default App;
