import React, { useState, useRef, useEffect } from 'react';
import { gql, useQuery } from 'urql';
import styled from 'styled-components';

import { Frame } from '../../assets';
import { Screen } from '../../components/Screen';
import { Character } from '../../components/Character';

import Burger from '../../assets/burger.svg';
import Ball from '../../assets/ball.svg';
import Sleep from '../../assets/sleep.svg';

const query = gql`
  query GetCharacters {
    characters {
      name
    }
  }
`;

// STYLES

const StyledHome = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5fbff;
`;

const Spinner = styled.div`
  display: inline-block;
  aspect-ratio: 1;
  height: 3.5rem;
  margin: 0 1em;
  border: dotted 0.35rem;
  border-radius: 50%;
  border-color: #f560b9 #54c4db #f5cb1c;
  animation: spin 1.15s infinite cubic-bezier(0.5, 0.35, 0.5, 0.65);
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  img {
    transform: scale(0.5);
    transition: transform 300ms ease-in-out;
    :hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;

export const Home: React.FC = () => {
  // TODO: proper types, maybe shared with backend
  const [result] = useQuery<{ characters: { name: string }[] }>({ query });

  const [name, setName] = useState('Baby Porcu');
  const [age, setAge] = useState(0);
  const [health, setHealth] = useState(10);
  const [hunger, setHunger] = useState(0);
  const [happiness, setHappiness] = useState(10);
  const [energy, setEnergy] = useState(10);
  const [timer, setTimer] = useState(5);

  const id: any = useRef(null);

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(time => time - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimer(3);
      hunger !== 10 ? setHunger(hunger + 2) : setHunger(10);
      energy !== 0 ? setEnergy(energy - 1) : setEnergy(0);
      happiness !== 0 ? setHappiness(happiness - 0.5) : setHappiness(0);
      setAge(age + 1);
      if (name === 'Baby Porcu') {
        setName('Porcu');
      }
    }
  }, [timer]);

  useEffect(() => {
    if (hunger == 9) {
      setHealth(health - 1);
    } else if (hunger == 10) {
      setHealth(health - 2);
    } else if (hunger == 0) {
      setHealth(health >= 9 ? 10 : health + 1);
    }
    console.log('hunger:', hunger);
  }, [hunger]);

  useEffect(() => {
    if (energy <= 3 && energy > 0) {
      setHealth(health - 1);
    } else if (energy == 0) {
      setHealth(health - 3);
    } else if (energy == 10) {
      setHealth(health >= 8 ? 10 : health + 2);
    }
    console.log('energy:', energy);
  }, [energy]);

  useEffect(() => {
    if (happiness <= 3 && happiness > 0) {
      setHealth(health - 2);
    } else if (happiness == 0) {
      setHealth(health - 5);
    } else if (happiness == 10) {
      setHealth(health >= 5 ? 10 : health + 5);
    }
    console.log('happiness:', happiness, '\n ');
  }, [happiness]);

  useEffect(() => {
    console.log('Health:', health, '\n ');
  }, [health]);

  const resetHunger = () => setHunger(0);
  const resetEnergy = () => setEnergy(10);
  const resetHappiness = () => setHappiness(10);

  // <>TODO: handle no data</>
  if (result.fetching) {
    return (
      <StyledHome>
        <h1>Loading</h1>
        <Spinner></Spinner>
      </StyledHome>
    );
  }

  // <>TODO: handle no data</>
  if (!result.data) {
    return (
      <StyledHome>
        <Screen>
          <Character
            name={name}
            age={age}
            health={health}
            hunger={hunger}
            happiness={happiness}
            energy={energy}
            timer={timer}
          />
          <ActionButtons>
            <img src={Burger} alt='Give food to Porcu' onClick={resetHunger} />
            <img src={Sleep} alt='Put Porcu to sleep' onClick={resetEnergy} />
            <img src={Ball} alt='Play with Porcu' onClick={resetHappiness} />

            {/*
            // TO DO
            // Implement stats page
            <img
              src={Weight_scale}
              alt='Check stats'
              style={{
                marginInlineStart: '2rem',
                background: '#54c4db',
                borderRadius: '5px',
                outline: '2.5px solid black',
                outlineOffset: '-0.15rem',
              }}
            /> 
            */}
          </ActionButtons>
        </Screen>
        <Frame />
      </StyledHome>
    );
  }

  return (
    <StyledHome>
      <Screen>
        {/* {result.data.characters.map((character, i) => (
          <Character
            key={i}
            name={character.name}
            characterImage={<BabyPorcu />}
          />
        ))} */}
      </Screen>
      <Frame />
    </StyledHome>
  );
};
