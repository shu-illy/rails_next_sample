import React, { FC } from "react";
import { GetStaticProps } from "next";

type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <h2>POSTの一覧</h2>
      <table>
	{props.posts.map((post) =>
	  <tr>
	    <td>{post.id}.</td>
	    <td>{post.title}</td>
	  </tr>
        )}
      </table>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const response = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/posts`, {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;