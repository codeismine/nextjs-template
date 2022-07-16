import HomeComponent from "@/components/home";
import DefaultLayout from "@/components/layout/DefaultLayout";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      <HomeComponent />
    </DefaultLayout>
  );
};

export default HomePage;
