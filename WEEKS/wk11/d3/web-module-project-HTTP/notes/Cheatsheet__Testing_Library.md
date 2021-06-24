import { render, fireEvent, screen } from '@testing-library/react'

test('loads items eventually', async () \=> {

render(<Page />)

fireEvent.click(getByText('Load'))

const items \= await screen.findAllByText(/Item #\[0-9\]: /)

expect(items).toHaveLength(10)

})

**Difference from DOM Testing Library**

The queries returned from `render` in `React Testing Library` are the same as `DOM Testing Library` except they have the first argument bound to the document, so instead of `getByText(node, 'text')` you do `getByText('text')`
