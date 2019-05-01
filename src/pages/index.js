import React from "react"

import Layout from "../components/layout"
import Quiz from "../components/quiz"
import {Helmet} from "react-helmet";

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Game of Thrones Quiz</title>
      <meta
        name="keywords"
        content="game of thrones quiz, game of thrones, quiz, hardest, the most difficult game of thrones quiz, game of thrones hardest quiz, superfan quiz, game of thrones superfan quiz"
      />
    </Helmet>
  <Quiz>
  </Quiz>
  </Layout>
)

export default IndexPage
