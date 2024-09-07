import React from "react";

const MealsDetailPage = ({params}) => {
  return (
    <main>
      <h1>MealsDetailPage</h1>
      <p>
        {params.slug}
      </p>
    </main>
  );
};

export default MealsDetailPage;
