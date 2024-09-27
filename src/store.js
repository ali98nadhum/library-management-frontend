import axios from "axios";
import { create } from "zustand";

export const useStore = create((set, get) => ({


    categoryData: [],
  fetchCategory: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/category");
      set({ categoryData: response.data.data });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  },
  
}));
