import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';

const CustomizedSCalendar = styled(StaticDateRangePicker)`
display: flex;
justify-content: center;
width: 450px;
height: 390px;
overflow: auto;
margin: auto;
position: absolute;
top: 0; left: 0; bottom: 0; right: 0;
z-index: 20;
background-color: white;
border: 1px solid gray;
@media(max-width: 520px) {
  width: 320px;
}
`;


export default function PastCalendar() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const dispatch = useDispatch()

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CustomizedSCalendar
      calendars={1}
        className='customCalendar'
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
          dispatch({ type: 'ADDTHIRDDATE', date: newValue[0] })
          dispatch({ type: 'ADDFOURTHDATE', date: newValue[1] })
          dispatch({ type: 'GETPASTPURCHASES' })
          dispatch({ type: 'GETPASTVIEWS' })
          dispatch({ type: 'GETPASTCLICKS' })
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}