import api from "../instance";

export const getAllCitizens = async () => {
    const { data } = await api.get("citizens/all");
    return data;
};
