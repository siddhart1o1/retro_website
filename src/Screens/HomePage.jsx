import React from "react";
import TopSection from "../components/HomeScreen/TopSection";
import MiddleSection from "../components/HomeScreen/MiddleSection";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
  let { category } = useParams();
  if (!category) category = "Newest";

  return (
    <div>
      <TopSection category={category}></TopSection>
      <MiddleSection category={category}></MiddleSection>
    </div>
  );
}
