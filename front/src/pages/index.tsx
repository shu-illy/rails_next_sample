import React, { FC } from "react";
import Auth from "src/components/Auth";
import Layout from "src/components/Layout";

type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}

const Home: FC<Props> = (props) => {
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  )
}


export default Home;