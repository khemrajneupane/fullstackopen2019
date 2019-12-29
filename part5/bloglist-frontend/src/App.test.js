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
afterEach(cleanup);

describe('<App />',()=>{ 

test("No user logged, no rendered blogs", async () => {
    const component = render(
        <App />
    );
    
try{
    await waitForElement(() => {
        return component.getByText("Login");
    });
    expect(component.container).not.toHaveTextContent("Gary Vaynerchuk");
    expect(component.container).toHaveTextContent("Login to application");

}catch(e){
    console.log(e)
}
});


test("User logged, rendered blogs",  async() => {

      const user = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…YyN30._FjLDJkSt6IbZ0bsmCQP0GPM5bY159z95pupCx9YyzA", 
        username: "user", 
        name: "user"
        };

        window.localStorage.setItem('loggedUser', JSON.stringify(user))
        let component = render(<App />);
        await waitForElement(
            () => component.container.querySelector('.userbloginfo')
        )
        const rendering = component.container.querySelector('.userbloginfo')
        expect(rendering).toHaveTextContent(`${user.username} is logged in`)
});

})
