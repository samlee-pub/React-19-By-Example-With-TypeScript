/**
 * This component is used to render dynamic components based on the pathId parameter.
 * It uses the useParams hook from react-router-dom to access the pathId parameter.
 * The pathId parameter is used to determine which component to render.
 */
import { useParams } from "react-router";
import {
  DashboardUsers,
  DashboardSettings,
  DashboardProfile,
  NotFound,
} from "../page-components/PageComponents";

export function DynamicComponent() {
  const { pathId } = useParams();
  const getComponent = (pathurl: string | undefined) => {
    switch (pathurl) {
      case "users":
        return <DashboardUsers />;
      case "settings":
        return <DashboardSettings />;
      case "profile":
        return <DashboardProfile />;
      default:
        return <NotFound />;
    }
  };
  return getComponent(pathId);
}
