import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = {
  children?: any;
};

const Page = ({ children }: Props) => {
  return (
    <>
      <Header className="header" title="Papertoshi" />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Page;
