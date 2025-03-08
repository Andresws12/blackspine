import Demon from "@/components/sections/components/common/demon";

import Style from "./main.module.scss";

export default function Main() {
  return (
    <section className={`${Style.main}`}>
      <h1 className={Style.main_title}>Blackspine</h1>
      <Demon />
    </section>
  );
}
