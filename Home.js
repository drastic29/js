import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import ApplicationForm from './ApplicationForm';
import List from './List';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [students, setStudents] = useState([]);
  const states = [
    { StateID: 1, StateName: 'Gujarat' },
    { StateID: 2, StateName: 'Maharashtra' },
    { StateID: 3, StateName: 'Punjab' },
  ];
  const cities = [
    { CityID: 1, Name: 'Ahmedabad', StateID: 1 },
    { CityID: 2, Name: 'Surat', StateID: 1 },
    { CityID: 3, Name: 'Baroda', StateID: 1 },
    { CityID: 4, Name: 'Mumbai', StateID: 2 },
    { CityID: 5, Name: 'Pune', StateID: 2 },
    { CityID: 6, Name: 'Amritsar', StateID: 3 },
    { CityID: 7, Name: 'Ludhiana', StateID: 3 },
  ];

  const handleLogin = (username, password, history) => {
    // Verify user and set loggedIn state
    const user = users.find((user) => user.userName === username && user.password === password);
    if (user) {
      setLoggedIn(true);
      setIsAdmin(user.role === 'admin');
      history.push('/');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleAddStudent = (student) => {
    // Add student to the list
    setStudents([...students, student]);
  };

  const handleDeleteStudent = (studentId) => {
    // Delete student from the list
    setStudents(students.filter((student) => student.id !== studentId));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {!loggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {loggedIn && (
              <>
                <li>
                  <Link to="/application-form">Application Form</Link>
                </li>
                {isAdmin && (
                  <li>
                    <Link to="/list">List</Link>
                  </li>
                )}
              </>
            )}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <Redirect to={isAdmin ? '/list' : '/application-form'} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login">
            {!loggedIn ? <LoginForm handleLogin={handleLogin} /> : <Redirect to="/" />}
          </Route>
          <Route path="/application-form">
            {loggedIn ? (
              <ApplicationForm
                states={states}
                cities={cities}
                handleAddStudent={handleAddStudent}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/list">
            {loggedIn && isAdmin ? (
              <List students={students} handleDeleteStudent={handleDeleteStudent} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
