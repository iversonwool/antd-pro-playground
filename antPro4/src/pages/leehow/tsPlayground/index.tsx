import React from 'react';


interface User {
  name: string;

}

const PG = (props) => {
  console.log(props)
  return (
    <div>
      {props.name}


      I am iron man!
    </div>
  );
};

export default PG;