import React from 'react';

type GreetProps = {
  children: string;
  heroName: string;
  name: string;
};

const Greet = (props: GreetProps): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log('First usage fro props');
  const { children, heroName, name } = props;

  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
