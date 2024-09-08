import React from "react";
import '../style/Containerlabel.scss';

interface Props {
  label: string;
  hintText: string;
  
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContainerLabel: React.FC<Props> = ({ label, hintText, handleChange }) => {
  return (
    <div className="container-label">
      <label>{label}<span>*</span></label>
      <div className="input-box">
        <input type="text" placeholder={hintText} onChange={(e)=>handleChange(e)} />
      </div>
    </div>
  );
};

export default ContainerLabel;
