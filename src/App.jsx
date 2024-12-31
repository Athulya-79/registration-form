import { useState } from 'react'
import './App.css'
import { FormControl, InputLabel, MenuItem, Select, TextField, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'

function App() {
  const [course, setCourse] = useState('')
  const [dob, setDob] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleCourseChange = (event) => setCourse(event.target.value)
  const handleDobChange = (event) => setDob(event.target.value)
  const handleMobileChange = (event) => setMobile(event.target.value)
  const handleAddressChange = (event) => setAddress(event.target.value)
  const handleGenderChange = (event) => setGender(event.target.value)
  const handleEmailChange = (event) => setEmail(event.target.value)
  const handleNameChange = (event) => setName(event.target.value)

  const validateInputs = () => {
    if (!name || !address || !mobile || !dob || !gender || !email || !course) {
      alert('Please fill in all fields.')
      return false
    }
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert('Name should contain only letters and spaces.')
      return false
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      alert('Mobile number must be 10 digits.')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Enter a valid email address.')
      return false
    }
    return true
  }

  const handleRegister = () => {
    if (validateInputs()) {
      alert(`Registration Successful!\n\nDetails:\nName: ${name}\nAddress: ${address}\nMobile: ${mobile}\nDOB: ${dob}\nGender: ${gender}\nEmail: ${email}\nCourse: ${course}`)
    }
  }

  const handleCancel = () => {
    setName('')
    setAddress('')
    setMobile('')
    setDob('')
    setGender('')
    setEmail('')
    setCourse('')
  }

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f1f8e9',
        margin: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '500px',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#2e7d32',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>Student Registration</h1>
          <div style={{ marginBottom: '15px' }}>
            <TextField fullWidth id="name" label="Full Name" variant="outlined" value={name} onChange={handleNameChange} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              fullWidth
              id="address"
              label="Address"
              variant="outlined"
              multiline
              rows={4}
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              fullWidth
              id="mobile"
              label="Mobile Number"
              variant="outlined"
              type="tel"
              value={mobile}
              onChange={handleMobileChange}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              fullWidth
              id="dob"
              label="Date of Birth"
              variant="outlined"
              type="date"
              value={dob}
              onChange={handleDobChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row value={gender} onChange={handleGenderChange}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              fullWidth
              id="email"
              label="Email Address"
              variant="outlined"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="course-label">Select Course</InputLabel>
              <Select
                labelId="course-label"
                id="course"
                value={course}
                onChange={handleCourseChange}
                label="Select Course"
              >
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Commerce">Commerce</MenuItem>
                <MenuItem value="Humanities">Humanities</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <button style={{
              width: '48%',
              padding: '10px',
              marginRight: '4%',
              backgroundColor: '#43a047',
              color: '#fff',
              border: 'none',
              borderRadius: '5px'
            }} onClick={handleRegister}>Register</button>
            <button style={{
              width: '48%',
              padding: '10px',
              backgroundColor: '#f57c00',
              color: '#fff',
              border: 'none',
              borderRadius: '5px'
            }} onClick={handleCancel}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
