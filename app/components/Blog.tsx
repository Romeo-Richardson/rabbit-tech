import React from "react";
import Divider from "./Divider";
import Image from "next/image";
import RabbitRedeye from "../assets/rabbit-redeye.png";

type props = {
  title: string;
  date: string;
  link: string;
};

const BlogCard = ({ title, date, link }: props): React.ReactNode => {
  return (
    <div className="flex flex-col w-1/4 text-sm mt-14">
      <a href={link}>
        <div>
          <Image
            src={RabbitRedeye}
            alt="Redeye Rabbit Icon"
            className="rounded-xl"
            priority
            unoptimized
          ></Image>
          <p className="max-w-full mt-4 ml-4 mb-1">{title}</p>
          <p className="ml-4 text-gray-500">{date}</p>
        </div>
      </a>
    </div>
  );
};

const Blog = (): React.ReactNode => {
  const blogCards: props[] = [
    {
      title: `rabbit inc. raises additional $10M to launch first AI hardware to
            replace app-based operating systems`,
      date: "Dec. 21, 2023",
      link: "https://www.rabbit.tech/updates/rabbit-raises-additional-10m",
    },
    {
      title: `rabbit inc. raises $20M to build a natural language-powered personalized operating system`,
      date: "Oct. 4, 2023",
      link: "https://www.rabbit.tech/updates/rabbit-raises-20m",
    },
  ];
  return (
    <>
      <div className="w-[92%] mx-auto">
        <div className=" my-60">
          <p className="text-8xl">blog</p>
        </div>
        <div>
          <p className="text-3xl mb-4">latest updates</p>
        </div>
      </div>
      <Divider></Divider>
      <div className="w-[92%] mx-auto flex gap-4 mb-44">
        {blogCards.map((card, key) => (
          <BlogCard key={key} {...card}></BlogCard>
        ))}
      </div>
    </>
  );
};

export default Blog;
