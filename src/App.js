import "./App.scss";

import { makeTree } from "./utils/makeTree/makeTree";

import { TreeNode } from "./components";

const citienz = [
    {
        id: 0,
        name: "Анна",
        city_id: 1,
        groups: [
            {
                type: "city",
                name: "Москва г.",
            },
            {
                type: "district",
                name: "Пресненский р-н",
            },
            {
                type: "street",
                name: "Гашека ул.",
            },
        ],
    },
    {
        id: 1,
        name: "Степан",
        city_id: 1,
        groups: [
            {
                type: "city",
                name: "Москва г.",
            },
            {
                type: "district",
                name: "Пресненский р-н",
            },
            {
                type: "street",
                name: "Рочдельская ул.",
            },
        ],
    },
];

const App = () => {
    const nodes = makeTree(citienz).root.children;

    return (
        <div className="content">{
            nodes.map(node => {
                return (
                    <TreeNode node={node} />
                )
            })
        }

        </div>
    );
};

export default App;
