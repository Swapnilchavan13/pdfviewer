import './App.css';
import QRCode from 'qrcode.react';


function App() {

  const link = 'http://62.72.59.146:3006/Seahorse.pdf';
  return (
    <div className="App">
      <h1>PDF Viewer</h1>
    <p>Click the link below to view the PDF:</p>
    {/* <a href="Swapnil-Chavan-Resume.pdf" target="_blank">View PDF</a> */}
    <a href="Seahorse.pdf" target="_blank">View PDF</a>

    <h1>QR Code</h1>
      <QRCode value={link} />
    </div>
  );
}

export default App;
