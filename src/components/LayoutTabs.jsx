import React from "react";
import { NavLink } from "react-router-dom";

const LayoutTabs = () => {
  return (
    <nav className="py-0.5 bg-black border-t-2 border-secondary">
      <div className="container">
        {/* tabs */}
        <ul className="flex items-center justify-between">
          {/* home */}
          <li>
            <NavLink to="/" className="layout-tabs-link">
              {/* icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    stroke="white"
                    strokeWidth="2"
                    className="fill"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
                  ></path>
                </g>
              </svg>

              {/* text */}
              <h3 className="text-xs">Uy</h3>
            </NavLink>
          </li>

          {/* docs */}
          <li>
            <NavLink to="/docs" className="layout-tabs-link">
              {/* icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Style=Line">
                  <path
                    id="Vector"
                    stroke="white"
                    strokeWidth="2"
                    className="fill"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H8M8 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H8M8 4V20M12 11H16M12 8H16"
                  ></path>
                </g>
              </svg>

              {/* text */}
              <h3 className="text-xs">Ma'lumot</h3>
            </NavLink>
          </li>

          {/* balance */}
          <li>
            <NavLink to="/balance" className="layout-tabs-link">
              {/* icon */}

              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                  />
                  <path
                    d="M12 6V18"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <path
                  stroke="#ffffff"
                  className="fill"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                />
              </svg>

              {/* text */}
              <h3 className="text-xs">Balans</h3>
            </NavLink>
          </li>

          {/* account */}
          <li>
            <NavLink to="/account" className="layout-tabs-link">
              {/* icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  r="4"
                  cy="6"
                  cx="12"
                  stroke="#fff"
                  strokeWidth="2"
                  className="fill"
                />
                <ellipse
                  rx="7"
                  ry="4"
                  cx="12"
                  cy="17"
                  stroke="#fff"
                  strokeWidth="2"
                  className="fill"
                />
              </svg>

              {/* text */}
              <h3 className="text-xs">Hisob</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LayoutTabs;
