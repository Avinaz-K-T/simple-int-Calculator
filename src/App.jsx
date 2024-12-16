
import './App.css'
import { Button, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

      const [ amount, setAmount] = useState('')
      const [ rate, setRate] = useState('')
      const [ year, setYear] = useState('')
      const [ interest, setInterest] = useState('')

      const [isInvalidPrinciple, setisInvalidprinciple] = useState(false)
      const [isInvalidRate, setisInvalidRate] = useState(false)
      const [isInvalidYear, setisInvalidYear] = useState(false)

      const validRangex=/^[0-9]*.?[0-9]+$/
      
  
      const validateInput=(e)=>{
        

        const {name,value} = e.target
        console.log(name,value);

        if(name == 'principle'){

          setAmount(value)

        }
        else if(name == 'rate'){
          setRate(value)
      }
      else{
        setYear(value)
      }

      if (validRangex.test(value) || value ==""){

        if(name=='principle'){
          setisInvalidprinciple(false)
        }
        else if(name=='rate'){
          setisInvalidRate(false)
          }
          else{
            setisInvalidYear(false)
            }
            }
            else {
              if(name =='principle'){
                setisInvalidprinciple(true)
                }
                else if(name =='rate'){
                  setisInvalidRate(true)
                  }
                  else{
                    setisInvalidYear(true)
                    }
                    }
                    }

    const handleCalculate=(e)=>{
      e.preventDefault()
      console.log("handle");

      if(amount && rate && year){
        
        setInterest((amount*rate*year)/100)

        }
        else{
          alert("Please fill all fields")
      
    }
  }

  const handleReset = () => {
    setAmount("")
    setRate("")
    setYear("")
    setisInvalidprinciple(false)
    setisInvalidRate(false)
    setisInvalidYear(false)
    setInterest(0)
    
  }
    


  return (
    <>
        <div className=' min-vh-100 w-100% d-flex justify-content-center   ' style={{backgroundColor:'black'}}>
        <div className= 'text-color text-dark bg-light rounded p-5 mt-5' style={{width:'750px',height:'650px'}}>
        <h1>Simple Interest Calculator</h1>
        <p>Calculate your simple interest easily</p>
        <div className='text-light bg-success rounded d-flex justify-content-center flex-column align-items-center' style={{height:'150px'}}>
            <h1 style={{fontSize:'40px'}}>₹ &nbsp;{interest}</h1>
            <h1 style={{fontSize:'30px'}}>Total simple interest</h1>


        </div>
        <div className='mt-5'>
        <TextField onChange={validateInput} value={amount || ""}  fullWidth label="Amount" name='principle' id="principle_amount" />
        { isInvalidPrinciple &&
                  <div className='fw-bold text-danger'>Invalid Principle Amount</div>

        }
        <TextField onChange={validateInput} value={rate || ""} className='mt-3' fullWidth label="Rate" name='rate' id="interest_rate" /> 
        { isInvalidRate &&
                  <div className='fw-bold text-danger'>Invalid Principle Amount</div>

        }
        <TextField onChange={validateInput} value={year || ""} className='mt-3' fullWidth label="Year" name='year' id="time_period" />
        { isInvalidYear &&
                  <div className='fw-bold text-danger'>Invalid Principle Amount</div>

        }
        </div>
        <div className='mt-3 d-flex justify-content-center flex-column align-items-center'>
        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handleCalculate} disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear} variant="contained">CALCULATE</Button>
        <Button onClick={handleReset} variant="outlined">RESET</Button>        </Stack>
        </div>

        </div>
        
    </div>
    </>
  )
}

export default App
