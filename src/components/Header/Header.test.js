import {render, screen, cleanup} from "@testing-library/react";
import React from 'react'
import renderer from 'react-test-renderer'
import {BrowserRouter} from "react-router-dom"
import Header from "./Header";

afterEach (() => {
    cleanup()
}); 

test('should render Header component',()=>{
    render(
        //Utilise BrowerRouter pour enable useNavigate() hook
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );
    const HeaderElement = screen.getByTestId('Header-1');
    expect(HeaderElement).toBeInTheDocument();
    expect(HeaderElement).toHaveTextContent('Accueil','Promo')
})

test('maches snapshot', ()=> {
    const telephone = '0642888868';
    const city = 'Aubervilliers';
    const tree = renderer.create(
        <BrowserRouter>
            <Header tel= {telephone} city = {city}/>
        </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})