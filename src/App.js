import "./App.scss";

import { useState, useEffect } from "react";

import { makeTree } from "./utils";
import { TreeNode } from "./components";
import { getAllCitizens } from "./utils/requests/citizens";

const App = () => {

    // const [citizens, setCitizens] = useState();

    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     getAllCitizens().then(({ data }) => {
    //         const nodes = makeTree(data).root.children;
    //         setCitizens(nodes);
    //         setIsLoading(false);
    //     })
    // }, [])


    // if (isLoading) return null;

    return (
        <div className="content">{
            <h1>TEST</h1>
            // citizens.map(node => {
            //     return (
            // <TreeNode node={node} key={node.value.name} />
            // )
            // })
        }
        </div>
    );
};

export default App;
