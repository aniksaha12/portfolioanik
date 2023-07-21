import React from 'react'
import {logo} from "../../assets/index";
import { navlinksdata } from '../../constants';

export default function Navbar() {
  return (
    <div  className='w-full h-20 mx-auto flex justify-between items-center font-titleFont'>
      <div>
        <img className="object-scale-down h-20 w-25" src={logo} alt="Logo" />
      </div>
      <div>
        <ul className='flex items-center gap-10'>
            {
                navlinksdata.map(({ _id,title,link }) => {
                    return (
                    <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>{title}</li>
                    );
                })
            }
        </ul>
      </div>
    </div>
  );
}
