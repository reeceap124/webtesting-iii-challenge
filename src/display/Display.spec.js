// Test away!
import React from 'react';
import {render} from '@testing-library/react';

import Display from './Display';

test('Closed displays correctly', () => {
    const locked = false,
        closed = false;

    const {getByText, rerender} = render(<Display/>)
        getByText(/unlocked/i)
        getByText(/open/i)

        rerender(<Display locked={locked} closed={!closed}/>)
        getByText(/unlocked/i)
        getByText(/closed/i)

        rerender(<Display locked={!locked} closed={!closed}/>)
        getByText(/locked/i)
        getByText(/closed/i)
}) 
