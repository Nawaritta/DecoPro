import React from 'react'

const Snack = ({ sent, type, message, hideSnack }) => {
    return (
        <div className={`${sent ? '' : 'hidden'} max-md:w-[70%] max-md:flex-col fixed top-20 left-0 right-0 mx-auto  flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gradient-to-l from-slate-900 to-slate-700 text-gray-100 divide-gray-100`}>
            <div className="flex flex-1 flex-col p-4 border-l-8 border-orange-500">
                <span className="text-2xl">{type}</span>
                <span className="text-sm text-gray-200">{message}</span>
            </div>
            <button onClick={() => { hideSnack() }} className="px-4 flex items-center text-xs uppercase tracking-wide text-orange-500 border-gray-700">Dismiss</button>
        </div>
    )
}

export default Snack