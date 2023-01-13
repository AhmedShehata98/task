import Head from "next/head";
import { Inter } from "@next/font/google";
import LandingHeaderBar from "@/components/LandingHeaderBar";
import { Input } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="min-h-screen w-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, #131212c9 , #5a5a5a76),url(/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg)`,
        }}
      >
        <LandingHeaderBar />
        <section className="container mx-auto">
          <div className="w-full h-fit mt-44 flex justify-center items-center flex-col">
            <span className="w-2/3 mb-9">
              <h1 className="font-bold text-5xl mb-0 leading-3 text-gray-100 capitalize">
                find the best jobs in your country .
              </h1>
              <h4 className="text-gray-300 capitalize ">
                searching for vacancies & career oppertunities ? Task helps you
                in your job search in your country.
              </h4>
            </span>
            <form className="w-2/3 flex mb-4">
              <Input
                className="w-full capitalize"
                size="huge"
                action={{
                  color: "teal",
                  labelPosition: "right",
                  icon: "rss",
                  content: "search jobs",
                }}
                icon="search"
                iconPosition="left"
                placeholder="search for jobs with job title .."
              />
            </form>
            <h3 className="w-2/3 text-gray-300 font-bold capitalize text-end">
              over 34,325 open jobs
            </h3>
          </div>
        </section>
      </main>
    </>
  );
}
