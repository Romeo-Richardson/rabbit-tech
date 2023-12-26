import React from "react";
import Divider from "./Divider";

type props = {
  title: string;
  location: string;
  type: string;
  link: string;
  appLink: string;
};

const Role = ({
  title,
  location,
  type,
  link,
  appLink,
}: props): React.ReactNode => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col">
        <a href={link}>{title}</a>
        <a href={link}>{location}</a>
      </div>
      <div className="w-1/2 flex justify-between items-center">
        <div>
          <a href={link} className="bg-gray-400 px-2 rounded-2xl py-1">
            {type}
          </a>
        </div>
        <div>
          <a href={appLink} className="bg-gray-400  px-2 rounded-2xl py-1">
            apply
          </a>
        </div>
      </div>
    </div>
  );
};

const CareersRoles = (): React.ReactNode => {
  const roles: props[] = [
    {
      title: "Member of Technical Staff, Device Platform",
      location: "Los Angeles, CA / Remote",
      type: "full-time",
      link: "https://www.rabbit.tech/careers/member-of-technical-staff-device-platform",
      appLink: "https://boards.greenhouse.io/rabbit/jobs/4060666007",
    },
    {
      title: "Member of Technical Staff, Machine Learning",
      location: "Los Angeles, CA / Remote",
      type: "full-time",
      link: "https://www.rabbit.tech/careers/member-of-technical-staff-machine-learning",
      appLink: "https://boards.greenhouse.io/rabbit/jobs/4060726007",
    },
    {
      title: "Software Engineer",
      location: "Los Angeles, CA / Remote",
      type: "full-time",
      link: "https://www.rabbit.tech/careers/software-engineer",
      appLink: "https://boards.greenhouse.io/rabbit/jobs/4060924007",
    },
    {
      title: "Resident",
      location: "Los Angeles, CA",
      type: "full-time",
      link: "https://www.rabbit.tech/careers/resident",
      appLink: "https://boards.greenhouse.io/rabbit/jobs/4060927007",
    },
    {
      title: "General Application",
      location: "Los Angeles, CA / Remote",
      type: "full-time",
      link: "https://www.rabbit.tech/careers/general-application",
      appLink: "https://boards.greenhouse.io/rabbit/jobs/4060929007",
    },
  ];
  return (
    <>
      <div className="mt-4 flex w-[92%] mx-auto">
        <div className="w-1/2">
          <p className="text-5xl">open roles</p>
        </div>
        <div className="w-1/2">
          <p className="text-2xl">
            We are currently seeking talented individuals to join our team in{" "}
            <br />
            Santa Monica, CA.
          </p>
        </div>
      </div>
      <div className="w-[92%] my-36 mx-auto">
        {roles.map((role, key) => (
          <React.Fragment key={key}>
            <Role {...role}></Role>
            <Divider></Divider>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default CareersRoles;
