import styled from 'styled-components'

interface ButtonProps {
  width
	height
	radius
	background
	border
	textColor
	textColorHover?
	backgroundHover
	borderHover
	fontSize
	fontStyle
	fontWeight
	fontlineHeight
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
	transition: 0.5s;
	&:hover {
    background: ${backgroundHover => backgroundHover.backgroundHover};
		border: ${borderHover => borderHover.borderHover};
		color: ${textColorHover => textColorHover.textColorHover};
	}
	font-family: 'Inter', sans-serif;
	font-size: ${fontSize => fontSize.fontSize};
	font-style: ${fontStyle => fontStyle.fontStyle};
	font-weight: ${fontWeight => fontWeight.fontWeight};
	line-height: ${fontlineHeight => fontlineHeight.fontlineHeight};
	margin: 0px;
`;

export default Button;