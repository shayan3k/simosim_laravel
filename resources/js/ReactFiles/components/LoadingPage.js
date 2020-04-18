import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

export default function LoadingPage() {
    function Box({ position, color }) {
        const ref = useRef();
        useFrame(
            () => (ref.current.rotation.x = ref.current.rotation.y += 0.008)
        );

        return (
            <mesh position={position} ref={ref}>
                <boxBufferGeometry args={[2.3, 2.3, 2.3]} attach="geometry" />
                <meshPhongMaterial color={color} attach="material" />
            </mesh>
        );
    }

    function App() {
        return (
            <Canvas>
                <Box color="#ddff00" position={[0, 0, 0]} />
                <directionalLight
                    color="#ffff00"
                    intensity={1}
                    position={[-1, 2, 4]}
                />
            </Canvas>
        );
    }

    return <App />;
}
