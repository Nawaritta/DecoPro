import React from 'react'
import ThreeScene from './ThreeScene'

const Features = () => {
    return (
        <section id='features' className="p-4 lg:p-8 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-gray-100">
            <h1 className='text-center mt-4 mb-12 text-3xl md:text-4xl font-bold'>WHY IS IT SO GREAT?</h1>
            <div className="container mx-auto space-y-12">
                <div className=" min-h-[280px] flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <ThreeScene modelPath='/sofa.glb' rotDir={-1} modelPos={[10, -20, -200]} intensity={2} />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-2xl md:text-3xl font-bold">Immersive AR Experience</h3>
                        <p className="my-4 dark:text-gray-400">Visualize your dream space in real-time with augmented reality.</p>
                    </div>
                </div>
                <div className="min-h-[280] flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <ThreeScene modelPath='/couch.glb' modelPos={[0, 0.25, 4]} intensity={10} />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-2xl md:text-3xl font-bold">Realistic Rendering</h3>
                        <p className="my-4 dark:text-gray-400">Experience lifelike renderings of furniture and decor items in your own space.</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <ThreeScene modelPath='/table_and_chairs.glb' rotDir={-1} modelPos={[0, 0, 3.3]} intensity={10} />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-2xl md:text-3xl font-bold">Effortless Room Planning</h3>
                        <p className="my-4 dark:text-gray-400">Experiment with layouts and furniture arrangements</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features