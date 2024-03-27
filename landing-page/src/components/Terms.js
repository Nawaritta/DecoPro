import React from 'react'

const Terms = ({ isModalOpen, toggleModal }) => {

    return (
        <div id="terms-modal" aria-hidden="true" className={` ${isModalOpen ? '' : 'hidden'} bg-gray-800 bg-opacity-50 w-full overflow-x-hidden overflow-y-auto fixed md:h-full left-0 right-0 md:inset-0 z-50 justify-center items-center`}>
            <div className="relative w-full max-w-2xl px-4 h-full top-8 md:h-auto mx-auto">

                <div className="bg-white rounded-lg shadow relative dark:bg-gray-700 w-full">

                    <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                            Privacy Policy
                        </h3>
                        <button onClick={() => { toggleModal() }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                        <p className="text-gray-500 text-base leading-relaxed">
                            We value your privacy and are committed to protecting your personal information. Here&apos;s a brief overview of how we collect and use data:
                        </p>
                        <ul className='text-gray-500'>
                            <li><strong>Information Collection:</strong> We may collect personal and non-personal information when you use our app.</li>
                            <li><strong>Data Usage:</strong> We use the information collected to personalize your experience, improve our app, and communicate with you.</li>
                            <li><strong>Data Security:</strong> We employ appropriate security measures to safeguard your data from unauthorized access or misuse.</li>
                            <li><strong>Sharing Information:</strong> We do not sell, trade, or rent your personal information to third parties.</li>
                            <li><strong>Policy Updates:</strong> We may update our privacy policy periodically. By using our app, you agree to the terms outlined in our policy.</li>
                        </ul>

                        <p className="text-gray-500 text-base leading-relaxed ">
                            For any questions or concerns about our privacy practices, please contact us. Thank you for trusting us with your information.
                        </p>
                    </div>
                    {/* Modal footer */}
                    {/* a */}
                </div>
            </div>
        </div>
    )
}

export default Terms