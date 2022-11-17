import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Nft from "../pages/NFT/Nft";

export default function Routing () {
    return (
        <>
        <Routes>
            <Route path = "/" element={ <Home /> } />
            <Route path="nft" element={ <Nft /> } />
        </Routes>
        </>
    )
}