/**
 * This component demonstrates CSS-in-JS using Emotion.
 * It uses the css prop and styled components to apply styles.
 * Emotion allows for scoped, maintainable styles within the component file.
 * It requires the @emotion/react and @emotion/styled packages.
 */

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

export function MyEmotionComponent() {
  const [isActive, setIsActive] = useState(false);
  // Create styled components
  const StyledDiv = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: #ffff66;
    background-color: #3399cc;
  `;
  // Dynamic style based on state
  const StyledButton = styled.button`
    background-color: ${isActive ? "#087671" : "#0011ff"};
    margin-top: 0.5rem;
    color: white;
  `;

  const divstyle = css`
    background-color: #336699;
    color: #00ff66;
    margin-bottom: 0.5rem;
  `;
  const color = "#990099";

  return (
    <>
      <h3>CSS-in-JS</h3>
      <div className={"my-box-border-1"}>
        <StyledButton onClick={() => setIsActive(!isActive)}>
          My-Styled-Button
        </StyledButton>
        <StyledDiv>CSS-in-JS</StyledDiv>
        <div css={divstyle}>Div with css prop</div>
        <div
          css={css`
            background-color: ${color};
            color: white;
          `}
        >
          Div with Emotion CSS
        </div>
      </div>
    </>
  );
}
