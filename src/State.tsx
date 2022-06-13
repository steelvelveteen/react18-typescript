import { useState } from 'react';

type Person = {
  id: number;
  name: string;
  surname: string;
  age: number;
};

const State = (): JSX.Element => {
  const [people] = useState<Person[]>([
    {
      id: 40,
      name: 'Joey',
      surname: 'Vico',
      age: 47,
    },
    {
      id: 50,
      name: 'Larissa Angelique',
      surname: 'Vico-Schneider',
      age: 35,
    },
  ]);
  return (
    <>
      <p>Testing just for now</p>
      {people.map((p: Person) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </>
  );
};

export default State;
