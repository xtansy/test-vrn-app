import "./Node.scss";

export const Node = ({ value, clazz }) => {
    const classname = clazz ? `node ${clazz}` : "node";
    return (
        <div className={classname}>
            <h2>{value.name}</h2>
        </div>
    );
};
