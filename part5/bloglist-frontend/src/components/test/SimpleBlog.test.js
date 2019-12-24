import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

const blog ={
    title:'AnythingAnymean',
    author:'Khem Neupane',
    url:'www.anythinganymean.com',
    likes:100
}
test('component renders the title, author and amount of likes ', () => {

  const component = render(
    <SimpleBlog blog={blog} />
  )
  expect(component.container).toHaveTextContent(`${blog.title} ${blog.author} ${blog.likes}`);
  expect(component.container).toHaveTextContent(`blog has ${blog.likes} likes`);
})

test('like button of a component is pressed twice when onClick function called twice', () => {
const mocFunction= jest.fn()
    const component = render(
        <SimpleBlog blog={blog} onClick={mocFunction} />
    )
    fireEvent.click(component.getByTestId("addLikes"));
    fireEvent.click(component.getByTestId("addLikes"));
    expect(mocFunction.mock.calls.length).toBe(2);
  })