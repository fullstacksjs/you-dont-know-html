import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";
// eslint-disable-next-line max-lines-per-function
export default function Favicon() {
  return new ImageResponse(
    (
      <svg
        height="32"
        width="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 301"
      >
        <path
          clipRule="evenodd"
          d="m207.246 212.006 12.612-138.065H80.142L92.758 212.06l57.148 15.657z"
          fill="url(#paint0_linear_4475_856)"
          fillRule="evenodd"
        ></path>
        <path
          d="m199.264 209.013-50.507 13.861-49.525-14.043v1.764l50.377 14.048 51.286-13.999 11.821-132.107h-1.997z"
          fill="#000"
          style={{ mixBlendMode: "soft-light" }}
          opacity="0.3"
        ></path>
        <path
          d="M213.275 76.168H87.091l12.234 134.573 2.128.583L89.374 78.451h123.443z"
          fill="#E16117"
        ></path>
        <g filter="url(#filter0_i_4475_856)">
          <path
            d="M110.921 129.912V119.55l-9.243-18.847h7.743l3.127 6.84 1.969 4.991 1.968-4.991 3.128-6.84h7.498l-9.243 18.847v10.362z"
            fill="#2A2E39"
          ></path>
        </g>
        <g filter="url(#filter1_i_4475_856)">
          <path
            clipRule="evenodd"
            d="M128.757 100.703h9.574c3.918 0 6.894 1.255 8.837 3.825 1.921 2.54 2.851 6.153 2.851 10.779s-.93 8.24-2.851 10.78c-1.943 2.57-4.919 3.825-8.837 3.825h-9.574zm9.167 23.568c1.72 0 2.902-.546 3.642-1.572.767-1.063 1.18-2.654 1.18-4.832v-5.16c0-2.15-.413-3.728-1.18-4.791-.74-1.026-1.922-1.572-3.642-1.572h-2.301v17.927z"
            fill="#2A2E39"
            fillRule="evenodd"
          ></path>
        </g>
        <g filter="url(#filter2_i_4475_856)">
          <path
            d="m176.195 129.912-9.12-16.769 8.82-12.44h-7.871l-5.132 7.337-2.642 4.029v-11.366h-6.947v29.209h6.947v-8.577l2.045-2.867 6.06 11.444z"
            fill="#2A2E39"
          ></path>
        </g>
        <g filter="url(#filter3_i_4475_856)">
          <path d="M180.615 120.402v-6.617h13.86v6.617z" fill="#2A2E39"></path>
        </g>
        <g filter="url(#filter4_i_4475_856)">
          <path
            d="M104.252 163.774h6.988v-11.865h6.31v11.865h6.987v-29.209h-6.987v11.499h-6.31v-11.499h-6.988z"
            fill="#2A2E39"
          ></path>
        </g>
        <g filter="url(#filter5_i_4475_856)">
          <path
            d="M142.252 163.774h-6.947V140.41h-8.174v-5.845h23.294v5.845h-8.173z"
            fill="#2A2E39"
          ></path>
        </g>
        <g filter="url(#filter6_i_4475_856)">
          <path
            d="m168.325 144.372-.26 6.333v13.069h6.134v-29.209h-7.43l-3.364 9.185-3.363-9.185h-7.918v29.209h6.134v-13.069l-.26-6.333 5.163 14.249z"
            fill="#2A2E39"
          ></path>
        </g>
        <g filter="url(#filter7_i_4475_856)">
          <path
            d="M178.663 163.774v-29.209h6.988v23.365h12.199v5.844z"
            fill="#2A2E39"
          ></path>
        </g>
        <g filter="url(#filter8_d_4475_856)">
          <path
            clipRule="evenodd"
            d="M222.069 231.05a3.6 3.6 0 0 0 2.613-3.139l15.817-173.168c.191-2.09-1.453-3.914-3.552-3.914H63.053a3.57 3.57 0 0 0-3.554 3.894L75.326 228a3.57 3.57 0 0 0 2.612 3.117l70.997 19.452a3.57 3.57 0 0 0 1.886 0zM87.339 80.12a3.57 3.57 0 0 1 3.555-3.895h118.212a3.57 3.57 0 0 1 3.554 3.894l-11.689 127.975a3.57 3.57 0 0 1-2.612 3.118l-47.538 13.024c-.617.17-1.269.17-1.886 0l-47.288-12.956a3.57 3.57 0 0 1-2.611-3.118z"
            fill="#F4F4F4"
            fillRule="evenodd"
          ></path>
        </g>
        <defs>
          <filter
            height="29.209"
            width="25.433"
            filterUnits="userSpaceOnUse"
            id="filter0_i_4475_856"
            x="101.678"
            y="100.703"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2.283" dy="2.283"></feOffset>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_4475_856"
            ></feBlend>
          </filter>
          <filter
            height="29.209"
            width="21.262"
            filterUnits="userSpaceOnUse"
            id="filter1_i_4475_856"
            x="128.757"
            y="100.703"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2.283" dy="2.283"></feOffset>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_4475_856"
            ></feBlend>
          </filter>
          <filter
            height="29.209"
            width="22.892"
            filterUnits="userSpaceOnUse"
            id="filter2_i_4475_856"
            x="153.303"
            y="100.703"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2.283" dy="2.283"></feOffset>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_4475_856"
            ></feBlend>
          </filter>
          <filter
            height="6.617"
            width="13.86"
            filterUnits="userSpaceOnUse"
            id="filter3_i_4475_856"
            x="180.615"
            y="113.785"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2.283" dy="2.283"></feOffset>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_4475_856"
            ></feBlend>
          </filter>
          <filter
            height="29.209"
            width="20.285"
            filterUnits="userSpaceOnUse"
            id="filter4_i_4475_856"
            x="104.252"
            y="134.565"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2.283" dy="2.283"></feOffset>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_4475_856"
            ></feBlend>
          </filter>
          <filter
            height="29.209"
            width="23.294"
            filterUnits="userSpaceOnUse"
            id="filter5_i_4475_856"
            x="127.131"
            y="134.565"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2.283" dy="2.283"></feOffset>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_4475_856"
            ></feBlend>
          </filter>
          <filter
            height="29.209"
            width="22.075"
            filterUnits="userSpaceOnUse"
            id="filter6_i_4475_856"
            x="152.124"
            y="134.565"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2.283" dy="2.283"></feOffset>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_4475_856"
            ></feBlend>
          </filter>
          <filter
            height="29.209"
            width="19.187"
            filterUnits="userSpaceOnUse"
            id="filter7_i_4475_856"
            x="178.663"
            y="134.565"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2.283" dy="2.283"></feOffset>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_4475_856"
            ></feBlend>
          </filter>
          <filter
            height="202.869"
            width="184.031"
            filterUnits="userSpaceOnUse"
            id="filter8_d_4475_856"
            x="59.483"
            y="50.829"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="3" dy="3"></feOffset>
            <feColorMatrix values="0 0 0 0 0.580392 0 0 0 0 0.580392 0 0 0 0 0.580392 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4475_856"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_4475_856"
              result="shape"
            ></feBlend>
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_4475_856"
            x1="195.623"
            x2="130.518"
            y1="213.13"
            y2="78.547"
          >
            <stop stopColor="#E37633"></stop>
            <stop offset="1" stopColor="#FFC06B"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    size,
  );
}
