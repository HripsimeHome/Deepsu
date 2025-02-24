import styles from "./ChatMain.module.scss";
import { useState, useRef } from "react";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import { suiBlueImage, suiBlueWebpImage } from "../../../assets/images";

import { attachmentIcon, arrowTopIcon } from "../../../assets/svg";

const panelTexts = [
  "What is Sui Blockchain?",
  "What are the top tokens on Sui?",
  "Tell me about Sui's memecoins.",
  "Explain the SUI tokenomics.",
  "Which wallets support Sui tokens?",
];

function ChatMain() {
  const textareaRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState("");
  //const [isTextareaDisabled, setIsTextareaDisabled] = useState(false);

  const handleTagButtonClick = (text) => {
    setTextareaValue(text);
    textareaRef.current.focus();
    // setIsTextareaDisabled(true);
  };

  const handleSendClick = async () => {
    console.log(textareaValue);
    setTextareaValue("");
  };

  return (
    <section className={styles.chatMain}>
      <h1 className={styles.chatMain__title}>
        How can I<span>&nbsp;assist</span>&nbsp;you in
        <span>&nbsp;exploring</span>&nbsp;Sui?
      </h1>

      <div className={styles.chatMain__suiBock}>
        <span className={styles.chatMain__suiBockText}>build on</span>
        <a href="https://sui.io/" target="_blank">
          <ImageWebp
            src={suiBlueImage}
            srcSet={suiBlueWebpImage}
            className={styles.chatMain__suiBock_img}
          />
        </a>
      </div>

      <div className={styles.chatMain__panelContainer}>
        {panelTexts.map((text, index) => (
          <button
            type="button"
            key={index}
            disabled={text === textareaValue}
            onClick={() => handleTagButtonClick(text)}
            className={styles.chatMain__panel}
          >
            {text}
          </button>
        ))}
      </div>

      <div className={styles.chatMain__panelTextarea}>
        <textarea
          value={textareaValue}
          ref={textareaRef}
          onChange={(e) => setTextareaValue(e.target.value)}
          // disabled={isTextareaDisabled}
          className={styles.chatMain__chatTextarea}
          placeholder="Hi! Tell me about $CETUS token on Sui Network?"
        ></textarea>

        <div className={styles.chatMain__actionContainer}>
          <label>
            <input type="file" hidden />
            <Svg
              id={attachmentIcon}
              className={styles.chatMain__attachmentIcon}
            />
          </label>

          <button
            onClick={handleSendClick}
            className={styles.chatMain__btnSend}
          >
            <Svg
              id={arrowTopIcon}
              className={styles.chatMain__btnSend_arrowTopIcon}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChatMain;
