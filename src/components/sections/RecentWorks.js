import RecentWorksDefault from "./recentWorks/RecentWorksDefault";
import RecentWorksFitness from "./recentWorks/RecentWorksFitness";
import RecentWorksLawyer from "./recentWorks/RecentWorksLawyer";
import RecentWorksMusician from "./recentWorks/RecentWorksMusician";
import RecentWorksWritter from "./recentWorks/RecentWorksWritter";
import RecentAboutCong from "./recentWorks/RecentAboutCong";

const RecentWorks = ({ user }) => {
  switch (user) {
    case "cong":
      return <RecentAboutCong />;
    case "trainer":
      return <RecentWorksFitness />;
    case "lawyer":
      return <RecentWorksLawyer />;
    case "writer":
      return <RecentWorksWritter />;
    case "musician":
      return <RecentWorksMusician />;
    default:
      return <RecentWorksDefault />;
  }
};
export default RecentWorks;
