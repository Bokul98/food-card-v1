import Hero from "@/Components/Home/Hero";
import RegularDish from "@/Components/Home/RegularDish";
import WhyChoose from "@/Components/Home/WhyChoose";
import React from "react";

function HomePage() {
  return (
    <div>
      <Hero />
      <RegularDish />
      <WhyChoose />
    </div>
  );
}

export default HomePage;
