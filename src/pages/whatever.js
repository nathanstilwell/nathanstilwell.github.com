import React from "react";
import { Library, Example } from "@compositor/kit";
import Link from "../components/Link";

export default props => (
  <Library>
    <Example name="Link">
      <Link href="https://nathanstilwell.com" text="a to nathanstilwell.com" />
      <Link href="/resume" text="an internal link" />
    </Example>
  </Library>
);
