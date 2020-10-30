import Head from "next/head";
import Link from "next/link";

const cityList = [
  {
    country: "USA",
    province: "CA",
    city: "Los Angeles",
  },
  {
    country: "Brazil",
    province: "SP",
    city: "sao-paulo",
    neighborhood: "Moema"
  },
  {
    country: "England",
    city: "London",
  },
];

const Index = () => (
  <>
    <Head>
      <title>Next Playground</title>
    </Head>
    <div>
      <Link href="/about">
        <a>About App</a>
      </Link>
    </div>
    <hr />
    <ul>
      {cityList.map((item, index) => (
        <li key={index}>
          <Link as={`/${item.country}/${item.province}/${item.city}/${item.neighborhood}`} href="/[country]/[province]/[city]/[neighborhood]">
            <a>
              {item.country}-{item.province}-{item.city}-{item.neighborhood}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Index;
