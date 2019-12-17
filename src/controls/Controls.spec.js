import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';

test('control lock button', () => {
    const locked = false
    const closed = false
    const {getByText, rerender} = render(<Controls/>)
    const lockButton = getByText(/lock gate/i)
    const closeButton = getByText(/close gate/i)
    expect(lockButton.disabled).toBeTruthy();
    fireEvent.click(closeButton)

    rerender(<Controls locked={locked} closed={!closed}/>)
    getByText(/open gate/i)
    expect(lockButton.disabled).toBeFalsy();
    fireEvent.click(lockButton)

    rerender(<Controls locked={!locked} closed={!closed}/>)
    getByText(/unlock gate/i)
    expect(closeButton.disabled).toBeTruthy()
    fireEvent.click(lockButton)
}) 
