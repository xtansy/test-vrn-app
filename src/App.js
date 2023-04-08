import "./App.scss";

import { useEffect } from "react";

import { Field } from "./components";
import { makeTree } from "./utils/makeTree/makeTree";


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
]


const App = () => {

	const tree = makeTree(citienz);

	const printTree = (node, level = 0) => {

		const margin = level * 20;

		for (let i = 0; i < node.children.length; i++) {
			printTree(node.children[i], level + 1);
		}

		console.log("вызов");

		return <Field value={node.value} style={{ marginRight: `${margin}px` }} />
	}

	return (
		<div className="content">{

		}
			{
				printTree(tree.root)
			}
		</div>
	)
}

export default App;
