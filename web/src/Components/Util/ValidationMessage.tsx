interface ValidationMessageProps {
  message: string;
}

const ValidationMessageComp: React.FC<ValidationMessageProps> = (props) => {
  return(
    <div className="text-red-700 font-semibold my-2 bg-red-100 border-l-2 border-l-red-700 p-2">
        {props.message}
    </div>
  );
};

export default ValidationMessageComp;
