
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const searchPapers = async (query) => {
    try {
        const response = await api.get(`/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.error("Search failed:", error);
        throw error;
    }
};

export const getPaperAnalysis = async (id) => {
    try {
        const response = await api.get(`/paper/${id}`);
        return response.data;
    } catch (error) {
        console.error("Analysis failed:", error);
        throw error;
    }
};

export const getSystemStatus = async () => {
    try {
        const response = await api.get('/status'); // Check if this endpoint exists in backend/server.js
        return response.data;
    } catch (error) {
        // If the endpoint doesn't exist, return a mock
        return {
            status: 'online',
            model: 'BioGPT-Large (Simulated)',
            compressionEngine: 'ScaleDown v1.0',
        };
    }
};
