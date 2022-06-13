type FunctionClickProps = {
  eventName: string;
};

const FunctionClick = (props: FunctionClickProps): JSX.Element => {
  const btnClickHandler = (): void => console.log('Button clicked');
  const { eventName } = props;

  return (
    <div>
      <button onClick={btnClickHandler} type="button">
        {eventName}
      </button>
    </div>
  );
};

export default FunctionClick;
