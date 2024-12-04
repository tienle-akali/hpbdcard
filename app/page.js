import { Suspense } from "react";
import BirthdayCard from "./components/BirthdayCard";

export default function Page() {
  return (
    <Suspense>
      <BirthdayCard />
    </Suspense>
  );
}
