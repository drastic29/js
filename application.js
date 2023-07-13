import React, { useState } from 'react';

const ApplicationForm = ({ states, cities, handleAddStudent }) => {
  const [fullName, setFullName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [buildingArea, setBuildingArea] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [tenthMarks, setTenthMarks] = useState('');
  const [tenthGrade, setTenthGrade] = useState('');
  const [tenthYearOfPassing, setTenthYearOfPassing] = useState('');
  const [twelfthMarks, setTwelfthMarks] = useState('');
  const [twelfthGrade, setTwelfthGrade] = useState('');
  const [twelfthYearOfPassing, setTwelfthYearOfPassing] = useState('');
  const [degreeMarks, setDegreeMarks] = useState('');
  const [degreeGrade, setDegreeGrade] = useState('');
  const [degreeYearOfPassing, setDegreeYearOfPassing] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields and submit data
    const student = {
      fullName: `${gender === 'male' ? 'Mr.' : 'Ms.'} ${firstName} ${middleName} ${lastName}`,
      firstName,
      middleName,
      lastName,
      email,
      address,
      buildingArea,
      state: selectedState,
      city: selectedCity,
      gender,
      skills,
      educationDetails: {
        tenth: {
          marks: tenthMarks,
          grade: tenthGrade,
          yearOfPassing: tenthYearOfPassing,
        },
        twelfth: {
          marks: twelfthMarks,
          grade: twelfthGrade,
          yearOfPassing: twelfthYearOfPassing,
        },
        degree: {
          marks: degreeMarks,
          grade: degreeGrade,
          yearOfPassing: degreeYearOfPassing,
        },
      },
    };

    handleAddStudent(student);
    // Reset form fields
    setFullName('');
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setBuildingArea('');
    setSelectedState('');
    setSelectedCity('');
    setGender('');
    setSkills([]);
    setTenthMarks('');
    setTenthGrade('');
    setTenthYearOfPassing('');
    setTwelfthMarks('');
    setTwelfthGrade('');
    setTwelfthYearOfPassing('');
    setDegreeMarks('');
    setDegreeGrade('');
    setDegreeYearOfPassing('');
  };

  return (
    <div>
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    </div>
  );
};

export default ApplicationForm;
