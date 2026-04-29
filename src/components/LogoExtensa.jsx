import React from 'react';

const LogoExtensa = ({ className }) => {
  return (
    <svg 
      width="1733" 
      height="155" 
      viewBox="0 0 1733 155" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        maskImage: 'linear-gradient(to right, white var(--reveal-percent, 0%), transparent var(--reveal-percent, 0%))',
        WebkitMaskImage: 'linear-gradient(to right, white var(--reveal-percent, 0%), transparent var(--reveal-percent, 0%))',
        animation: 'revealLogo 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      }}
    >
      <style>{`
        @keyframes revealLogo {
          0% { 
            --reveal-percent: 0%; 
            opacity: 0;
            transform: scale(0.95);
          }
          20% {
            opacity: 1;
          }
          100% { 
            --reveal-percent: 100%; 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @property --reveal-percent {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 0%;
        }

        .logo-path {
          animation: pathFade 1.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes pathFade {
          to { opacity: 1; }
        }
      `}</style>
      <g id="logo-extensa-dourada">
        <path d="M18.1681 2.25H0V72.2083H18.1681V2.25Z" fill="url(#paint0_linear_16_44)" />
        <path d="M18.1681 80.9584H0V152.75H83.4727V149.917H18.1681V80.9584Z" fill="url(#paint1_linear_16_44)" />
        <path d="M116.292 80.9584H98.1243V152.75H116.292V80.9584Z" fill="url(#paint2_linear_16_44)" />
        <path d="M116.292 2.25H98.1243V72.2083H116.292V2.25Z" fill="url(#paint3_linear_16_44)" />
        <path d="M221.449 80.9584H187.792C206.84 91.75 224.882 104.542 224.882 128.583C224.882 145.667 205.5 152.167 189.969 152.167C171.592 152.167 157.317 138.333 157.317 128.583C157.317 117.417 158.95 115.375 158.95 104.833C158.95 100.167 155.475 94.6667 148.526 94.6667C141.996 94.6667 136.721 100.75 137.307 111.125C138.521 133.875 161.001 155 189.969 155C206.923 155 238.152 145.875 238.152 110.125C238.152 98.2084 231.245 88.9167 221.449 80.9584Z" fill="url(#paint4_linear_16_44)" />
        <path d="M171.927 72.2083H208.975C185.197 57.4583 155.475 46.375 155.475 27.625C155.475 15.6667 169.164 2.83333 188.755 2.83333C206.296 2.83333 212.407 14.4167 212.407 27.625C212.407 37.1667 217.305 41.4583 223.04 41.4583C228.775 41.4583 233.422 38 233.422 29.875C233.422 15.0417 212.407 0 189.342 0C158.322 0 143.838 19.9167 143.838 39.4167C143.838 54.375 156.564 63.5 171.927 72.2083Z" fill="url(#paint5_linear_16_44)" />
        <path d="M326.272 152.167C301.573 152.167 277.252 133.292 275.745 80.9584H254.311C255.735 124.583 283.573 155 326.272 155C368.971 155 396.809 124.583 398.233 80.9584H376.799C375.334 133.292 351.012 152.167 326.272 152.167Z" fill="url(#paint6_linear_16_44)" />
        <path d="M326.272 2.83333C350.636 2.83333 375.753 20.3333 376.841 72.2083H398.149C395.637 29.8333 362.566 0 326.272 0C289.978 0 256.865 29.8333 254.395 72.2083H275.703C276.791 20.3333 301.908 2.83333 326.272 2.83333Z" fill="url(#paint7_linear_16_44)" />
        <path d="M507.45 149.917H494.389V80.9584H476.263V152.75H507.45C564.131 152.75 595.988 124.667 597.579 80.9584H576.313C574.722 125.333 550.987 149.917 507.45 149.917Z" fill="url(#paint8_linear_16_44)" />
        <path d="M494.389 5.29167H507.45C547.47 5.29167 575.057 22.125 576.355 72.2083H597.537C595.235 28.25 563.462 2.25 507.45 2.25H476.263V72.2083H494.389V5.29167Z" fill="url(#paint9_linear_16_44)" />
        <path d="M681.135 2.83333C705.457 2.83333 730.616 20.3333 731.705 72.2083H753.012C750.501 29.8333 717.43 0 681.135 0C644.841 0 611.728 29.8333 609.258 72.2083H630.566C631.655 20.3333 656.772 2.83333 681.135 2.83333Z" fill="url(#paint10_linear_16_44)" />
        <path d="M681.135 152.167C656.395 152.167 632.073 133.292 630.608 80.9584H609.175C610.598 124.583 638.436 155 681.135 155C723.835 155 751.673 124.583 753.096 80.9584H731.663C730.156 133.292 705.834 152.167 681.135 152.167Z" fill="url(#paint11_linear_16_44)" />
        <path d="M853.397 80.9584H819.74C838.787 91.75 856.83 104.542 856.83 128.583C856.83 145.667 837.406 152.167 821.917 152.167C803.54 152.167 789.265 138.333 789.265 128.583C789.265 117.417 790.897 115.375 790.897 104.833C790.897 100.167 787.423 94.6667 780.474 94.6667C773.943 94.6667 768.669 100.75 769.255 111.125C770.469 133.875 792.949 155 821.917 155C838.871 155 870.1 145.875 870.1 110.125C870.1 98.2084 863.193 88.9167 853.397 80.9584Z" fill="url(#paint12_linear_16_44)" />
        <path d="M803.874 72.2083H840.922C817.145 57.4583 787.423 46.375 787.423 27.625C787.423 15.6667 801.112 2.83333 820.703 2.83333C838.243 2.83333 844.355 14.4167 844.355 27.625C844.355 37.1667 849.253 41.4583 854.988 41.4583C860.723 41.4583 865.37 38 865.37 29.875C865.37 15.0417 844.355 0 821.289 0C790.269 0 775.785 19.9167 775.785 39.4167C775.785 54.375 788.511 63.5 803.874 72.2083Z" fill="url(#paint13_linear_16_44)" />
        <path d="M1031.14 80.9584H997.444C1016.49 91.75 1034.53 104.542 1034.53 128.583C1034.53 145.667 1015.15 152.167 999.621 152.167C981.285 152.167 966.969 138.333 966.969 128.583C966.969 117.417 968.601 115.375 968.601 104.833C968.601 100.167 965.168 94.6667 958.219 94.6667C951.689 94.6667 946.372 100.75 947 111.125C948.214 133.875 970.652 155 999.621 155C1016.57 155 1047.8 145.875 1047.8 110.125C1047.8 98.2084 1040.94 88.9167 1031.14 80.9584Z" fill="url(#paint14_linear_16_44)" />
        <path d="M981.578 72.2083H1018.67C994.849 57.4583 965.169 46.375 965.169 27.625C965.169 15.6667 978.815 2.83333 998.407 2.83333C1015.95 2.83333 1022.1 14.4167 1022.1 27.625C1022.1 37.1667 1027 41.4583 1032.69 41.4583C1038.38 41.4583 1043.12 38 1043.12 29.875C1043.12 15.0417 1022.1 0 999.035 0C968.015 0 953.531 19.9167 953.531 39.4167C953.531 54.375 966.257 63.5 981.578 72.2083Z" fill="url(#paint15_linear_16_44)" />
        <path d="M1135.97 152.167C1111.22 152.167 1086.9 133.292 1085.44 80.9584H1064C1065.43 124.583 1093.22 155 1135.97 155C1178.71 155 1206.5 124.583 1207.93 80.9584H1186.49C1184.99 133.292 1160.66 152.167 1135.97 152.167Z" fill="url(#paint16_linear_16_44)" />
        <path d="M1135.97 2.83333C1160.29 2.83333 1185.45 20.3333 1186.53 72.2083H1207.84C1205.33 29.8333 1172.26 0 1135.97 0C1099.67 0 1066.56 29.8333 1064.09 72.2083H1085.4C1086.48 20.3333 1111.6 2.83333 1135.97 2.83333Z" fill="url(#paint17_linear_16_44)" />
        <path d="M1230.2 80.9584H1226.93V152.75H1230.2V80.9584Z" fill="url(#paint18_linear_16_44)" />
        <path d="M1319.19 120.25L1294.66 80.9584H1273.1L1318.19 152.75H1322.25V80.9584H1319.19V120.25Z" fill="url(#paint19_linear_16_44)" />
        <path d="M1245.52 2.25H1226.93V72.2083H1230.2V12.5833L1267.62 72.2083H1289.18L1245.52 2.25Z" fill="url(#paint20_linear_16_44)" />
        <path d="M1322.25 2.25H1319.19V72.2083H1322.25V2.25Z" fill="url(#paint21_linear_16_44)" />
        <path d="M1453.07 2.25H1434.9V72.2083H1453.07V2.25Z" fill="url(#paint22_linear_16_44)" />
        <path d="M1364.28 80.9584H1346.11V152.75H1364.28V80.9584Z" fill="url(#paint23_linear_16_44)" />
        <path d="M1364.28 2.25H1346.11V72.2083H1364.28V2.25Z" fill="url(#paint24_linear_16_44)" />
        <path d="M1453.07 80.9584H1434.9V152.75H1453.07V80.9584Z" fill="url(#paint25_linear_16_44)" />
        <path d="M1544.08 2.83333C1568.4 2.83333 1593.56 20.3333 1594.65 72.2083H1615.91C1613.4 29.8333 1580.33 0 1544.08 0C1507.82 0 1474.67 29.8333 1472.2 72.2083H1493.47C1494.55 20.3333 1519.71 2.83333 1544.08 2.83333Z" fill="url(#paint26_linear_16_44)" />
        <path d="M1544.08 152.167C1519.34 152.167 1495.01 133.292 1493.51 80.9584H1472.12C1473.54 124.583 1501.34 155 1544.08 155C1586.82 155 1614.57 124.583 1616 80.9584H1594.6C1593.1 133.292 1568.78 152.167 1544.08 152.167Z" fill="url(#paint27_linear_16_44)" />
        <path d="M1666.77 72.2083H1703.86C1680.04 57.4583 1650.36 46.375 1650.36 27.625C1650.36 15.6667 1664.05 2.83333 1683.64 2.83333C1701.18 2.83333 1707.3 14.4167 1707.3 27.625C1707.3 37.1667 1712.19 41.4583 1717.93 41.4583C1723.66 41.4583 1728.31 38 1728.31 29.875C1728.31 15.0417 1707.3 0 1684.23 0C1653.21 0 1638.73 19.9167 1638.73 39.4167C1638.73 54.375 1651.45 63.5 1666.77 72.2083Z" fill="url(#paint28_linear_16_44)" />
        <path d="M1716.34 80.9584H1682.64C1701.69 91.75 1719.73 104.542 1719.73 128.583C1719.73 145.667 1700.35 152.167 1684.86 152.167C1666.48 152.167 1652.21 138.333 1652.21 128.583C1652.21 117.417 1653.84 115.375 1653.84 104.833C1653.84 100.167 1650.36 94.6667 1643.42 94.6667C1636.88 94.6667 1631.57 100.75 1632.2 111.125C1633.41 133.875 1655.89 155 1684.86 155C1701.77 155 1733 145.875 1733 110.125C1733 98.2084 1726.13 88.9167 1716.34 80.9584Z" fill="url(#paint29_linear_16_44)" />
        <path d="M1364.28 80.9584H1434.9V72.2083H1364.28V80.9584Z" fill="url(#paint30_linear_16_44)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint1_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint2_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint3_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint4_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint5_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint6_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint7_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint8_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint9_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint10_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint11_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint12_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint13_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint14_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint15_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint16_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint17_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint18_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint19_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint20_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint21_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint22_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint23_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint24_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint25_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint26_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint27_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint28_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint29_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
        <linearGradient id="paint30_linear_16_44" x1="0" y1="77.5" x2="1733" y2="77.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C78A3E" />
          <stop offset="0.315187" stopColor="#FDE9A1" />
          <stop offset="0.63656" stopColor="#956A30" />
          <stop offset="1" stopColor="#FDD185" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoExtensa;
