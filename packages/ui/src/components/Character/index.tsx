import React, { FC } from 'react';
import styled from 'styled-components';

import Hunger_alert from '../../assets/hunger_alert.svg';
import Sleep_alert from '../../assets/sleep_alert.svg';
import Full_heart from '../../assets/heart.svg';
import Weak_heart from '../../assets/heart_weak.svg';
import Empty_heart from '../../assets/heart_empty.svg';
import Baby_Porcu from '../../assets/baby_porcu.svg';
import Porcu from '../../assets/porcu.svg';
import Dead from '../../assets/death.svg';

const StyledCharacter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block-start: 3.5rem;

  > :first-child {
    margin-bottom: 0.5rem;
  }
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  margin-block-start: 1rem;
`;

const Icons = styled.div`
  img {
    transform: scale(0.5);
  }
  .alertIcon {
    animation: blink 2s infinite cubic-bezier(0.5, 0.35, 0.5, 0.65);
    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
  }
`;

const Name = styled.div`
  font-weight: bold;
`;

const BabyPorcuImg = styled.div`
  height: 5rem;
  animation: float 2s infinite linear;
  @keyframes float {
    25% {
      transform: translateY(-2%) translateX(1%) rotateY(30deg);
    }
    50% {
      transform: translateX(0%) rotateY(0deg);
    }
    75% {
      transform: translateY(5%) translateX(2.25%) rotateY(-10deg);
    }
  }
`;

const PorcuImg = styled.div`
  transform: scale(0.35) translateY(-4rem);
  height: 5rem;
  #porcu {
    transform: scale(1) translateY(-4rem);
    animation: porcu 3s infinite linear;
    @keyframes porcu {
      50% {
        transform: scale(1) translateY(-4rem) translateX(0rem);
      }
      60% {
        transform: scale(0.75) translateY(-4rem) translateX(5rem);
      }
      65% {
        transform: scale(0.75) translateY(-4rem) translateX(-5rem);
      }
      70% {
        transform: scale(1) translateY(-4rem) translateX(0rem);
      }
    }
  }
`;

export interface ICharacterProps {
  name: string;
  age: number;
  health: number;
  hunger: number;
  happiness: number;
  energy: number;
  timer: number;
  //characterImage: React.ReactNode;
}

export const Character: FC<ICharacterProps> = ({
  name,
  age,
  health,
  hunger,
  happiness,
  energy,
  timer,
  //characterImage,
  ...restProps
}) => {
  return (
    <StyledCharacter {...restProps}>
      <StyledTop>
        <Icons>
          <img
            className='alertIcon'
            src={hunger < 8 ? '' : Hunger_alert}
            alt=''
          />
          <img
            className='alertIcon'
            src={energy > 3 ? '' : Sleep_alert}
            alt=''
          />
          <img
            src={
              health >= 7
                ? Full_heart
                : health >= 1 && health < 7
                ? Weak_heart
                : Empty_heart
            }
            alt=''
          />
        </Icons>
        <Name>{name}</Name>
      </StyledTop>
      {age == 0 ? (
        <BabyPorcuImg>
          <img src={Baby_Porcu} />
        </BabyPorcuImg>
      ) : (
        <PorcuImg>
          {health <= 0 ? <img src={Dead} /> : <img id='porcu' src={Porcu} />}
        </PorcuImg>
      )}
    </StyledCharacter>
  );
};
