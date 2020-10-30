import { useRouter } from "next/router";

const ProvinceItem = () => {
  const router = useRouter();
  const { province } = router.query;

  return (
    <>
      <h2>We are in {province} !!</h2>
    </>
  );
};

export default ProvinceItem;