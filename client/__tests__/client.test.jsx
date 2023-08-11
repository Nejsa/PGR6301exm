import * as React from "react";
import { createRoot } from "react-dom/client";
import FrontPage from "../frontPage.jsx";



describe('client test suite', () => {
    it('frontPage gets rendered', () => {
        const element = document.createElement("div")


        const root = createRoot(element)


        root.render(<FrontPage />)

        expect(element.querySelector("h1"))
        expect(element.innerHTML).toMatchSnapshot();
    });

});