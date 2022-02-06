import { useRouter } from "next/router";
import React from "react";

const newsId = () => {
  const router = useRouter();
  const param = router.query.newsId;
  console.log(param);
  return <div>{param}</div>;
};

export default newsId;
