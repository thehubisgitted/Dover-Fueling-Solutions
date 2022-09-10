import './Index.css';
import '@elastic/eui/dist/eui_theme_dark.css';

import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiPanel, EuiText } from '@elastic/eui';
import { useState } from 'react';
import Video from '../../VideoPlayer'
import QRCode from "react-qr-code";
 
function Index(props) {

  return (
    <div>
    <EuiFlexGroup className="index">
      <EuiFlexItem>
        <EuiPanel paddingSize="xl">
            <Video />
        </EuiPanel>
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiPanel paddingSize="xl">
            <EuiText>
                <h1>
                    Hello, {props.name}
                </h1>
                <p>
                    How about having <strong>{props.product}</strong> this time? <br/><br/>
                    Hold your device over a QR Code!
                </p>
            </EuiText>
            <EuiSpacer />
              <QRCode value="hey, this qr code is customizable" />
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
    </div>
  );
}

export default Index;
