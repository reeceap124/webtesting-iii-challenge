import React from 'react';
import {render} from '@testing-library/react';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display'

test('Dashboard displays', ()=> {
    render(<Dashboard/>)
})