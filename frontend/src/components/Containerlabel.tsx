import React from "react";
import '../style/Containerlabel.scss';

interface Props {
  label: string;
  hintText: string;
  id:string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContainerLabel: React.FC<Props> = ({ label, hintText,id,handleChange}) => {
  return (
    <div className="container-label">
      <label>{label}<span>*</span></label>
      <div className="input-box">
        <input id={id} type="text" placeholder={hintText} onChange={(e)=>handleChange(e)} />
      </div>
    </div>
  );
};

export default ContainerLabel;
