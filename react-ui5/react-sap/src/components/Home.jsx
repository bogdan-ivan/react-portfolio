import React from 'react';

import {
    FlexBox,
    FlexBoxAlignItems,
    FlexBoxDirection,
    FlexBoxJustifyContent,
    Link,
    LinkDesign,
    ThemeProvider
} from '@ui5/webcomponents-react';

import AppAnalyticalTable from './AppAnalyticalTable';
import AppShellBar from './AppShellBar';
import ProgressList from './ProgressList';
import StockPrices from './StockPrices';
import { spacing } from '@ui5/webcomponents-react-base';
import MyCustomComponent from './MyCustomComponent';

const Home = () => {
    return (
        <>
            <FlexBox
                style={{ width: '100%', height: '50vh', ...spacing.sapUiContentPadding }}
                direction={FlexBoxDirection.Row}
                justifyContent={FlexBoxJustifyContent.Center}
                alignItems={FlexBoxAlignItems.Center}>
                <StockPrices />
                <ProgressList />
                <AppAnalyticalTable />
            </FlexBox>

            <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
                Getting Started with UI5 Web Component for React
            </Link>

            <MyCustomComponent />
        </>
    );
};

export default Home;
