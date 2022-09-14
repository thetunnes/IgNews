import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from './index';


test('it renders correctly', async () => {
    render(<Async />)

    expect(await screen.findByText('button')).toBeInTheDocument()

    // await waitForElementToBeRemoved(screen.queryByText('button'))
    await waitFor(() => {
        return expect(screen.queryByText('button')).toBeInTheDocument()
    })
})
