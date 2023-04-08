import "./Node.scss";

export const Node = ({ value }) => {
    return (
        <div className="node">
            <h2 className="field__value">{value.name}</h2>
        </div>
    );
};

