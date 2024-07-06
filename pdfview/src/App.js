import './App.css';
import QRCode from 'qrcode.react';


function App() {

  const link = 'http://62.72.59.146:3006/Seahorse_Press_Release_16_April_2024.pdf';
  const link2 = 'http://62.72.59.146:3006/A4_Ad_AWC.pdf';

  return (
    <div className="App">
      <h1>PDF Viewer</h1>
    <p>Click the link below to view the PDF:</p>
    {/* <a href="Swapnil-Chavan-Resume.pdf" target="_blank">View PDF</a> */}
    <a href="Seahorse_Press_Release_16_April_2024.pdf" target="_blank">View PDF</a>

    <h1>QR Code</h1>
      <QRCode size={400} value={link} />
      
    <h1>QR Code 2</h1>
      <QRCode size={400} value={link2} />
    </div>
  );
}

export default App;
