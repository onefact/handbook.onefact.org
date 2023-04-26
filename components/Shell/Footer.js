import React from 'react';

import { AppLink as Link } from '../AppLink';
import { ThemeToggle } from '.';

export function Footer({ children: links, landing }) {
  const copyright = (
    <Link href="/">
      <svg title="onefact.org" width="99"
        height="28" fill="none"
        enableBackground="new 0 0 1197.5 507.5" version="1.1" viewBox="0 0 1197.5 507.5" xmlns="http://www.w3.org/2000/svg">
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="923.5 313.5 911.5 334 1126.4 334 1114.5 313.5"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="937.2 289.9 925.3 310.4 1112.7 310.4 1100.7 289.9"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1086.9 266.3 951 266.3 939 286.8 1098.9 286.8"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1073.2 242.7 964.8 242.7 952.8 263.2 1085.1 263.2"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1071.4 239.6 1059.4 219.1 978.5 219.1 966.6 239.6"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1006.1 171.8 994.1 192.3 1006.6 192.3 1040 185.9 1031.8 171.8"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1019 149.8 1007.9 168.7 1030 168.7"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="642.5 333.4 631 313.6 619.4 333.4"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m207.2 168.7h-1.4c-10.2 0-18.6 10.4-22.8 19.2l-5 10.6v-28.9h-23.8v163.8h24.3v-122.7c0-4.1 0-16.4 10.9-16.4 6.9 0 10.4 5.1 10.4 15.2v124h24.6v-141.4c0.1-8.7-3.5-23.4-17.2-23.4z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m306 253v-46.1c0-26.9-9.7-39.5-30.5-39.5h-5.5c-27.1 0-31.1 23.8-31.1 37.9v91.4c0 25.7 10.7 39.8 30 39.8h5.2c21.2 0 31.9-13.5 31.9-40.1v-26.9h-23.2v25.3c0 11-5.2 14.9-10.1 14.9-7.1 0-10.6-5.1-10.6-15.2v-41.5h43.9zm-44-46.4c0-5.6 0-16.1 10.9-16.1 10.6 0 10.6 11.3 10.6 16.1v24h-21.5v-24z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m365.8 130.8h10.7v-25.9h-25.3c-16.6 0-18.4 13.3-18.4 19.1v45.7h-17.7v26.8h17.7v137h24.3v-137h19.4v-26.8h-19.3v-28.1c-0.1-3.5-0.1-10.8 8.6-10.8z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m451.9 299.6v-100.5c0-15.9-3.7-30.7-30.8-30.7h-5.5c-19.2 0-28.6 9.6-28.6 29.4v21.3h21.3v-15.3c0-6.6 1.2-13.3 10.1-13.3h0.6c8.6 0 9.8 6.6 9.8 13.6v10.7c0 5.2-1 7-4.8 9.4-1.3 0.8-3.7 2.1-6.5 3.7-6.2 3.4-14.6 8.1-19.1 11.3-9.5 6.8-13 15.4-13 31.8v39.6c0 11.7 6 23.8 16.2 23.8h0.8c11.1 0 19-11.6 21.9-18.5l5-11.9v12.9c0 16.5 4.8 16.5 7.1 16.5h25.6v-25.9h-2.6c-6.6 0-7.5-3.8-7.5-7.9zm-23.2-5.4c0 13.7-7 15.2-10.1 15.2-6.3 0-9.5-4.6-9.5-13.6v-23.2c0-6.5 0.7-10.9 4.5-15.2 3.2-3.6 7.4-6.5 11-8.9l4.1-2.7v48.4z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m513.8 208.5v20.3h23.2v-27.5c0-23-9.8-34.1-30-34.1h-5.2c-21.7 0-32.8 13.1-32.8 38.8v92c0 23.9 11.8 38.2 31.6 38.2h5.5c22.7 0 30.8-19.6 30.8-37.9v-35.4h-23.2v31.9c0 12.5-5.6 15.2-10.4 15.2-9.8 0-9.8-11.7-9.8-15.5v-86.4c0-6.1 0-16.4 10.1-16.4 10.2 0 10.2 9.7 10.2 16.8z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m605.6 196.4v-26.8h-17.4v-55.6h-24.3v55.6h-16.9v26.8h16.9v118.9c0 12 5.1 18.1 15.1 18.1h26.7v-27.1h-9c-7.8 0-8.4-5.2-8.4-10.5v-99.4h17.3z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m683.7 167.1h-5.5c-21.1 0-32.8 14.6-32.8 41v87c0 12.3 3.2 41 32.8 41h5.5c22.5 0 32.8-21.3 32.8-41v-88.2c-0.1-25.3-12-39.8-32.8-39.8zm8.1 126.5c0 9.9-4.1 15.8-10.9 15.8-3.3 0-10.9-1.5-10.9-15.8v-85.1c0-10.3 3.7-15.5 10.9-15.5s10.9 5.2 10.9 15.5v85.1z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m780.9 168.7h-1.1c-12.1 0-17.8 14.5-20.2 20.6l-5 12.7v-32.4h-23.8v163.8h24.3v-124.6c0-5.8 0-13 7.6-13s7.6 6.6 7.6 13v35.1h23.5v-58.6c0-6.3-1.7-16.6-12.9-16.6z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m826 168.7c-16.7 0-19.2 22.8-19.2 36.3v101.2c0 16.4 8.2 28.8 18.9 28.8 11.2 0 18.1-10.9 21.9-20.1l5-12.1v56.2c0 3.4 0 12.4-10.4 12.4h-1.1c-6.7 0-10.1-4.2-10.1-12.4v-12.5h-23.2v21.9c0 12.2 3.4 26.3 30.3 26.3h6.6c28.9 0 32.2-17.9 32.2-31.3v-193.8h-23.8v28.4l-5-10.4c-4.6-9.8-10.5-18.9-22.1-18.9zm26.7 39.5v85.5c0 9.7-4 15.5-10.6 15.5-3.2 0-10.6-1.5-10.6-15.2v-85.8c0-13.4 7.2-14.9 10.3-14.9 3.2 0 10.8 1.4 10.9 14.9z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m107.2 167.1h-5.5c-21.1 0-32.8 14.6-32.8 41v87c0 12.3 3.2 41 32.8 41h5.5c22.5 0 32.8-21.3 32.8-41v-88.2c-0.1-25.3-12-39.8-32.8-39.8zm8.1 126.5c0 9.9-4.1 15.8-10.9 15.8-3.3 0-10.9-1.5-10.9-15.8v-85.1c0-10.3 3.7-15.5 10.9-15.5s10.9 5.2 10.9 15.5v85.1z"
          fill="var(--dark)"
        />
      </svg>
    </Link>
  );

  const disclaimer = (
    <span className="disclaimer">
      <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">
      <svg width="31.75mm" height="11.112mm" version="1.1" viewBox="0 0 31.75 11.112" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-89.208 -142.94)"><g transform="matrix(.26294 0 0 .26291 42.193 123.25)"><path 
      fillRule="evenodd"
          clipRule="evenodd"
          d="m182.24 75.39 114.06 0.20312c1.5938 0 3.0176-0.23682 3.0176 3.1802l-0.13965 37.567h-119.82v-37.707c0-1.6846 0.16309-3.2436 2.8784-3.2436z" fill="#aab2ab" nodetypes="ccccccc"/><g transform="matrix(.87292 0 0 .87292 50.125 143.21)"><path cx="296.35416" cy="264.3577" rx="22.939548" ry="22.939548" d="m187.21-55.679c6e-3 8.6802-7.0279 15.721-15.708 15.727-8.6802 5e-3 -15.722-7.0279-15.727-15.708v-0.01904c-5e-3 -8.6813 7.0278-15.722 15.708-15.727 8.6813-0.0056 15.722 7.0279 15.727 15.708v0.01904z" fill="#fff" type="arc"/><g transform="translate(-289.62 99.065)"><path d="m473.88-167.55c3.4854 3.486 5.2284 7.7539 5.2284 12.803 0 5.0494-1.7128 9.2715-5.1383 12.667-3.6353 3.5766-7.9318 5.3643-12.889 5.3643-4.8978 0-9.1199-1.7726-12.665-5.3196-3.5458-3.5458-5.3184-7.783-5.3184-12.712 0-4.9286 1.7726-9.196 5.3184-12.803 3.4552-3.4865 7.6772-5.2289 12.665-5.2289 5.0483 0 9.314 1.7424 12.799 5.2289zm-23.118 2.3448c-2.9468 2.9764-4.4196 6.4629-4.4196 10.462 0 3.9984 1.4583 7.4552 4.3742 10.371 2.9165 2.9165 6.3885 4.3748 10.417 4.3748 4.0285 0 7.5302-1.4728 10.507-4.419 2.8259-2.7358 4.2394-6.1771 4.2394-10.326 0-4.118-1.4365-7.6129-4.3077-10.485-2.8706-2.8707-6.3499-4.3065-10.438-4.3065-4.0884 0-7.5464 1.4432-10.372 4.3289zm7.7545 8.7031c-0.45032-0.98163-1.1243-1.4722-2.0232-1.4722-1.5891 0-2.3834 1.0695-2.3834 3.2085 0 2.1396 0.79428 3.2091 2.3834 3.2091 1.0494 0 1.799-0.5213 2.2487-1.5651l2.2028 1.173c-1.0499 1.8655-2.6251 2.799-4.7255 2.799-1.6199 0-2.9176-0.4967-3.8921-1.4896-0.97607-0.99341-1.4627-2.3627-1.4627-4.108 0-1.7156 0.50229-3.0771 1.5075-4.0856 1.0052-1.0079 2.257-1.5125 3.7578-1.5125 2.2201 0 3.8098 0.87488 4.7708 2.6229zm10.363 0c-0.45087-0.98163-1.1115-1.4722-1.9824-1.4722-1.6211 0-2.4321 1.0695-2.4321 3.2085 0 2.1396 0.81107 3.2091 2.4321 3.2091 1.051 0 1.7872-0.5213 2.2072-1.5651l2.252 1.173c-1.0482 1.8655-2.6212 2.799-4.7177 2.799-1.6177 0-2.9126-0.4967-3.8865-1.4896-0.97217-0.99341-1.4594-2.3627-1.4594-4.108 0-1.7156 0.49448-3.0771 1.4829-4.0856 0.98782-1.0079 2.2453-1.5125 3.7735-1.5125 2.2162 0 3.8037 0.87488 4.7613 2.6229z"/></g></g><path d="m297.3 74.911h-116.23c-1.2466 0-2.2607 1.0146-2.2607 2.2612v39.496c0 0.28174 0.22852 0.51074 0.51025 0.51074h119.73c0.28174 0 0.51074-0.229 0.51074-0.51074v-39.496c0-1.2466-1.0142-2.2612-2.2607-2.2612zm-116.23 1.0215h116.23c0.68359 0 1.2393 0.55615 1.2393 1.2398v27.418h-83.074c-3.0449 5.5054-8.9111 9.2436-15.644 9.2436-6.7354 0-12.6-3.7349-15.644-9.2436h-4.3481v-27.418c-2e-5 -0.6836 0.55663-1.2398 1.2402-1.2398z"/><g enableBackground="new    " fill="#fff"><path d="m265.61 112.88c0.0801 0.15576 0.1875 0.28174 0.32129 0.37842 0.13379 0.0962 0.29004 0.16797 0.46973 0.21436 0.18066 0.0469 0.36719 0.0703 0.55957 0.0703 0.12988 0 0.26953-0.0107 0.41895-0.0327 0.14844-0.0215 0.28809-0.064 0.41895-0.12598 0.12988-0.062 0.23926-0.14795 0.3252-0.25684 0.0879-0.10889 0.13086-0.24707 0.13086-0.41553 0-0.18018-0.0576-0.32617-0.17285-0.43848-0.11426-0.1123-0.26562-0.20508-0.45215-0.28027-0.18555-0.0742-0.39746-0.13965-0.63281-0.1958-0.23633-0.0562-0.47559-0.11816-0.71777-0.18701-0.24902-0.062-0.49121-0.13818-0.72754-0.22852-0.23535-0.0898-0.44727-0.20703-0.63379-0.3501s-0.33691-0.32178-0.45215-0.53662c-0.11426-0.21484-0.17188-0.47461-0.17188-0.7793 0-0.34277 0.0732-0.63965 0.21875-0.8916 0.14648-0.25195 0.33789-0.46191 0.57422-0.63037 0.23535-0.16797 0.50293-0.29248 0.80176-0.37354 0.29785-0.0806 0.59668-0.12109 0.89453-0.12109 0.34863 0 0.68262 0.0391 1.0029 0.11719 0.31934 0.0776 0.60449 0.2041 0.85254 0.37842 0.24902 0.17432 0.44629 0.39697 0.59277 0.66797 0.14551 0.271 0.21875 0.59961 0.21875 0.98535h-1.4219c-0.0127-0.19922-0.0547-0.36426-0.125-0.49463-0.0713-0.13086-0.16602-0.2334-0.2832-0.30859-0.11816-0.0742-0.25293-0.12744-0.4043-0.1582-0.15234-0.0312-0.31738-0.0469-0.49707-0.0469-0.11719 0-0.23535 0.0127-0.35254 0.0371-0.11816 0.0254-0.22461 0.0688-0.32031 0.13086-0.0967 0.0625-0.17578 0.14014-0.2373 0.2334-0.0615 0.0937-0.0928 0.21191-0.0928 0.35498 0 0.13086 0.0244 0.23682 0.0742 0.31738 0.0498 0.0811 0.14844 0.15576 0.29395 0.22412 0.14551 0.0684 0.34766 0.13721 0.60547 0.20557 0.25781 0.0684 0.59473 0.15576 1.0117 0.26123 0.12402 0.0249 0.2959 0.0703 0.5166 0.13574 0.2207 0.0654 0.43945 0.16943 0.65723 0.3125 0.21777 0.14355 0.40527 0.33496 0.56445 0.57422 0.1582 0.23975 0.2373 0.54639 0.2373 0.91992 0 0.30518-0.0596 0.58838-0.17773 0.84961-0.11816 0.26172-0.29395 0.4873-0.52734 0.67676-0.2334 0.19043-0.52246 0.33789-0.86719 0.44385-0.3457 0.10596-0.74609 0.15869-1.1992 0.15869-0.36719 0-0.72363-0.0454-1.0693-0.13574-0.34473-0.0903-0.65039-0.23242-0.91504-0.42578-0.26367-0.19336-0.47363-0.43994-0.62988-0.73877-0.15527-0.29932-0.22949-0.65381-0.22363-1.0649h1.4219c-3e-5 0.22412 0.04 0.41406 0.12106 0.56933z"/><path d="m273.87 107.87 2.4932 6.6641h-1.5225l-0.50391-1.4844h-2.4932l-0.52246 1.4844h-1.4746l2.5205-6.6641zm0.084 4.0859-0.83984-2.4434h-0.0186l-0.86914 2.4434z"/><path d="m239.18 107.87c0.31738 0 0.60742 0.0283 0.86914 0.084 0.26172 0.0561 0.48633 0.14795 0.67383 0.27539 0.18652 0.12744 0.33203 0.29688 0.43457 0.5083s0.1543 0.47266 0.1543 0.78369c0 0.33594-0.0762 0.61523-0.22949 0.83936-0.15234 0.22412-0.37891 0.40723-0.67773 0.55029 0.41211 0.11816 0.71973 0.3252 0.92285 0.62109s0.30469 0.65234 0.30469 1.0693c0 0.33594-0.0654 0.62695-0.19629 0.87305-0.13086 0.24561-0.30762 0.44629-0.52832 0.60205-0.22168 0.15576-0.47461 0.271-0.75781 0.34521-0.28418 0.0752-0.5752 0.1123-0.875 0.1123h-3.2363v-6.6641h3.1416zm-0.1875 2.6953c0.26172 0 0.47656-0.062 0.64551-0.18604 0.16797-0.12451 0.25195-0.32568 0.25195-0.60498 0-0.15527-0.0283-0.28271-0.084-0.38184-0.0566-0.0996-0.13086-0.17676-0.22461-0.23291-0.0937-0.0557-0.20117-0.0947-0.32227-0.11621-0.12207-0.022-0.24805-0.0327-0.37891-0.0327h-1.373v1.5547zm0.0859 2.8281c0.14355 0 0.28027-0.0137 0.41113-0.042 0.13086-0.0278 0.24707-0.0747 0.34668-0.13965 0.0996-0.0654 0.17871-0.1543 0.23828-0.26611 0.0596-0.11181 0.0889-0.25488 0.0889-0.4292 0-0.3418-0.0967-0.58594-0.29004-0.73193-0.19336-0.14599-0.44922-0.21924-0.7666-0.21924h-1.5996v1.8281z"/><path d="m241.89 107.87h1.6436l1.5606 2.6318 1.5508-2.6318h1.6338l-2.4736 4.1064v2.5576h-1.4688v-2.5947z"/></g><g transform="matrix(.625 0 0 .625 391.23 176.93)"><path cx="475.97119" cy="252.08646" rx="29.209877" ry="29.209877" d="m-175.01-139.12c6e-3 9.4118-7.6172 17.048-17.03 17.055-9.411 7e-3 -17.047-7.6172-17.055-17.03v-0.025c-6e-3 -9.4125 7.6188-17.047 17.03-17.055 9.4126-7e-3 17.049 7.618 17.055 17.03v0.025z" fill="#fff" type="arc"/><g transform="translate(-23.952 -89.73)"><path d="m-168.22-68.055c-5.1719 0-9.5485 1.8047-13.131 5.4133-3.6766 3.7344-5.5141 8.1532-5.5141 13.256s1.8375 9.4915 5.5141 13.163c3.675 3.6719 8.0532 5.5079 13.131 5.5079 5.1407 0 9.5954-1.8516 13.367-5.5548 3.55-3.5156 5.3266-7.8883 5.3266-13.116 0-5.2266-1.8078-9.647-5.4219-13.256-3.6141-3.6086-8.0376-5.4133-13.272-5.4133zm0.0469 3.3602c4.2375 0 7.836 1.493 10.797 4.4805 2.9891 2.9563 4.4844 6.5657 4.4844 10.829 0 4.2938-1.4625 7.8571-4.3922 10.689-3.0844 3.0493-6.7141 4.5735-10.889 4.5735-4.175 0-7.7735-1.5094-10.795-4.5266-3.0219-3.0195-4.5328-6.5969-4.5328-10.736 0-4.1383 1.5266-7.7485 4.5797-10.829 2.9282-2.9876 6.511-4.4805 10.749-4.4805z"/><path d="m-176.5-52.021c0.74377-4.6977 4.0516-7.2086 8.1954-7.2086 5.961 0 9.5922 4.325 9.5922 10.092 0 5.6274-3.8641 9.9993-9.686 9.9993-4.0047 0-7.5891-2.4648-8.2423-7.3008h4.7032c0.14062 2.511 1.7703 3.3946 4.0984 3.3946 2.6532 0 4.3782-2.4649 4.3782-6.2329 0-3.9523-1.4906-6.0454-4.286-6.0454-2.0485 0-3.8172 0.74457-4.1906 3.3016l1.3687-7e-3 -3.7032 3.7016-3.7016-3.7016z"/></g></g><circle cx="242.56" cy="90.225" r="10.806" fill="#fff"/><path d="m245.69 87.098c0-0.4165-0.33789-0.75342-0.75391-0.75342h-4.7725c-0.41602 0-0.75391 0.33691-0.75391 0.75342v4.773h1.331v5.6523h3.6172v-5.6523h1.332v-4.773z"/><circle cx="242.55" cy="84.083" r="1.6323"/><path d="m242.53 78.318c-3.2314 0-5.9683 1.1274-8.2075 3.3838-2.2978 2.333-3.4463 5.0952-3.4463 8.2842s1.1484 5.9321 3.4463 8.227c2.2978 2.2944 5.0342 3.4419 8.2075 3.4419 3.2129 0 5.998-1.1567 8.3535-3.4717 2.2207-2.1968 3.3301-4.9297 3.3301-8.1973s-1.1289-6.0288-3.3877-8.2842c-2.2588-2.2563-5.0244-3.3838-8.2959-3.3838zm0.0293 2.0996c2.6484 0 4.8975 0.93359 6.7471 2.8008 1.8701 1.8472 2.8047 4.1035 2.8047 6.7676 0 2.6836-0.91504 4.9111-2.7461 6.6807-1.9277 1.9058-4.1963 2.8584-6.8057 2.8584s-4.8584-0.94287-6.7466-2.8296c-1.8896-1.8862-2.8335-4.1226-2.8335-6.7095 0-2.5864 0.9541-4.8423 2.8623-6.7676 1.8306-1.8672 4.0703-2.8008 6.7178-2.8008z"/></g></g>
      </svg>
      </a>
      {' '}
      <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">
       CC BY-SA 4.0
      </a>
      {' '}by the One Fact Foundation, a 501c3 nonprofit.
      <style jsx>
        {`
          .disclaimer {
            color: rgba(24, 24, 27, 0.5);
            padding-left: 2rem;
            font-size: 15px;
            font-weight: 400;
            line-height: 27px;
          }

          .disclaimer button {
            display: inline-block;
            padding: 0;
            color: inherit;
            text-decoration: underline;
            font-weight: regular;
          }

          :global(body.dark) .disclaimer {
            color: var(--white);
          }

          @media screen and (max-width: 1000px) {
            .disclaimer {
              display: none;
            }
          }
        `}
      </style>
    </span>
  );

  const toggle = <ThemeToggle />;

  const fancyLinks = landing ? (
    <>
      <h3 className="jumbo">
        {React.Children.toArray(links).map((l, i, a) => (
          <span className="main-link" key={i}>
            {l}
            {i !== a.length - 1 ? ', ' : ''}
          </span>
        ))}
        <span className="try-link">
          <Link href="https://tinyletter.com/onefact">Newsletter</Link>
        </span>
      </h3>
      <hr />
      <style jsx>
        {`
          h3 {
            margin: 0;
            display: flex;
            flex-wrap: wrap;
          }

          h3 :global(.main-link:nth-child(n + 2)) {
            margin-left: 10px;
            display: inline-block;
            min-height: 0px;
          }

          h3 :global(.main-link a) {
            text-decoration: none;
          }

          hr {
            margin: 2rem auto;
            display: block;
            width: 100%;
            border: none;
            border-bottom: 1px solid var(--dark);
          }

          .try-link {
            margin-left: auto;
          }

          @media screen and (max-width: 1000px) {
            h3 {
              font-size: 35px;
              line-height: 46px;
            }
          }

          @media screen and (max-width: 780px) {
            .try-link {
              display: none;
            }
          }

          @media screen and (max-width: 600px) {
            hr {
              margin: 0 auto;
            }
            h3 {
              font-size: 24px;
              line-height: 33px;
              text-align: center;
              flex-wrap: wrap;
              justify-content: center;
              padding: 0 2rem;
            }
          }
        `}
      </style>
    </>
  ) : null;

  return (
    <>
      <footer className="desktop">
        {fancyLinks}
        <div className="flex">
          <div className="left gap">{copyright}</div>
          <div className="right gap">
            {disclaimer}
            {toggle}
          </div>
        </div>
      </footer>
      <footer className="mobile gap">
        {fancyLinks}
        {copyright}
        {toggle}
        {disclaimer}
      </footer>
      <style jsx>
        {`
          :global(.gap) {
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }

          footer {
            position: relative;
            display: flex;
            z-index: 100;
            width: 100%;
            color: var(--dark);
            padding: 1rem 0;
          }

          footer.desktop {
            flex-direction: column;
          }

          footer.mobile {
            display: none;
            flex-direction: column;
            padding: 0;
          }

          .right {
            margin-left: auto;
          }

          @media screen and (max-width: 600px) {
            footer.mobile {
              display: flex;
            }
            footer.desktop {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
