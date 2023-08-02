import React from 'react'
import {logo} from "../../assets/index";
import { Link } from 'react-scroll';
import { navlinksdata } from '../../constants';

export default function Navbar() {
  return (
    <div  className='w-full h-35 sticky top-0  mx-auto z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      <div>
        <img className="object-scale-down h-20 w-25" src={logo} alt="Logo" />
      </div>
      <div>
        <ul className='flex items-center gap-10'>
            {
                navlinksdata.map(({ _id,title,link }) => {
                    return (
                    <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                      <Link activeClass='active'
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                        {title}
                      </Link>
                    </li>
                    );
                })
            }
        </ul>
      </div>
    </div>
  );
}
