import styled from 'styled-components';
import * as THREE from 'three';
import Circle from './images/circle.png';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import {
  AccentLink,
  ContainerTitle,
  GlassmorphismContainer,
  Snackbar,
  SnackbarProps,
  Subtitle,
  Title,
} from '@super-rad-poc/design/styles';
import { Link } from 'wouter';
import { LoadingSpinner } from '@super-rad-poc/design/components';
import { layout, LayoutProps } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import React from 'react';

const StyledWave = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #000;
`;

function Points() {
  const imgTex = useTexture({
    map: Circle,
  });
  const bufferRef = useRef<any>();

  let phase = 0;
  let amplitude = 3.5;
  let frequency = 0.002;

  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(frequency * (x ** 2 + z ** 2 + phase)) * amplitude;
    },
    [frequency, amplitude, phase]
  );

  const count = 500;
  const sep = 3;
  const points = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);

        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [graph]);

  useFrame(() => {
    phase -= 4;

    const positions = bufferRef.current?.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        if (positions) {
          positions[i + 1] = graph(x, z);
        }
        i += 3;
      }
    }
    if (bufferRef.current) bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          count={points.length / 3}
          itemSize={3}
          array={points}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        {...imgTex}
        color={0x00aaff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    <Canvas camera={{ position: [100, 15, 0], fov: 65 }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
}
const Background = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <StyledWave>
      <AnimationCanvas />
    </StyledWave>
  </Suspense>
);

const StyledPagecontainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SnackManager = () => {
  const [snacks, setSnacks] = React.useState<SnackbarProps[]>([]);

  const addSnack = (snack: SnackbarProps) => {
    setSnacks((snacks) => [...snacks, snack]);
  };

  const removeSnack = (created: string) => {
    setSnacks((snacks) =>
      snacks.filter((snack) => snack.created.toString() !== created)
    );
  };

  useEffect(() => {
    addSnack({
      message: 'This is a snack',
      action: 'Dismiss',
      isOpen: true,
      closeBtn: false,
      created: new Date(),
    });
  }, []);
  return (
    <>
      {snacks &&
        snacks.map((snack) => (
          <Snackbar
            key={snack.created.toString()}
            {...snack}
            onClose={() => {
              setSnacks(
                snacks.filter(
                  (s) => s.created.toString() !== snack.created.toString()
                )
              );
            }}
          />
        ))}
    </>
  );
};

export const LandingPage = () => {
  return (
    <>
      <SnackManager />
      <Background />
      <StyledPagecontainer>
        <GlassmorphismContainer
          marginTop={['50%', '25%', 0]}
          width={[1, 1 / 2, 1 / 3, 1 / 4]}
        >
          <ContainerTitle>
            <Title
              color={'white'}
              style={{ marginBottom: '0', width: '100%', textAlign: 'center' }}
            >
              Welcome
            </Title>
            <Subtitle
              color={'white'}
              style={{ width: '100%', textAlign: 'center' }}
            >
              To Microsocial
            </Subtitle>
          </ContainerTitle>
          <AccentLink style={{ width: 'auto', padding: '1.5rem' }}>
            <Link to="/auth">Click here to get started</Link>
          </AccentLink>
        </GlassmorphismContainer>
      </StyledPagecontainer>
    </>
  );
};
