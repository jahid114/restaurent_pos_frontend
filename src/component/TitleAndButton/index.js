import './style.css';

const TitleAndButton = (props) => {
  return (
    <div className='flex-box'>
      <p className='heading'>{props.title}</p>
      <button className='btnClass' onClick={props.onSubmitButton}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default TitleAndButton;
