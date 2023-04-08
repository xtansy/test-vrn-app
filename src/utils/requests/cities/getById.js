import api from "../instance";

export const getById = async (id) => {
    const { data } = await api.get(`/cities/${id}`);
    return data;
};
