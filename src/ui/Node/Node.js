import "./Node.scss";

import { Tooltip } from "../";

export const Node = ({ value, isWithTooltip }) => {

    if (isWithTooltip) {
        return (
            <Tooltip text="ТУЛТИП">
                <div className="node">
                    <h2 className="field__value">{value.name}</h2>
                </div>
            </Tooltip>
        )
    }
    return (
        <div className="node">
            <h2 className="field__value">{value.name}</h2>
        </div>
    );
};

