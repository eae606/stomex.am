import React, { useState } from 'react';
import { Flex, Rate } from 'antd';

const App = () => {
    const [value, setValue] = useState(4);

    return (
        <Flex gap="middle" vertical>
            <Rate onChange={setValue} value={value} />
        </Flex>
    );
};

export default App;
