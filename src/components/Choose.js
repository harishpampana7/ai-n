import React from 'react'
import "./choose.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile from "../Images/bank.png"
import Interview from "../Images/interview.png"
import CV from "../Images/cv.png"
import Mentor from "../Images/mentoring.png"

import Live from "../Images/tutoring.png"
import Money from "../Images/money.png"

const Choose = () => {
  return (
    <div className="choose mt-3 mr-3" >
<h2 className='text-center' style={{fontSize:"32px",fontWeight:700}}>Why choose us </h2>


<div className="stats-container row w-100">
<div className="stats-box col-sm-3"
style={{flexDirection:"column"}}

>
  <img
    alt="figure"
    src={Live}
    className="choose-img"
    loading="lazy"
  />
  <div className="stats-text">
    <h6 className="stats-description1">Live classes</h6>
  </div>
</div>

<div className="stats-box col-sm-3"
style={{flexDirection:"column"}}
>
  <img
    alt="figure"
    src={Interview}
    className="choose-img"
    loading="lazy"
  />
  <div className="stats-text">
    <h6 className="stats-description1">Mock-Interviews</h6>
  </div>
</div>

<div className="stats-box col-sm-3"
style={{flexDirection:"column"}}

>
    <div>
  <img
    alt="figure"
    src={CV}
    className="choose-img"
    loading="lazy"
  />
  </div>
  <div className="stats-text">
    <h6 className="stats-description1">Resume Building </h6>
  </div>
</div>

<div className="stats-box col-sm-3"
style={{flexDirection:"column"}}

>

<img
    alt="figure"
    src={Mentor}
    className="choose-img"
    loading="lazy"
  />
  <div className="stats-text">
    <h6 className="stats-description1">Carrer Mentoring</h6>
  </div>
</div>
<div className="stats-box col-sm-3"
style={{flexDirection:"column"}}

>

<img
    alt="figure"
    src={Money}
    className="choose-img"
    loading="lazy"
  />
  <div className="stats-text">
    <h6 className="stats-description1">Affordable Fees</h6>
  </div>
</div>
</div>
    </div>
  )
}

export default Choose