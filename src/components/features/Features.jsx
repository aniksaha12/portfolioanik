import React from 'react';
import {AiFillAppstore} from "react-icons/ai";
import {FaMobile, FaGlobe, FaBars} from "react-icons/fa";
import {SiProgress, SiAntdesign} from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

export default function Features() {
  return (
    <section id='features' className='w-full h-[300px] py-20 border-b-[1px] border-b-black'>
       <Title title="Features" des="What I Do"/>
       <div className='grid grid-cols-3 gap-20'>
       <Card title = "Web Development" 
        des ="hersb fiwerhofieuofuwesayf ciqweyrifuqwe 98weyrdf87weayrfoqweub9udfwer 9wehdruweaydgfouweaby fiweahfid" icon={<FaBars/>}/>
        <Card title = "Web Development" 
        des ="Lorem32" icon={<SiProgress/>}/>
        <Card title = "Web Development" 
        des ="Lorem32" icon={<FaMobile/>}/>
        <Card title = "Web Development" 
        des ="Lorem32" icon={<FaGlobe/>}/>
        <Card title = "Web Development" 
        des ="Lorem32" icon={<SiAntdesign/>}/>
        <Card title = "Web Development" 
        des ="Lorem32"/>
       </div>
    </section>
  )
}
