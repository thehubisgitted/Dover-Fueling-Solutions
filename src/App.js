//import logo from './logo.svg';
import './App.css';
import '@elastic/eui/dist/eui_theme_dark.css';
import QRCode from "react-qr-code";

import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui';
function App() {
  return (
    <><EuiFlexGroup>
      <EuiFlexItem>Content grid item</EuiFlexItem>
      <EuiFlexItem>
        <p>Hello</p>

        <EuiSpacer />
        <p>
          Note how both of these are the same width and height despite having
          different content?
        </p>
        <EuiSpacer />
        <QRCode value="hey" />
      </EuiFlexItem>
    </EuiFlexGroup></>
  );
}

export default App;
