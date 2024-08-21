import React from 'react'
import ProfileChat from './profileChat'
import { logoutIcon } from './logoutIcon'
import { NavLink } from 'react-router-dom'
import { searchIcon } from './searchIcon'

const Side = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <label className="input input-bordered flex items-center mb-3">
        <input type="text" className="grow" placeholder="Search" />
        {searchIcon}
      </label>
    <div className='flex flex-col overflow-auto'>
        <ProfileChat/>
        <ProfileChat/>
        <ProfileChat/>
        <ProfileChat/>
        <ProfileChat/>
        <ProfileChat/>
        <ProfileChat/>
        <ProfileChat/>
        <ProfileChat/>

    </div>
    <NavLink to='/login' className='flex flex-row mt-2'>
      {logoutIcon} Logout
    </NavLink>
    </div>
  )
}

export default Side