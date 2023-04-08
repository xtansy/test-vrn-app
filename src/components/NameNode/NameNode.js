import { useState } from "react";

import { Node, Tooltip } from "../../ui";

import { getById } from "../../utils/requests/cities";

export const NameNode = ({ value }) => {

    const [info, setInfo] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const onMouseEnterCallback = () => {
        getById(value.cityId).then(({ data }) => {
            const str = `${data.name}, ${data.data} жителей`;
            setInfo(str);
            setIsLoading(false);
        });
    }

    return (
        <Tooltip text={info} isLoading={isLoading} onMouseEnterCallback={onMouseEnterCallback}>
            <Node clazz="node_name" value={value} />
        </Tooltip>
    );
};

