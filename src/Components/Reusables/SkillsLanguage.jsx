import React from 'react'

const SkillsLanguage = ({level1,level2,level3,skill1,skill2,skill3}) => {
  return (
    <div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase rounded-sm text-white text-[20px] font-bold">
          {skill1}
        </h1>
        <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase rounded-sm text-white text-[20px] font-bold">
          {skill2}
        </h1>
        <span className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] uppercase rounded-sm text-white text-[20px] font-bold">
          {skill3}
        </h1>
        <span className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
      </div>
    </div>
  )
}

export default SkillsLanguage
