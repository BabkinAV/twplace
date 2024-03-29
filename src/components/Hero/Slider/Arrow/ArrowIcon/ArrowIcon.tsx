import React from 'react';

const ArrowIcon = ({ inactive }: { inactive?: boolean }) => {
  return (
    <div className="arrow__icon">
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.91778 8.99946L1.0971 16.1428C0.824085 16.4151 0.824085 16.8569 1.0971 17.1293C1.37011 17.4016 1.81331 17.4016 2.08632 17.1293L10.4086 9.52812C10.5545 9.38293 10.6163 9.18981 10.6066 9.00017C10.6163 8.80982 10.5545 8.61741 10.4086 8.47221L2.08632 0.87109C1.81331 0.598772 1.37011 0.598772 1.0971 0.87109C0.824085 1.14339 0.824085 1.58522 1.0971 1.85752L8.91778 8.99946Z"
          fill={inactive ? '#000' : '#fff'}
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
