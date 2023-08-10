import {render, screen, cleanup} from "@testing-library/react";
import React from 'react'
import renderer from 'react-test-renderer'
import {BrowserRouter,useLocation} from "react-router-dom"
import Card from "./Card";

afterEach (() => {
    cleanup()
}); 

const alcools = [
    {
        "_id":"1",
        "AOC":" Margaux 2020",
        "description":"D'un rouge profond, le millésime 2020 possède une vraie richesse et une agréable tension qui caractérise les grand millésimes. Elégant et complexe, il s'agit d'un Margaux par excellence. Les tanins sont souples et intégrés, se fondant magnifiquement dans le vin jusqu'à la finale savoureuse. Déjà agréable à boire, il s'exprimera à son meilleur entre 5 et 20 ans, pour vieillir jusqu'à 20-30 ans. C'est un Margaux exceptionnel, pur et précis du Château Dauzac.","region":"Bordeaux ",
        "imageUrl":"https://stingray-app-mj5xt.ondigitalocean.app/images/chateau-dauzac-2020.png1679579875052.png",
        "prix":"52",
        "prix_offre":"43",
        "rating":4,"__v":0},
    {
        "_id":"2",
        "title":"CHÂTEAU MALARTIC LAGRAVIERE",
        "AOC":"PESSAC-LÉOGNAN 2019",
        "description":"小龙船红酒呈现了成熟的樱桃、黑莓味道；中等酒体，奇妙的水果味道，这款酒充分展现了其平衡性的魅力。 建议饮用前半小时开瓶，适合与红肉、芝士、烤鸭、乳鸽等中味型中餐菜肴搭配。 龙船庄(Chateau Beychevelle)位于波尔多左岸名村圣祖利安村。\nL'année 2019 a été dans l'ensemble sur cette région une année exceptionnelle -- Figaro (Note 94.5/100)",
        "region":"Grand Cru Classé",
        "imageUrl":"https://stingray-app-mj5xt.ondigitalocean.app/images/chateau-malartic.png1679244696426.png",
        "prix":"48",
        "prix_offre":"",
        "rating":5,"__v":0
    }
]

test('should render Card component',()=>{
    render(
        //Utilise BrowerRouter pour enable useHref() hook ou Link 
        <BrowserRouter>
            <Card alcools = {[...alcools]}/>
        </BrowserRouter>
    );
    const CardElement = screen.getByTestId('Card-1');
    expect(CardElement).toBeInTheDocument();
    expect(CardElement).toHaveTextContent(" Margaux 2020","CHÂTEAU MALARTIC LAGRAVIERE")
})