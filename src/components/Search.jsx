import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import axios from "axios";
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';



function Search() {
      const [cityname, setcityname] = useState('')
      const [cityResults, setcityResults] = useState()
      const [loading, setloading] = useState(false)
      const [dataStatus, setdataStatus] = useState(false)
      const [dataError, setdataError] = useState(false)
      const searchCityHandler = (e) => {
            setcityname(e.target.value)
      }

      const onSubmithandler = () => {
            setloading(true)
            const options = {
                  method: 'GET',
                  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                  params: { q: cityname },
                  headers: {
                        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                        'x-rapidapi-key': '0ed68a8472msh7f2ecede5b592dap16ebdcjsnb5a75be801e3'
                  }
            };
            axios.request(options).then((response) => {
                  setdataError(false)
                  setcityResults(response.data)
                  setdataStatus(true)
                  setloading(false)
            }).catch((error) => {
                  setloading(false)
                  setdataError(true)
            });
      }

      return (
            <div className="Search">
                  <Box m={1} pt={1}>
                        <TextField onChange={searchCityHandler} id="outlined-basic" label="Search city" variant="outlined" />
                        <Button size="large" onClick={onSubmithandler} variant="contained" color="primary">
                              Search
                        </Button>
                  </Box>
                  <div>
                        {loading && <LinearProgress />}
                         <Paper  variant="outlined" elevation={3} />
                        {dataStatus && !dataError && <div>
                              <h1>{cityResults.current.feelslike_c} &#8451; ( {cityResults.current.condition.text} )</h1>
                              <h6>{cityResults.location.name} ,{cityResults.location.region}, {cityResults.location.country}</h6>
                                 </div> }

                        {dataError && <h6>Data not found</h6>}
                <Paper />
                  </div>
            </div >
      )
}

export default Search
