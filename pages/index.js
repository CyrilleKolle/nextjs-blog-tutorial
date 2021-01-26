import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useState } from "react";
import { handler } from "./api/hello";

export default function Home({ allPostsData }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/hello", {
      body: JSON.stringify({
        email: input,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    console.log(result);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {/* <Date dateString={date} /> */}
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <form
          action="./api/hello"
          className="flex"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
            id="email"
            type="email"
            aria-label="email address"
            placeholder="Enter your email address"
            required={true}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
            type="submit"

            // onClick={() => subscribe(input)}
          >
            Sign Up
          </button>
        </form>
      </section>
    </Layout>
  );
}
export async function subscribe(input) {
  // e.preventDefault()
  const email = input;

  alert("you subscribed " + input);
  // handler(email)
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
