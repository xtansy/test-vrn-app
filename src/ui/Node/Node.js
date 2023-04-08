import "./Node.scss";

export const Node = ({ value, clazz }) => {
    return (
        <div className={`node ${clazz}`}>
            <h2 >{value.name}</h2>
        </div>
    );
};

