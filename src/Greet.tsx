type GreetProps = {
  children: string;
  heroName: string;
  name: string;
};

const Greet = (props: GreetProps): JSX.Element => {
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
