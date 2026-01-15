import React from "react";
import Present_block from "../Blocks/Present_block/Present_block"
import Cases from "../Blocks/Cases/Cases";
import Discuss from "../Blocks/Discuss/Discuss";

function Main_Page({ children, ...props }) {
    return (
        <>
            <Present_block />
            <Cases />
            <Discuss />
        </>
    );
}

export default Main_Page;