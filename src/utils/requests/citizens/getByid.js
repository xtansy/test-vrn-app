import api from "../instance"

export const getById = async (id) => {
    const { data } = await api.get(`/citizens/${id}`);
    return data;
}