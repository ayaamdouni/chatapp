import React from 'react'

const Contact = () => {
  return (
	<div className='p-4 h-screen flex items-center justify-center'>
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Contact
					<span className='text-blue-500'> US</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Name</span>
						</label>
						<input type='text' placeholder='Enter your name' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text '>Text</span>
						</label>
                        <textarea className="w-full max-h-40 textarea textarea-bordered" placeholder="Bio"></textarea>
						{/* <input
							type='text'
							placeholder='Enter Text'
							className=''
						/> */}
					</div>
					

					<div>
						<button className='btn btn-block btn-sm mt-2'>Send</button>
					</div>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Contact