import styled from 'styled-components';
const SimpleButton = styled.button`
  color:white;
  background-color: green;
`;
const LargeButton = styled(SimpleButton)`
font-size: 50px;
`
const ReactButton = props => {
  return <button className = {props.children}>{props.children}</button>
} 
const ReactLargeButton = styled(ReactButton)`
  font-size:50px;
`;
const PrimaryButton = styled.button`
  color:${props=>props.primary ? 'white' : 'black'};
  background-color: ${props=>props.primary ? 'blue':'gray'};
`;
function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Noraml</PrimaryButton>
      <PrimaryButton primarty>Primarty</PrimaryButton>
    </div>
  );
}

export default App;
