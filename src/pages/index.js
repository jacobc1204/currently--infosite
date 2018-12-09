import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Logo from '../components/logo'
import Screenshot from '../components/screenshot'
import HeadImage from '../components/head'

const Header = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-rows: 1fr;
  height: 200px;
`;

const Head = styled.h2`
  margin: 1em 0 0 1em;
  font-size: 1.2em;
  position: absolute;
`;

const Btn = styled.a`
  text-decoration: none;
  color: #303036;
  height: 85px;
  width: 150px;
  background-color: #5CBCEC;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1;
`;

const Body = styled.div`
  margin: 5% 12% 0 12%;
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: 350px 600px 400px;
  grid-gap: 10px;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

const Text = styled.p`
  color: #303036;
  text-align: center;
  font-size: 1em;
`;

const Conclusion = styled.p`
  grid-column: 1 / -1;
  margin: 0 0 20px 0;
`

const Words = styled.div`
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <div>
      <Header>
        <HeadImage />
        <Head><em>Challenge yourself. Read more.</em></Head>
        <Btn href="https://app.currentlyapp.xyz/" >Sign Up</Btn>
      </Header>
      <Body>
        <Logo />
        <Text>
          Currently is a web app for tracking how much you read. You can set a goal, and see your progress as you log what you read. It doesn’t have to be books; it could be anything! You just put the title of what you read, along with the author and the date, and voila.
        </Text>
        <Text>
          Reading challenges are a great way to get yourself reading more. Do you wanna read 1 book a month? How about pushing yourself to read 30 books this year? It's never too late to develop this incredibly healthy habit!
        </Text>
        <Screenshot />
        <Conclusion>
          <Words>
            <h3>Read all about it...</h3>
            <Text>
              I love to read, but when it comes to tracking how much I read, I didn’t care for any of the options. Learning to code has been a lot of fun, and I needed to build something bigger; more functional. So, I decided to solve my own problem. My goal was for it to be minimal and stylish, while performing its' function. I am proud of the product I created. There are a lot of things that I would like to do with it in the future, but for now it works. Maybe when I have more funds, and more free time, I will be able to expand it.

              Reading is an important skill, and I think that everyone should do it more often. Challenging ourselves to do it more is definitely a good idea. Pick up a book as often as you can, and try to hit that goal. We, as humans, should all strive to be lifelong learners; one of the best ways to achieve that is to read. As of now, I only have the web app up and going, but the mobile app is a work in progress. If you like it, I would really appreciate any and all feedback. Donations are humbly accepted.
            </Text>
          </Words>
        </Conclusion>
      </Body>
    </div>
  </Layout>
)

export default IndexPage
