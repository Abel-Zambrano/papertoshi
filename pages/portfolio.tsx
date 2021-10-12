import Page from "../components/Page";
import Image from "next/image";

export default function Portfolio() {
  return (
    <Page>
      <div style={{ width: "1000px" }}>
        <Image
          src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          width={1000}
          height={800}
        />
      </div>
    </Page>
  );
}
