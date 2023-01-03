import Image from "../Image/Image";
import { useEffect, useState, useRef, LegacyRef } from "react";
import src from "../../assets/imgs/santa-claus.webp";
import fallbackSrc from "../../assets/imgs/santa-claus.jpg";
import carol from "../../assets/audio/carol.mp3";
import insideImgFallbackSrc from "../../assets/imgs/inside-img.jpg";
import insideImgSrc from "../../assets/imgs/inside-img.webp";

const Card = () => {
  const [toggleCard, setToggleCard] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(new Audio(carol));

  /**
   * It toggles the state of the toggleCard variable.
   */
  const onSetToggleCard = () => {
    setToggleCard((prev) => !prev);
  };

  /* A hook that is called after every render. It is used to play the audio when the card is opened and
  to pause it when the card is closed. */
  useEffect(() => {
    if (toggleCard) {
      audioRef.current.play();
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
  }, [toggleCard]);

  return (
    <div
      className={toggleCard ? "card open flex-center" : "card flex-center"}
      onClick={onSetToggleCard}
      title="Click Me!"
    >
      <audio ref={audioRef} src={carol} />
      <div className="card__left">
        <div className="card__left--face">
          <Image
            src={fallbackSrc}
            fallbackSrc={fallbackSrc}
            alt="Christmas card image of family"
          />
          {/* <p className="front-hooray">
            From <span className="red">Hovsep Stepanian</span>
          </p> */}
        </div>
        <div className="card__left--back">
          <Image
            src={insideImgSrc}
            fallbackSrc={insideImgFallbackSrc}
            alt="christmas image inside card"
          />
        </div>
      </div>
      <div className="card__right">
        <h1>
          Merry <span className="red">Christmas</span>
        </h1>
        <p className="message">
          <em>
            <strong>
              „Behold, the virgin shall conceive and bear a son, and they shall
              call his name Immanuel“,
            </strong>
          </em>{" "}
          which means,{" "}
          <em>
            <strong>„God with us“</strong>
          </em>
          .
        </p>
        <div className="card__right--footer">
          <small>Matthew 1:23</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
