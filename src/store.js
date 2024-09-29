import axios from "axios";
import { create } from "zustand";

export const useStore = create((set, get) => ({


    categoryData: [],
    fetchCategory: async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/book")
        set({ categoryData: res.data.data });
      } catch (error) {
        console.log(error.message);
        
      }
    }
  
}));
