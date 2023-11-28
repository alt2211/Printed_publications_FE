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


const StyledFrame = styled.div`
  border: 1px solid;
  border-color: #e6eaf8;
  border-radius: 10px;
  height: 52px;
  overflow: hidden;
  position: relative;
  width: 892px;
`;

const MagnifyingGlassWrapper = styled.div`
  background-color: #f0ecf5;
  border-radius: 6px;
  height: 40px;
  left: 846px;
  overflow: hidden;
  position: absolute;
  top: 6px;
  width: 40px;
`;

const MagnifyingGlass = styled.img`
  height: 20px;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 20px;
`;

const InputText = styled.input`
  border: none;
  outline: none;
  width: calc(100% - 40px); /* Adjust the width as needed */
  height: 100%;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
`;

const BookCount = styled.div`
  color: #7e7e9b;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 703px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 15px;
  white-space: nowrap;
`;

export const Search = (props) => {
  return (
    <StyledFrame>
      <MagnifyingGlassWrapper>
        <MagnifyingGlass alt="Magnifying glass" src="MagnifyingGlass.svg" />
      </MagnifyingGlassWrapper>
      <InputText
        type="text"
        placeholder="Поиск по изданиям"
        value={props.inputValue}
        onChange={props.onInputChange}
      />
      <BookCount>Всего книг: {props.count}</BookCount>
    </StyledFrame>
  );
};