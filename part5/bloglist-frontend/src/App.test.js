import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, waitForElement, cleanup } from "@testing-library/react";
import App from "./App";

jest.mock("./services/blogs.js")

const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (/Warning.*not wrapped in act/.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});


describe('<App />',()=>{ 

test("No user logged, no rendered blogs", async () => {
    
    const component = render(
        <App />
    );
    
try{
    await waitForElement(() => {
        return component.getByText("submit");
    });
    expect(component.container).not.toHaveTextContent("Gary Vaynerchuk");
    expect(component.container).toHaveTextContent("Login to application");

}catch(e){
    console.log(e)
}
});


test("User logged, rendered blogs",  async() => {

      const user = {
            username: "user",
            token:"khem",
            name:"user"
        };

        localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
        let component = render(<App />);

        await waitForElement(() => {
            return component.getByTestId("invisible")
        })
        
        const rendering = component.getByTestId("invisible")
        expect(rendering).toHaveTextContent("blogs")
});

})
afterEach(cleanup);