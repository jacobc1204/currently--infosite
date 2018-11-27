import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Logo from '../components/logo'
import Screenshot from '../components/screenshot'

const Container = styled.div`
  margin: 5% 12% 5% 12%;
  display: grid;
  grid-template-columns: 0.78fr 1fr;
  grid-template-rows: repeat(4, 37em);
  grid-column-gap: 40px;
  align-items: center;
`;

const Text = styled.p`
  color: #303036;
  text-align: center;
  font-size: 1.4em;
`;

const Conclusion = styled.p`
  grid-column: 1 / -1;
  height: 700px;
  margin-top: 17em;
`

const Words = styled.div`
  text-align: center;
`;

const Placeholder = styled.div`
  background: #3d3d3d;
  margin: 20px 0 10px 0;
  width: 100%;
  height: 100%;
`;

const IndexPage = () => (
  <Layout>
    <Container>
      <Logo />
      <Text>
        <em>Challenge yourself. Read more.</em><br/>
        <br/>
        Currently is a web app for tracking how much you read. You can set a goal, and see your progress as you log what you read. It doesn’t have to be books; it could be anything! You just put the title of what you read, along with the author and the date, and voila.
      </Text>
      <Text>

      </Text>
      <Screenshot />
      <Conclusion>
        <Words>
          <h2>Read all about it...</h2>
          <Text>
            I love to read, but when it comes to tracking how much I read, I didn’t care for any of the options. Learning to code has been a lot of fun, and I needed to build something bigger; more functional. So, I decided to solve my own problem. My goal was for it to be minimal and stylish, while performing its' function. I am proud of the product I created. There are a lot of things that I would like to do with it in the future, but for now it works. Maybe when I have more funds, and more free time, I will be able to expand it.

            Reading is an important skill, and I think that everyone should do it more often. Challenging ourselves to do it more is definitely a good idea. Pick up a book as often as you can, and try to hit that goal. We, as humans, should all strive to be lifelong learners; one of the best ways to achieve that is to read. As of now, I only have the web app up and going, but the mobile app is a work in progress. If you like it, I would really appreciate any and all feedback. Donations are humbly accepted.
          </Text>
        </Words>
        <Placeholder />
      </Conclusion>
    </Container>
  </Layout>
)

export default IndexPage
