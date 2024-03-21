import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const MyModel = ({ modelPath, rotDir = 1, modelPos }) => {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef();

    useFrame(() => {
        // modelRef.current.rotation.x += 0.01;
        modelRef.current.rotation.y += 0.01 * rotDir;
    });


    return <primitive ref={modelRef} position={modelPos} rotation={[0.5, 0, 0]} object={scene} />;
};

const ThreeScene = ({ modelPath, rotDir, modelPos, intensity }) => {
    const [canvasHeight, setCanvasHeight] = useState();
    useEffect(() => {
        const setHeightBasedOnWidth = () => {
            if (window.innerWidth >= 640) {
                setCanvasHeight('280px');
            } else {
                setCanvasHeight('220px');
            }
        }

        setHeightBasedOnWidth();

        return () => { }
    }, []);

    return (
        <Canvas className='flex-1 w-full' style={{ height: canvasHeight }}>
            <ambientLight intensity={intensity} />
            <pointLight position={[10, 10, 10]} />
            <MyModel modelPath={modelPath} rotDir={rotDir} modelPos={modelPos} />
        </Canvas>
    );
};

export default ThreeScene;
