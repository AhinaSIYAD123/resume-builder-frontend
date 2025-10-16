import commonAPI from "./commonAPI";
import { serverURL } from "./severURL";

// Add resume...steps component call add resume
export const addResumeAPI = async (resumeData) => {
  return await commonAPI("POST", `${serverURL}/resumes`, resumeData);
};

// Post
export const addHistoryAPI = async (resumeData) => {
  return await commonAPI("POST", `${serverURL}/history`, resumeData);
};

// Get
export const getHistoryAPI = async () => {
  return await commonAPI("GET", `${serverURL}/history`, {});
};

// Delete 
export const deleteHistoryAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/history/${id}`, {});
};

// Get particular resume
export const getResumeHistoryAPI = async (id) => {
  return await commonAPI("GET", `${serverURL}/history/${id}`, {});
};

//update resume
export const updateResumeAPI = async (id, editData) => {
  return await commonAPI("PUT", `${serverURL}/resumes/${id}`, editData); // ✅ use id
};



