import React, { useEffect } from 'react';

import classes from '../../../src/components/Cockpit/Cockpit.module.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      //('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    console.log('Affected ',classes.Red)
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    //('RED COLOR AFFECTED ',classes)
    assignedClasses.push(classes.red); // classes = ['red']
   
  }
  if (props.personsLength <= 1) {
    console.log('--------------')
    console.log(classes)
    console.log('--------------')
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']

  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={classes.bold}>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
