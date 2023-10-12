import styled from "styled-components";
import {useState} from "react";
import {Trail} from "../components/Trail"

const TitleContainer = styled.div`
  text-align: center;
  padding: 200px;
`

const TitleContent = styled.h1`
  font-size: 64px;
`

const SubtitleContent = styled.h1`
  font-size: 64px;
  color: antiquewhite;
`


export const Home = () => {
  const [open, set] = useState(true)

  return (
    <TitleContainer>
      <div onClick={() => set(state => !state)}>
        <TitleContent>Hi, my name is David.</TitleContent>
        <Trail open={open}>
          <div>I'm a <span>software engineer.</span></div>
        </Trail>
      </div>
    </TitleContainer>
  )
}