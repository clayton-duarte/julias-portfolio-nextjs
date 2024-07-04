
import styled from '@emotion/styled'

import Header from '@/components/Header'

const Article = styled.article`
  background-image: url("https://placehold.co/1920x1080?text=placeholder");
  background-repeat: no-repeat;
  background-position: center;
  padding: 64px 0 64px 0;
  align-items: flex-end;
  overflow-x: hidden;
  display: flex;
  height: 90vh;
`

const H1 = styled.h1`
  animation: marquee 5s linear infinite;
  transform: translateX(1ch);
  white-space: nowrap;
  font-weight: 400;
  font-size: 200px;
  width: 41ch;
  margin: 0;
  @keyframes marquee {
    from {
      transform: translateX(1ch);
    }
    to {
      transform: translateX(-20.5ch);
    }
  }
`

export default function HomePage() {
  return (
    <>
      <Header />
      <Article>
        <H1>• Julia Santos - UX Designer • Julia Santos - UX Designer</H1>
      </Article>
    </>
  );
}
