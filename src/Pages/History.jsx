import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPIs'; 

function History() {
  const [resume, setResume] = useState([]);

  const getHistory = async () => {
    try {
      const response = await getHistoryAPI();
      setResume(response.data || []); // ✅ ensure array
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  const deleteHistoryItem = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resume?")) return;

    try {
      await deleteHistoryAPI(id);
      alert("Deleted...");
      getHistory(); 
    } catch (err) {
      console.error("Error deleting history:", err);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Download Resume Details</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {resume.length > 0 ? (
          resume.map((item) => (
            <div key={item.id} style={{ width: 350 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <span>Reviewed at: {item.formattedDateTime}</span>
                <span style={{ cursor: 'pointer' }} onClick={() => deleteHistoryItem(item.id)}>
                  <MdDelete color="red" />
                </span>
              </Stack>

              <Paper style={{ marginTop: '10px' }}>
                <img src={item.imgUrl} alt="resume preview" style={{ width: '100%' }} />
              </Paper>
            </div>
          ))
        ) : (
          <p>History not available...</p>
        )}
      </div>
    </div>
  );
}

export default History;
