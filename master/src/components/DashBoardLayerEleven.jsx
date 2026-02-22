import BookingStatisticsOne from "./child/BookingStatisticsOne";
import SemiCircleGauge from "./child/SemiCircleGauge";
import TravelSliderOne from "./child/TravelSliderOne";
import UnitCountNine from "./child/UnitCountNine";

const DashBoardLayerEleven = () => {
  return (
    <>
      <div className='mb-24'>
        <div className='row gy-4'>
          {/* UnitCountNine */}
          <UnitCountNine />

          {/* SemiCircleGauge */}
          <SemiCircleGauge />

          {/* BookingStatisticsOne */}
          <BookingStatisticsOne />
        </div>
      </div>

      <div className='row g-4'>
        <div className='col-xl-8'>
          <div className='d-flex flex-column gap-24'>
            {/* TravelSliderOne */}
            <TravelSliderOne />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayerEleven;
