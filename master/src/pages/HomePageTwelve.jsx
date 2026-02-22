import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashBoardLayerEleven from "../components/DashBoardLayerEleven";

const HomePageTwelve = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Booking System' />

        {/* DashBoardLayerEleven */}
        <DashBoardLayerEleven />
      </MasterLayout>
    </>
  );
};

export default HomePageTwelve;
