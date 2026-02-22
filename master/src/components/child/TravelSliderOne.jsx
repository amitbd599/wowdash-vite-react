const TravelSliderOne = () => {
  return (
    <div className=''>
      <div className='d-flex align-items-center justify-content-between mb-16'>
        <h6 className='text-lg mb-0'>Exclusive Travel Packages</h6>
        <div className='d-flex align-items-center gap-16'>
          <button
            type='button'
            id='instructor-prev'
            className='slick-prev slick-arrow d-flex align-items-center rounded-circle border border-neutral-400 text-neutral-600 text-2xl bg-hover-primary-600 hover-text-white d-flex align-items-center justify-content-center w-40-px h-40-px position-relative top-0 start-0 end-0 transform-unset'
          >
            <i className='ri-arrow-left-s-line' />
          </button>
          <button
            type='button'
            id='instructor-next'
            className='slick-next slick-arrow d-flex align-items-center rounded-circle border border-neutral-400 text-neutral-600 text-2xl bg-hover-primary-600 hover-text-white d-flex align-items-center justify-content-center w-40-px h-40-px position-relative top-0 start-0 end-0 transform-unset'
          >
            <i className='ri-arrow-right-s-line' />
          </button>
        </div>
      </div>
      <div className='travel-slider'>
        <div className='bg-base p-6 radius-12'>
          <div className='radius-8 overflow-hidden'>
            <img
              src='assets/images/home-twelve/travel-img1.png'
              alt='Image'
              className='w-100 h-100 object-fit-cover'
            />
          </div>
          <div className='p-8 pt-16'>
            <h6 className='text-md mb-1'>Paris</h6>
            <span className='text-secondary-light'>5 Days, 6 Nights</span>
            <div className='mt-10 d-flex align-items-center justify-content-between gap-10'>
              <span className='fw-semibold text-secondary-light text-sm'>
                $12,000
              </span>
              <div className='d-flex align-items-center gap-1'>
                <span className='text-primary-600 line-height-1 text-md fw-medium'>
                  <i className='ri-user-3-line' />
                </span>
                <span className='text-sm fw-medium'>(280)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-base p-6 radius-12'>
          <div className='radius-8 overflow-hidden'>
            <img
              src='assets/images/home-twelve/travel-img2.png'
              alt='Image'
              className='w-100 h-100 object-fit-cover'
            />
          </div>
          <div className='p-8 pt-16'>
            <h6 className='text-md mb-1'>İstanbul</h6>
            <span className='text-secondary-light'>6 Days, 7 Nights</span>
            <div className='mt-10 d-flex align-items-center justify-content-between gap-10'>
              <span className='fw-semibold text-secondary-light text-sm'>
                $7,000
              </span>
              <div className='d-flex align-items-center gap-1'>
                <span className='text-primary-600 line-height-1 text-md fw-medium'>
                  <i className='ri-user-3-line' />
                </span>
                <span className='text-sm fw-medium'>(280)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-base p-6 radius-12'>
          <div className='radius-8 overflow-hidden'>
            <img
              src='assets/images/home-twelve/travel-img3.png'
              alt='Image'
              className='w-100 h-100 object-fit-cover'
            />
          </div>
          <div className='p-8 pt-16'>
            <h6 className='text-md mb-1'>London</h6>
            <span className='text-secondary-light'>4 Days, 5 Nights</span>
            <div className='mt-10 d-flex align-items-center justify-content-between gap-10'>
              <span className='fw-semibold text-secondary-light text-sm'>
                $15,000
              </span>
              <div className='d-flex align-items-center gap-1'>
                <span className='text-primary-600 line-height-1 text-md fw-medium'>
                  <i className='ri-user-3-line' />
                </span>
                <span className='text-sm fw-medium'>(280)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-base p-6 radius-12'>
          <div className='radius-8 overflow-hidden'>
            <img
              src='assets/images/home-twelve/travel-img4.png'
              alt='Image'
              className='w-100 h-100 object-fit-cover'
            />
          </div>
          <div className='p-8 pt-16'>
            <h6 className='text-md mb-1'>Bangkok</h6>
            <span className='text-secondary-light'>3 Days, 4 Nights</span>
            <div className='mt-10 d-flex align-items-center justify-content-between gap-10'>
              <span className='fw-semibold text-secondary-light text-sm'>
                $5,000
              </span>
              <div className='d-flex align-items-center gap-1'>
                <span className='text-primary-600 line-height-1 text-md fw-medium'>
                  <i className='ri-user-3-line' />
                </span>
                <span className='text-sm fw-medium'>(220)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-base p-6 radius-12'>
          <div className='radius-8 overflow-hidden'>
            <img
              src='assets/images/home-twelve/travel-img2.png'
              alt='Image'
              className='w-100 h-100 object-fit-cover'
            />
          </div>
          <div className='p-8 pt-16'>
            <h6 className='text-md mb-1'>İstanbul</h6>
            <span className='text-secondary-light'>6 Days, 7 Nights</span>
            <div className='mt-10 d-flex align-items-center justify-content-between gap-10'>
              <span className='fw-semibold text-secondary-light text-sm'>
                $7,000
              </span>
              <div className='d-flex align-items-center gap-1'>
                <span className='text-primary-600 line-height-1 text-md fw-medium'>
                  <i className='ri-user-3-line' />
                </span>
                <span className='text-sm fw-medium'>(280)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelSliderOne;
