import React from 'react';

import {
    CardHeader,
    Card,
    Icon,
    List,
    StandardListItem,
    ValueState,
    Title,
    ProgressIndicator,
    TitleLevel,
    FlexBox,
    FlexBoxDirection
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import "@ui5/webcomponents-icons/dist/list.js";
import { useNavigate } from 'react-router-dom';

const ProgressList = () => {
    const navigate = useNavigate();
    const handleOnClickItem = (event) => {
        navigate("/detail");
    };

    return (
        <Card
            header={
                <CardHeader
                    titleText="Progress"
                    subtitleText="List"
                    avatar={<Icon name="list" />}
                />
            }
            style={{ width: "300px", ...spacing.sapUiContentPadding }}
            onClick={handleOnClickItem}>
            <List>
                <StandardListItem style={spacing.sapUiContentPadding}>Activity 1</StandardListItem >
                <StandardListItem additionalText="finished" additionalTextState={ValueState.Success} style={spacing.sapUiContentPadding}>
                    Activity 2
                </StandardListItem>
                <StandardListItem additionalText="failed" additionalTextState={ValueState.Error} style={spacing.sapUiContentPadding}>
                    Activity 3
                </StandardListItem>
                <StandardListItem additionalText="in progress" additionalTextState={ValueState.Warning} style={{ height: "80px" }}>
                    <Title level={TitleLevel.H5}>Activity 4</Title>
                    <ProgressIndicator value={89} valueState={ValueState.Success} />
                </StandardListItem>

                <StandardListItem additionalText="in progress" additionalTextState={ValueState.Warning} style={spacing.sapUiForceWidthAuto}>
                    <FlexBox direction={FlexBoxDirection.Column}>
                        <Title level={TitleLevel.H5}>Activity 5</Title>
                        <ProgressIndicator value={5} valueState={ValueState.Error} />
                    </FlexBox>
                </StandardListItem>

            </List>
        </Card>
    );
};

export default ProgressList;
