import './Index.css';
import '@elastic/eui/dist/eui_theme_dark.css';

import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiPanel, EuiText } from '@elastic/eui';
import { useState } from 'react';
import Video from '../../VideoPlayer';
import QRCode from "react-qr-code";
import users from "../../test/test";
 
function getRandomUser(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Index(props) {
  const user = users[getRandomUser(0,5)]

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
                    Hello, {user.name}
                </h1>
                <p>
                    How about having <strong>{user.video}</strong> this time? <br/><br/>
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
