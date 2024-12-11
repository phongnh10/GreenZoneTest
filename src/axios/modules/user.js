import axiosInstance from "..";
 
export const loginApi = async (request) => {
    try {
        axiosInstance.post("/api/login", request)
    } catch (error) {
        
    }
  
}

