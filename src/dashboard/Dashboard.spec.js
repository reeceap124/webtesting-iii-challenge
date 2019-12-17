import React from 'react';
import {render, getByText, fireEvent} from '@testing-library/react';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display'

test('Dashboard displays', ()=> {
    const {getByText}=render(<Dashboard/>)
    const closeBtn = getByText(/close gate/i)
    const lockBtn = getByText(/lock gate/i)
    expect(lockBtn.disabled).toBeTruthy()
    fireEvent.click(closeBtn)
    getByText(/open gate/i) //fire event works in dashboard but not controls
    expect(lockBtn.disabled).toBeFalsy()
    fireEvent.click(lockBtn)
    getByText(/unlock gate/i)
    expect(closeBtn.disabled).toBeTruthy()
    fireEvent.click(lockBtn)



})