import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent,cleanup } from '@testing-library/react'
import Blog from '../Blog'
const blogs = [{
    
        title: "MyTitle",
        author: "Neupane Khem Raj",
        url: "https://www.linkedin.com/in/khemrajneupane/",
        likes: 99882221,
        user: {
            username: "user"
        }
    }];
   
    const thisUser = {username:"user"}
    const  thisUserName=thisUser.username
    afterEach(cleanup);
    
const mocFunction = jest.fn()
test("Verify that name and author of the blog post are shown by default",() => {
    blogs.map(m=>{
        const component = render(
            <Blog blogs={blogs} user={thisUserName} deleteList={mocFunction} />  
        );
 
        expect(component.container).toHaveTextContent(`${m.title}${m.author}`);
        expect(component.getByTestId("visible")).toBeVisible(); 


    })
 
});

test("Verify that when the blog post is clicked, the other information of the blog post becomes visible",() => {
    const mocFunction=jest.fn()
        const component = render(
            <Blog blogs={blogs} user={thisUserName} deleteList={mocFunction} />  
        );
 
        fireEvent.click(component.getByTestId("createItems"));
        expect(component.getByTestId("revisible")).toBeVisible();

        fireEvent.click(component.getByTestId("itemtitle"));
        expect(component.getByTestId("spanvisible")).toBeVisible();

        fireEvent.click(component.getByTestId("spanvisible"));
        expect(component.getByTestId("visible")).toBeVisible();
        
 
});

