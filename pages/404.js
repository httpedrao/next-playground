import { useRouter } from "next/router";

const CityItem = () => {
  const router = useRouter();
  const { country, province, city, neighborhood } = router.query;

  return (
    <>
      <h2>
       ooops
      </h2>
    </>
  );
};

export default CityItem;
