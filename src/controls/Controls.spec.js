import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';

test('control lock button', () => {
    const {getByText} = render(<Controls locked={false} closed={false}/>)
    const lockButton = getByText(/lock gate/i)
    fireEvent.click(lockButton);
    getByText(/unlock gate/i)
}) 