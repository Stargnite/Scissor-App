import Trimmer from "./../Trimmer/Trimmer";
import DashboardNav from "./DashboardNav";

export default function Dashboard({user}) {
  return (
    <div>
      <DashboardNav user={user} />
      <Trimmer />
    </div>
  );
}
