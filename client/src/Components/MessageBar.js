import React from 'react'
import { useAppcontext } from '../Context/context/appContext'
import { Alert, Snackbar } from '@mui/material';

export const MessageBar = () => {
  const { alertText, alertType, showAlert} = useAppcontext();
  return (
    <Snackbar open={showAlert} close={!showAlert} style ={{transform : "scale(1.3)", marginLeft :"1rem"}}>
        <Alert  severity={alertType} sx={{ width: '100%',}}>
            {alertText}
        </Alert>
    </Snackbar>
  )
}
