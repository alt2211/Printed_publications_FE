import styled from 'styled-components'

interface ButtonProps {
  width
	height
	radius
	background
	border
	textColor
	backgroundHover
	borderHover
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  margin: 10px;
  width: ${width => width.width};
	height: ${height => height.height};
	border-radius: ${radius => radius.radius};
	background: ${background => background.background};
	border: ${border => border.border};
	color: ${textColor => textColor.textColor};
	transition: 1s;
	&:hover {
    background: ${backgroundHover => backgroundHover.backgroundHover};
		border: ${borderHover => borderHover.borderHover};
	}
`;

export default Button;