import { useRouter } from "next/router";

const NeighborhoodItem = () => {
  const router = useRouter();
  const { country, province, city, neighborhood } = router.query;

  return (
    <>
      <h2>
        the {neighborhood} neighborhood, in {city} is placed in {province} which itself is in {country}
      </h2>
    </>
  );
};

export default NeighborhoodItem;
