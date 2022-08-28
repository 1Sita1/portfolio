import { render, screen } from '@testing-library/react'
import TestRenderer from 'react-test-renderer'
import Main from "../Main"

describe("Main tests", () => {
    it("renders correctly", () => {
        const component = TestRenderer.create(
            <Main />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})