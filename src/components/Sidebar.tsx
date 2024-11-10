import CreateCommunity from "./CommunityForm/CreateCommunity";
import FullScreenModal from "./FullScreenModal";
import SideBarButton from "./SideBarButton";
import SidebarSection from "./SideBarSection";
import { FiPlus } from "react-icons/fi";

export default async function Sidebar() {
  return (
    <div className="sticky top-0 h-full w-72 border-r border-border bg-background p-2 px-4">
      <SidebarSection header="RECENT">
        <SideBarButton header="r/learnjavascript" photo="w" />
        <SideBarButton header="r/learnjavascript" photo="w" />
        <SideBarButton header="r/learnjavascript" photo="w" />
        <SideBarButton header="r/learnjavascript" photo="w" />
      </SidebarSection>
      <SidebarSection header="COMMUNITIES">
        <CreateCommunity />
      </SidebarSection>
    </div>
  );
}
