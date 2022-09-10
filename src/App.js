import logo from './logo.svg';
import './App.css';
import '@elastic/eui/dist/eui_theme_dark.css';

import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui';

function App() {

  return (
    <><EuiFlexGroup>
      <EuiFlexItem>Content grid item</EuiFlexItem>
      <EuiFlexItem>
        <p>Another content grid item</p>
        <EuiSpacer />
        <p>
          Note how both of these are the same width and height despite having
          different content?
        </p>
      </EuiFlexItem>
    </EuiFlexGroup></>
  );
}

export default App;
