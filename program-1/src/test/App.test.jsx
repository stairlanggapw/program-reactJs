import { describe, expect, test } from "vitest";
import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";


describe("App Unit Testing", () => {
    test("make sure bahwa heading bahwa itu nilainya Stefanus Airlangga", () => {
        render(<App/>);
        const webTitle = screen.getByTestId("web__title");
        expect(webTitle).toHaveTextContent(/^Stefanus Airlangga$/);
    });

    test("button counter harus 0 + 1 = 1", () => {
        render(<App/>);
        const buttonCounter = screen.getByTestId("button__counter");
        fireEvent.click(buttonCounter);
        expect(buttonCounter.textContent).toBe("1");
    });


    test("button minus harus 0 - 1 = 1", () => {
        render(<App/>);
        const buttonMinus =screen.getByTestId("button__minus")
        fireEvent.click(buttonMinus);
        expect(buttonMinus.textContent).toBe("-1");
    })
})