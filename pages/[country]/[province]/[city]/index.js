import { useRouter } from "next/router";

const CityItem = () => {
  const router = useRouter();
  const { province, city } = router.query;

  return (
    <>
      <h2>
        {city} is located in {province}
      </h2>
    </>
  );
};

export default CityItem;
