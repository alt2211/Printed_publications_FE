import styled from 'styled-components'

const SearchStyle = styled.input`
  width: 892px;
  height: 52px;
  flex-shrink: 0;
	border-radius: 10px;
	outline: none;
	color: #7F7F9B;
	transition: 2s;
  border: 1px solid #E6EAF8;
	&:hover {
		border: 1px solid #D8C5F0;
	};
	&:focus {
    border: 1px solid #550DB2;
	};
	&:active {
		border: 1px solid #E6EAF8;
		color: #550DB2;
	};
`;

export default SearchStyle;