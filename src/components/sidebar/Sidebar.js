import './style.scss';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import img1 from "../../assets/images/getstartedicon.png";
import img2 from "../../assets/images/audienceicon.png";
import img3 from "../../assets/images/dashboardicon.png";
import img4 from "../../assets/images/campaignsicon.png";
import img5 from "../../assets/images/hashtagicon.png";

import img6 from "../../assets/images/audienceicon-white.png";
import img7 from "../../assets/images/dashboardicon-white.png";
import img8 from "../../assets/images/campaignsicon-white.png";
import img9 from "../../assets/images/getstartedicon-white.png";
import img10 from "../../assets/images/hashtagicon-white.png";

import logo from "../../assets/images/logotemplate.png";
import userimg from "../../assets/images/userdino.png";
import dots from '../../assets/images/dots.png';
import bell from '../../assets/images/alarmbell.png';

export const Sidebar = () => {
    const [isClicked, setIsClicked] = useState(null)
    const [isUpload, setIsUpload] = useState(false)

    const handleClick = (id) => {
        setIsClicked(id)
    }

    const location = useLocation();

    useEffect(() => {
    },[location])
    
    const navigate = useNavigate()

    const handleUpload = () => {
        if(isUpload){
            setIsUpload(false)
        } else {
            setIsUpload(true)
        }
    }

    const handleNav = () => {
        navigate('/loginpage', {replace:true})
    }
    return(
        <div className='sidebar-wrapper'>
            <div className='upper-box'>
                <div className='side-logo'>
                    <img src={logo} alt='side-logo'/>
                    <span>Dinomail</span>
                </div>
                { /*
                [
                        {img: img9, title:"Get Started"},
                        {img: img7, title:"Dashboard"},
                        {img: img6, title:"Audience"},
                        {img: img10, title:"Tags"},
                        {img: img8, title:"Campaigns"},
                    ].map((item, key) => {
                        return(
                            <button onClick={handleClick}>
                                <img src={item.img} alt='btn-icon'/>
                                <span>{item.title}</span>
                            </button>
                        )
                    }) 
                    [
                        {img: isClicked ? img9 : img1, title:"Get Started"},
                        {img: img2, title:"Dashboard"},
                        {img: img3, title:"Audience"},
                        {img: img4, title:"Tags"},
                        {img: img5, title:"Campaigns"},
                    ].map((item, key) => {
                        return(
                            <button onClick={handleClick}>
                                <img src={item.img} alt='btn-icon'/>
                                <span>{item.title}</span>
                            </button>
                        )
                    })
                */
                    [
                        {img: img1, title:"Get Started", path: "/getstarted"},
                        {img: img3, title:"Dashboard", path: "/dashboard"},
                        {img: img2, title:"Audience", path: "/audience"},
                        {img: img5, title:"Tags", path: "/tags"},
                        {img: img4, title:"Campaigns", path: "/campaigns",}
                    ].map((item, index) => {
                        return(
                            <Link 
                            to={item.path}
                            onClick={handleClick} 
                            key={index}>
                                <img src={item.img} alt='btn-icon'/>
                                <span>{item.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='user-box'>
                <div className='user-data'>
                    <img src={userimg} alt='dino-user'/>
                    <span>Robert</span>
                </div>
                <div className='options'>
                    <img className='bell' src={bell} alt='bell'/>
                    <img className='dots' src={dots} alt='dots' onClick={handleNav}/>
                </div>
            </div>
        </div>
    )
}