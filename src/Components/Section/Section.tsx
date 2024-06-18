import React, { useState } from "react";
import Input from "../../Model/Input-Model";
import Section from "../../Model/Section-Model";
import InputComponent from "../Input/Input";

interface sectionPorps{
    sectionInfo : Section;
    textareas: {
        ref:React.MutableRefObject<HTMLTextAreaElement|null>,
        label:string
    }[];
    modals:{
        ref:React.MutableRefObject<HTMLDivElement|null>,
        label:string
    }[];
    propagateChange:(section:Section)=>void
}


const SectionComponent:React.FC<sectionPorps>=({sectionInfo, textareas, modals, propagateChange})=>{

    const handleInputChange = (newInfo:Input)=>{
        sectionInfo.inputs.find(cur=>cur.label==newInfo.label)!.value=newInfo.value
        propagateChange(sectionInfo)
    }


    if (
        sectionInfo.inputs
          .map((input) => input.value)
          .reduce((total, current) => total + current) == ""
      ){
        return<></>
      }
      return (
        <div className={sectionInfo.label + "-container data-section"}>
          <h1 className="title underlined">{sectionInfo.title}</h1>
          {[...sectionInfo.inputs].map((inputInfo: Input,key:number) => {
            const textarea = textareas.find(
              (obj) => obj.label === sectionInfo.label + inputInfo.label,
            )!.ref;
            const modal = modals.find(
              (obj) => obj.label === sectionInfo.label + inputInfo.label,
            )!.ref;
            return (
              <InputComponent
                key={key}
                inputInfo={inputInfo}
                parent={sectionInfo}
                textarea={textarea}
                modal={modal}
                propagateChange={handleInputChange}
              />
            );
          })}
        </div>
      );

}


export default SectionComponent