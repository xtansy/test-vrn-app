import api from "../instance";

export const getAllCities = async () => {
    const { data } = await api.get("cities/all");
    return data;
};
