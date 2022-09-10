import React from "react"
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiTitle, EuiSpacer } from '@elastic/eui'
import './Index.css';

function Index(){
    return(
        <div>
            <EuiFlexGroup>
                <EuiFlexItem>Content grid item</EuiFlexItem>
                <EuiFlexItem>
                    <p>Another content grid item</p>
                    <EuiSpacer />
                    <p>
                        Note how both of these are the same width and height despite having
                        different content?
                    </p>
                </EuiFlexItem>
            </EuiFlexGroup>
        </div>

    );

}

export default Index;