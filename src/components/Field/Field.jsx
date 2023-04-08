import "./Field.scss";

export const Field = ({ value }) => {
    return (
        <div className="field">
            <h2 className="field__value">{value}</h2>
        </div>
    );
};
