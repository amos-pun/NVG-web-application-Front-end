import React from 'react'
import logo from "../../images/icon.jpeg"
import './Heading.css'

const Navbar = () => {
  return (
    <div className='col-lg-12 d-flex'>
        <div className='col-lg-3 justify-content-evenly d-flex align-middle'>
            <img src={logo} alt='img..' height={'90px'}/>
        </div>

        <div className='col-lg-6 justify-content-evenly d-flex align-items-center'>
        <div className="center_div text-center">
          <p className="m-2 text-center heading">New_Vision_Group</p>
        </div>
        </div>

        <div className='col-lg-3 justify-content-evenly d-flex align-items-center'>
            <i className="bi bi-box-arrow-right fs-1"></i>
        </div>
    </div>
  )
}

export default Navbar