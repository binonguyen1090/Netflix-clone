import React from "react";
import { useContent } from "../hooks";
const Browser = () => {
    const {series} = useContent('series')
    const {films} = useContent('films')
    console.log(films)
    return(
       <p>From Browser</p>
    )
}
export default Browser