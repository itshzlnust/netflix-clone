import React from 'react'

const AccountMenu = () => {
    return (
        <div className='flex dropdown dropdown-hover dropdown-end'>
            <div className="avatar" tabIndex={0}>
                <div className="w-10 rounded">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <button
                tabIndex={0}
                className='dropdown-content top-10 w-32 bg-black py-1'
                onClick={() => console.log('signout...')}
            >
                Sign Out
            </button>
        </div>
    )
}

export default AccountMenu