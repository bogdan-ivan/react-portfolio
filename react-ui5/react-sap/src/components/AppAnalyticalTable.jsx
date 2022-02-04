import React from 'react';

import {
    CardHeader,
    Card,
    Icon,
    AnalyticalTable
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';

import "@ui5/webcomponents-icons/dist/table-view.js";

const tableData = new Array(500).fill(null).map((_, index) => {
    return {
        name: `name${index}`,
        age: Math.floor(Math.random() * 100),
        friend: {
            name: `friend.Name${index}`,
            age: Math.floor(Math.random() * 100)
        }
    };
});

const tableColumns = [
    {
        Header: "Name",
        accessor: "name" // String-based value accessors!
    },
    {
        Header: "Age",
        accessor: "age"
    },
    {
        Header: "Friend Name",
        accessor: "friend.name"
    },
    {
        Header: "Friend Age",
        accessor: "friend.age"
    }
];

const AppAnalyticalTable = () => {
    return (
        <Card
            header={
                <CardHeader
                    titleText="Analytical Table"
                    avatar={<Icon name="table-view" />}
                />
            }
            style={{ maxWidth: "500px", ...spacing.sapUiContentPadding }}>
            <AnalyticalTable           
                withRowHighlight={true}
                data={tableData}
                columns={tableColumns}
                filterable={true}
                rowHeight={50}
                visibleRows={8} />
        </Card>
    );
};

export default AppAnalyticalTable;
