import React from 'react'

const ProfileChat = () => {
  return (
    
        <div className="flex items-center gap-3 mb-2">
            <div className="avatar online">
              {/* <span className="indicator-item badge badge-secondary">typing…</span> */}
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
        </div>
        </div>
    
  )
}

export default ProfileChat