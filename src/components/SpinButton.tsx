import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';
import { Passenger } from '../App';

const MAX_CAPACITY = 3;

type Props = {
  passenger: Passenger;
};

const SpinButton = ({ passenger }: Props) => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [voiceOverMessage, setVoiceOverMessage] = useState('');

  const increment = () => {
    if (count === MAX_CAPACITY) {
      setVoiceOverMessage(`최대 인원수는 ${MAX_CAPACITY}명까지 가능합니다`);
      return;
    }
    setCount((prevCount) => prevCount + 1);
    setVoiceOverMessage(`${passenger} 승객 추가 ${count + 1}`);
  };

  const decrement = () => {
    if (count === 0) {
      setVoiceOverMessage(`현재 인원수는 0명입니다`);
      return;
    }
    setCount((prevCount) => prevCount - 1);
    setVoiceOverMessage(`${passenger} 승객 감소 ${count - 1}`);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <div className="spinButtonLabel">
          <label>{passenger}</label>
          <div className="helpIcon" onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
            ?
            {isTooltipVisible && (
              <span className="tooltip" role="tooltip">
                {`최대 인원수는 ${MAX_CAPACITY}명까지 가능합니다`}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className="spinButton"
          aria-label={`${passenger} 탑승자 한명 줄이기 버튼`}
        >
          -
        </button>
        <input type="text" readOnly className="spinButtonInput" value={count} />
        <button
          onClick={increment}
          className="spinButton"
          aria-label={`${passenger} 탑승자 한명 늘리기 버튼`}
        >
          +
        </button>
      </div>
      <div aria-live="assertive">{voiceOverMessage}</div>
    </section>
  );
};

export default SpinButton;
