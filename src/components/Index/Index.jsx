import './Index.css';
import '@elastic/eui/dist/eui_theme_dark.css';

import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiPanel, EuiText } from '@elastic/eui';
import { useState } from 'react';

 
function Index(props) {
  // const {name, setName} = useState('');
  return (
    <div>
    <EuiFlexGroup className="index">
      <EuiFlexItem>
        <EuiPanel paddingSize="xl">
            Hi
        </EuiPanel>
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiPanel paddingSize="xl">
            <EuiText>
                <h1>
                    Hello, {props.name}
                </h1>
                <p>
                    How about having <strong>{props.product}</strong> this time? <br/>
                    Hold your device over a QR Code!
                </p>
            </EuiText>
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
    </div>
  );
}

export default Index;
