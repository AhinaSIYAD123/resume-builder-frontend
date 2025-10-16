import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPIs';


function History() {
  const [resume, setResume] = useState([]);

  const getHistory = async () => {
    try {
      const response = await getHistoryAPI();
      console.log(response);
      setResume(response); 
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHistory = async (id) => {
    try {
      const response = await deleteHistoryAPI(id);
      console.log(response);
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
    <div>
      <h1>Download Resume Details</h1>
      <div className="row">
        {resume.length > 0 ? (
          resume.map((item) => (
            <div className="col" key={item.id} style={{ marginBottom: '15px' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <span>Review at: {item.formattedDateTime}</span>
                <span style={{ cursor: 'pointer' }} onClick={() => deleteHistory(item.id)}>
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
