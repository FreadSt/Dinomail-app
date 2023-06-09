import './style.scss';
import arrow from "../../../../assets/images/leftArrGreen.png";
import { useNavigate, useParams } from "react-router-dom";
import audience from "../../../../assets/images/audienceicon.png";
import ProgressBar from "../../../../components/progressBar/ProgressBar";
import sub from "../../../../assets/images/subs.png";
import chat from "../../../../assets/images/chat.png";
import magnet from "../../../../assets/images/magnet.png";
import eye from "../../../../assets/images/closedeye.png";
import team from "../../../../assets/images/team.png";
import closeblack from "../../../../assets/images/xblack.png";
import Dropdown from './dropdown/dropdown';
import { useState } from 'react';
import './style.scss';
import { TagsInput } from "react-tag-input-component";
import close from "../../../../assets/images/xmark.png";
import {Tags} from './tagInput/TagInput';

export const Segmentation = () => {
    const [tags, setTags] = useState([]);
    const [selected, setSelected] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState()
    const [isSelectedDropdown, setIsSelectedDropdown] = useState(false)

    console.log(tags, "tags")

    const handleAddSuggestion = (item) => {
        setSelected(prevState => [...prevState, item.target.outerText.slice(0, -2)])
        console.log(item, "item")
    }

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    }
    let {id} = useParams()
    const navigate = useNavigate()
    console.log(isSelectedDropdown, "dropdown")

    const options = [
        { img: sub, label: "Subscribers", value: 1},
        { img: chat, label: "SMS subscribers" , value: 2},
        { img: magnet, label: "Engaged subscribers" , value: 3},
        { img: eye, label: "Sleeping subscribers", value: 4 },
        { img: team, label: "My team", value: 5 },
    ];

    const handleNav = () => {
        navigate('/audience/upload', {replace:true})
    }

    console.log(options, "options")

    return(
        <div className="segment-wrapper" id={id}>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <img src={audience} alt="header-audience"/>
                        <span>Audience / <p>Add contacts via file</p></span>
                    </div>
                    <div className='upload-group'>
                        {/*REPEATED CLASSNAME*/}
                        <button className='back' onClick={handleNav}>
                            <img src={arrow}/>
                            <span>Back</span>
                        </button>
                        <button className='save-as-draft'>
                            <span>Save as draft</span>
                        </button>
                        <button className='continue' 
                                disabled={selected.length < 1 | !isSelectedDropdown}
                                onClick={selected.length >=1 ? handleOpenModal : null}>
                            <span>Continue</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="pg-bars">
                    <div className="progress-bar-upload">
                        <ProgressBar bgcolor="#1BBDA0" completed={100} className="progress-bar"/>
                    </div>
            </div>
            <div className='inner-box'>
                <div className='segm-title'>
                    <h1 className='count'>2/2</h1>
                    <h1>Segmentation</h1>
                </div>
                <div className='segm-group'>
                    <div className='tips'>
                        <ul>
                            <li>
                                Tagging will help you sort and search
                                your contacts by categories and criteria more conveniently
                            </li>
                            <li>
                                You must add some category for your contacts
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={isOpenModal ? 'modal' : "modal-hide"}>
                    <div className='modal-window-segment'>
                        <div className='modal-title'>
                            <h1>238 contacts</h1>
                            <img src={closeblack} alt="xmark" onClick={() => {setIsOpenModal(false)}}/>
                        </div>
                        <p>Tags:</p>
                        <p>Group:</p>
                        <div className='data-table'>
                            <div className='table-title'>
                                <span>Email</span>
                                <span className='fname'>First name</span>
                                <span className='lname'>Last name</span>
                                <span>Address line</span>
                            </div>
                            <hr/>
                            <div className='table-content'>
                                <div className='contact'>
                                    <span>fasdfgsf@asf.asdf</span>
                                    <span>Mike</span>
                                    <span>Morris</span>
                                    <span>4123 adas ad ar</span>
                                </div>
                            </div>
                            <hr/>
                            <div className='btns-group'>
                                <button className='btn1' onClick={() => setIsOpenModal(false)}>
                                    <span>Cancel</span>
                                </button>
                                <button className='btn2' onClick={() => navigate('/audience/')}>
                                    <span>Confirm</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='selection'>
                    <div className='tags'>
                        <label>Search for or create tags</label>
                        <TagsInput
                            value={selected}
                            onChange={setSelected}
                            name="fruits"
                            placeHolder={selected.length >=1 ? "" : "Start typing to add a custom tag"}
                        />
                        <p>Suggested tags:
                            {
                                [
                                    {text:" customer,"},
                                    {text:" passive,"},
                                    {text:" active,"},
                                    {text:" user,"},
                                    {text:" important,"},
                                    {text:" general,"},
                                    {text:" shared,"},
                                    {text:" banned,"},
                                    {text:" subscriber,"},
                                    {text:" potential,"},
                                ].map((item, index) => {
                                    return(
                                        <span 
                                            key={index}
                                            onClick={handleAddSuggestion}
                                        >
                                            {item.text} </span>
                                    )
                                })
                            }
                        </p>
                    </div>
                    <div className='dropdown'>
                        <label>Select group</label>
                        <Dropdown 
                            options={options}
                            onChange={() => {setIsSelectedDropdown(true)}}
                            placeHolder={"Not selected yet"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}