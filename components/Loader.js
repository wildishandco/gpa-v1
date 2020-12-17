import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const OverlayStyles = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--yellow);
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = ({ setMenuOpen }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  console.log(router);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsLoading(true);
      setMenuOpen(false);
    });

    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });

    router.events.on("routeChangeError", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <OverlayStyles
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <svg width="302.748" height="113.535" viewBox="0 0 302.748 113.535">
              <g data-name="Group 54" transform="translate(-86.306 10.41)">
                <g transform="translate(86.306 -10.41)">
                  <g>
                    <path
                      d="M179.07,95c-2.642,1.822-5.976,2.034-9.461.68-2.988,1.426-5.989,1.017-9.043.214-.751-.2-1.639.2-2.462.191-2.952-.036-3.424-.255-6.945-2.885a24.969,24.969,0,0,1-12.028,5.6,21.467,21.467,0,0,1-17.882-5.1c-5.055-4.227-10.167-8.39-15.365-12.44-4.246-3.308-7.718-7.058-8.769-12.556-1.386-7.256,2.3-14.015,8.558-15.669-.063-1.836-1.663-2.444-2.784-3.4-4.117-3.5-8.609-6.628-12.341-10.493-5.727-5.93-5.562-16.3-.086-21.62,4.259-4.14,9.459-4.7,15.012-3.56,4.938,1.011,9.224,3.5,13.494,6.01.114.067.23.13.233-.154a96.815,96.815,0,0,1,9.389-3.3c5.548-1.361,11.051-1.14,15.8,2.527,4.98,3.845,9.759,7.947,14.716,11.823a49.611,49.611,0,0,0,4.688,2.7,27.493,27.493,0,0,1,2.461,1.92c2.747-4,6.254-6.976,11.062-8.134A12.517,12.517,0,0,1,189.9,30.979c1.851-2.069,3.5-4.193,5.444-6.01a12.446,12.446,0,0,1,7.336-3.025l.581-6.278c-2.126-2.351-2.121-3.907-.081-6.348,2.469-2.954,5.2-5.478,9.2-6.167,2.751-.474,4.8.748,6.8,2.432,3.09,2.613,6.276,5.112,9.137,7.43l13.055-5.8c1.7-3.266,3.259-6.714,5.231-9.905a15.765,15.765,0,0,1,9.441-7.434c3.291-.865,5.951.354,8.462,2.444C270.15-2.98,275.911,1.6,281.606,6.257a9.411,9.411,0,0,1,.706,13.812c-.114.125-.227.251-.41.455,4.8,3.671,9.789,7.194,10.719,13.812a56.908,56.908,0,0,1,4.324-4.478c2.686-2.251,5.8-3.609,9.315-2.327,1.654.6,3.054,1.9,4.705,2.974,3.283-.719,6.263.342,8.969,2.765l.641-9.312c-2.1-2.369-2.138-3.97-.134-6.369,2.324-2.783,5.113-4.8,8.842-5.213,2.575-.284,4.591.846,6.507,2.424,5.213,4.292,10.442,8.567,15.765,12.72.754.589,2.195.227,3.093.716a49.567,49.567,0,0,1,6.835,4.243c5.4,4.2,10.605,8.644,15.977,12.88,4.069,3.208,6.3,9.293,3.664,14.636,3.73,4.255,3.578,7.835-.6,12.077-1.113,1.13-2.394,2.1-3.654,3.185,1.282,1.04,2.634,2.143,3.991,3.239,2.578,2.084,5.269,4.051,6.886,7.075,1.54,2.879,1.949,5.8-.022,8.6-2.044,2.9-5.109,3.444-8.413,3.186-3.5-.274-6.065-2.346-8.609-4.484-2.447-2.055-4.943-4.052-7.445-6.04a2.131,2.131,0,0,0-1.148-.351c-9.937-.573-19.108,2.035-27.637,6.949-3.791,2.184-7.388,4.71-11.019,7.16-5.339,3.6-8.177,3.379-13.069-.743-5.236-4.413-10.618-8.653-15.955-12.945a8.013,8.013,0,0,1-2.994-4.688c-.122-.562-.708-1.024-.941-1.342a72.908,72.908,0,0,1-6.324,5.653c-4.43,3.143-9.323,4.529-14.582,2.167a32.052,32.052,0,0,1-4.6-3c-1.73,2.644-3.261,5.614-5.373,8.088-4.709,5.517-10.721,8.5-18.154,7.953-3.725-.276-6.759-2.119-9.575-4.459-4.184-3.475-8.408-6.9-12.7-10.246-.71-.553-1.846-.562-2.911-.857-3.075,2.156-6.458,3.575-10.434,2.075-1.644,2.381-3.8,2.891-6.367,1.786-1.7,1.905-3.916,2.329-6.313,2.593a33.222,33.222,0,0,0-5.014,1.427,33.173,33.173,0,0,1-4.632,1.124A28.809,28.809,0,0,1,179.07,95Z"
                      transform="translate(-86.306 10.41)"
                    />
                  </g>
                </g>
                <g transform="translate(90.073 -6.642)">
                  <path
                    id="Path_31"
                    data-name="Path 31"
                    d="M456.378,556.647c-.433-1.115-2.284-5.308-2.5-5.708-.491-.911-1.185-2.141-2.415-2.223a1.485,1.485,0,0,0-1.821,1.488,7.971,7.971,0,0,1-1.234,3.059l-1.016,1.75a7.466,7.466,0,0,1-.918,1.355c-.443.445-1.193.2-1.236.819-.03.424.129.8,2.149.963.565.045,2.092.145,2.147-.653.048-.69-.88-.412-.844-.93.046-.65.485-.645,1.22-.591,2.275.159,2.625.23,2.583.829-.032.464-.877.169-.922.807-.057.823,1.157.922,3.178,1.04.706.042,2.71.19,2.777-.782C457.579,557.111,456.773,557.682,456.378,556.647Zm-5.067-2.217-1.059-.073c-.156-.011-.511,0-.5-.222a4.424,4.424,0,0,1,.354-.8c.067-.142.362-.922.7-.9.311.021.517.529.629.75a4.457,4.457,0,0,1,.449,1.111C451.874,554.5,451.452,554.44,451.31,554.43Z"
                    transform="translate(-398.91 -474.442)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_32"
                    data-name="Path 32"
                    d="M546.934,554.317c-.722.046-2.857.24-2.832,1.21.032,1.226,1.49.06,1.519,1.162a.852.852,0,0,1-.842.876c-.906.055-2.629-.838-2.7-3.578a2.163,2.163,0,0,1,1.962-2.479c1.924-.113,1.973,1.735,3.374,1.646a1.235,1.235,0,0,0,1.084-1.391c-.018-.677-.577-2-1.455-1.942-.254.015-.618.24-.872.255a12.2,12.2,0,0,0-2.3-.223c-3.028.173-5.509,2.274-5.435,5.082.077,2.941,2.747,4.784,5.747,4.61a4.632,4.632,0,0,0,4.481-3.158c.09-.353.117-.421.483-.485a.743.743,0,0,0,.634-.683C549.769,554.831,549.594,554.143,546.934,554.317Z"
                    transform="translate(-479.098 -475.398)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_33"
                    data-name="Path 33"
                    d="M631.621,537.155c-1.139.292.029,1.909-2.819,2.634-1.459.368-1.581.493-1.956-1.394-.083-.414-.194-.9.39-1.047,1.4-.354.811,1.22,1.673,1,.834-.213.623-1.787.516-2.316-.1-.5-.446-1.947-1.252-1.745-.986.249.091,1.483-.965,1.748-.848.213-.894.2-1.044-.554-.3-1.487-.5-1.706,1.043-2.091,2.64-.665,2,.8,3.1.519a.87.87,0,0,0,.538-1.114c-.113-.568-.7-1.747-1.491-1.546a7.989,7.989,0,0,1-2.3.85q-2,.5-4,.984c-.57.139-1.763.287-1.606,1.077.183.92,1.035-.355,1.526,1.6a22.042,22.042,0,0,1,.845,4.476c.175,1.4-.883,1.055-.741,1.767.034.168.124.553,1.042.33q2.856-.7,5.711-1.425c.473-.121.869-.181,1.18-.235.3-.035.529-.053.627-.08.556-.144.993-1.911.818-2.79C632.38,537.447,632.065,537.039,631.621,537.155Z"
                    transform="translate(-550.512 -459.403)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_34"
                    data-name="Path 34"
                    d="M709.842,511.868a5.9,5.9,0,0,1-.131-1.8c.132-.655.919-.573.789-1.31-.159-.891-1.667-.438-2.28-.283-.586.148-2.015.467-1.868,1.295.124.7.828.32,1.12.813a4.056,4.056,0,0,1,.334,1.146c.039.221.119.754-.23.841a2.041,2.041,0,0,1-.954-.287q-1.89-.93-3.781-1.873a1.859,1.859,0,0,0-1.747-.17c-.627.154-2.52.55-2.356,1.47.137.779,1.052.034,1.5,1.276a17.223,17.223,0,0,1,.651,2.775,13.063,13.063,0,0,1,.221,1.988c.007.864-.849.786-.728,1.473.149.843,1.6.573,2.24.416s2.078-.593,1.924-1.46c-.112-.636-.8-.14-1.151-.918a5.347,5.347,0,0,1-.306-1.155c-.049-.272-.184-1.116.248-1.223a1.6,1.6,0,0,1,.936.27q2.472,1.26,4.944,2.5a1.151,1.151,0,0,0,.782.138c.934-.24.537-1.989.433-2.57Z"
                    transform="translate(-617.021 -439.603)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_35"
                    data-name="Path 35"
                    d="M806.11,499.489c-.435.093-.593,1.056-2.378,1.44-1.968.424-3.28-.989-3.516-2.923a1.756,1.756,0,0,1,1.33-1.985c2.5-.534,2.419,1.854,3.866,1.542a1.453,1.453,0,0,0,1.141-1.656c-.177-1.451-1.037-2.107-1.627-1.979-.239.052-.312.161-.621.228a9.336,9.336,0,0,0-2.707-.077c-2.769.59-5.232,3.2-4.906,5.883.32,2.63,3,4.3,5.955,3.668a12.738,12.738,0,0,0,3.028-1.431c.7-.153,1.2-1.5,1.133-2.072C806.769,499.8,806.517,499.4,806.11,499.489Z"
                    transform="translate(-701.289 -427.293)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_36"
                    data-name="Path 36"
                    d="M885.067,476.727c-.538.069-2.18.278-2.165,1.061.01.505.42.479.427.852a1.679,1.679,0,0,1-.943,1.131c-.354.045-.936-.722-.942-1.014s.388-.463.382-.807c-.006-.293.013-.812-2.932-.448-3.3.4-3.188.985-3.183,1.292.013.652.929.329,1.637,1l1.633,1.546a1.817,1.817,0,0,1,.653,1.531,6.354,6.354,0,0,1-.184,2.235c-.245.577-1.056.41-1.043,1.127.006.359.386.915,3.161.567.694-.087,2.931-.371,2.914-1.328-.012-.626-.762-.45-.967-.81a5.167,5.167,0,0,1-.237-1.982,2.738,2.738,0,0,1,.626-2.145l1.707-2.017c.694-.808,1.723-.448,1.707-1.3C887.307,476.636,886.836,476.5,885.067,476.727Z"
                    transform="translate(-769.303 -412.418)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_37"
                    data-name="Path 37"
                    d="M164.824,208.919q-4.409.464-8.819.8c-1.987,7.547-4.344,11.038-7.965,11.2-2.433.11-4.647-2.413-4.943-5.663-.308-3.387.743-6.795,3.2-10.349q.82.274,1.64.542c8.027,2.642,8.484,2.585,11.029,2.4,5.258-.449,9.454-5.176,8.993-10.213-.449-4.914-5.521-7.894-12.081-7.4a25.1,25.1,0,0,0-13.183,5.014c-3.649-2.089-4.6-2.577-5.98-3.452-4.531-2.512-8.26-3.781-11.887-3.971-7.2-.385-12.136,4.533-11.47,11.933.561,6.22,4.857,10.918,10.41,11.248,4.08.253,8.132-2.446,7.9-4.96-.043-.475-.37-.958-.766-.968q-.733.015-1.466.024a2.211,2.211,0,0,1-2.048-2.043c-.179-1.977,1.637-3.1,4.808-3.036a20.227,20.227,0,0,1,5.239.995c-4.288,5.16-6.515,11.1-6,16.75.727,8.017,6.441,14.347,13.232,14.13,3.622-.117,6.157-1.6,9.9-6.061a23.424,23.424,0,0,1-3.943,7.913c-2.451,3.051-5.421,4.734-8.534,4.794-3.905.081-7.367-2.546-7.65-5.668a2.316,2.316,0,0,1,.216-1.354c.758-1.619.8-1.755.76-2.23-.117-1.29-1.663-2.112-3.7-2.161-4.814-.115-8.451,4.5-7.94,10.165.671,7.421,7.468,13.448,16.072,13.356,6.114-.055,11.87-3.007,16.347-8.228a29.854,29.854,0,0,0,7.125-17.461Q164.074,216.946,164.824,208.919Zm-8.733-11.364c1.753-.133,3.077.632,3.169,1.643a1.788,1.788,0,0,1-1.857,2.125,12.5,12.5,0,0,1-5.338-1.115,5.243,5.243,0,0,0-1.118-.409A9.711,9.711,0,0,1,156.091,197.555Z"
                    transform="translate(-113.298 -163.912)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_38"
                    data-name="Path 38"
                    d="M490.428,332.041c.639,6.993,4.663,11.056,10.312,10.269,7.513-1.052,12.859-9.1,12.054-17.856-.608-6.632-4.6-10.14-10.421-9.292C495.256,316.2,489.69,323.964,490.428,332.041Zm11.933-10.149c1.13-.163,2.025.857,2.172,2.466.221,2.413-1.051,4.783-2.689,5.017-1.073.154-1.975-.946-2.122-2.557C499.506,324.469,500.778,322.121,502.36,321.892Z"
                    transform="translate(-437.736 -273.383)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_39"
                    data-name="Path 39"
                    d="M683.172,293.575c-.608-6.608-4.6-9.944-10.413-8.777-7.111,1.429-12.671,9.58-11.934,17.615.639,6.959,4.658,10.756,10.3,9.648C678.634,310.583,683.976,302.307,683.172,293.575Zm-10.941,5.479c-1.072.213-1.973-.836-2.12-2.44-.215-2.339,1.056-4.762,2.636-5.078,1.129-.226,2.023.748,2.17,2.351C675.138,296.29,673.867,298.728,672.23,299.054Z"
                    transform="translate(-584.352 -247.167)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_40"
                    data-name="Path 40"
                    d="M861.882,148.045c-.068-.732-.505-1.1-1.013-.978a8.579,8.579,0,0,0-1.367.81,4.1,4.1,0,0,1-1.053.461c-1.072.26-1.7-.269-1.826-1.667a8.4,8.4,0,0,1,.06-1.853l2.52-27.707a9.316,9.316,0,0,0,.015-1.093c-.215-2.33-1.516-3.306-3.716-2.774-2.425.586-4.15,1.886-7.1,5.513,1.2.532,1.464.877,1.569,2.01a9.024,9.024,0,0,1-.048,1.985q-.458,5.044-.915,10.088a4.9,4.9,0,0,0-4.378-.6c-3.328.776-6.1,3.175-8.2,7.252a24.623,24.623,0,0,0-2.751,13.268c.491,5.336,3,8.256,6.446,7.473,2.877-.656,4.955-3.114,7.666-8.721a14.586,14.586,0,0,0,.085,1.545c.27,2.931,2.509,4.718,5.217,4.068C857.094,156.161,862.146,150.908,861.882,148.045Zm-16.258-1.884c-1.128.264-1.9-.579-2.039-2.112-.221-2.4,1.206-5.044,2.842-5.428,1.072-.252,1.9.574,2.014,1.84C848.662,142.86,847.259,145.779,845.624,146.161Z"
                    transform="translate(-733.062 -99.633)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_41"
                    data-name="Path 41"
                    d="M1260.549,383.431a2.543,2.543,0,0,0-1.32.739c-3.679,3.455-5.083,4.565-7.18,5a2.408,2.408,0,0,1-3.067-2.127l-.034-.4a16.308,16.308,0,0,0,6.213-2.868c3.692-2.66,5.491-5.859,5.216-9.06-.349-4.066-3.653-6.323-7.958-5.415-7.988,1.686-14.374,10.729-13.659,19.034.549,6.384,4.961,10,10.626,8.788,3.569-.762,6.893-3.01,9.966-6.813,1.873-2.341,2.75-4.207,2.624-5.674A1.227,1.227,0,0,0,1260.549,383.431Zm-8.6-8.132c.68-.143,1.247.416,1.321,1.281.126,1.466-1.318,2.781-4.275,3.956C1249.394,377.742,1250.537,375.6,1251.953,375.3Z"
                    transform="translate(-1081.637 -319.906)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_42"
                    data-name="Path 42"
                    d="M1427.14,337.267c-7.133,1.236-12.757,9.555-12.071,17.551.595,6.938,4.6,10.621,10.258,9.624,7.53-1.324,12.933-9.142,12.185-17.927C1436.947,339.884,1432.971,336.258,1427.14,337.267Zm-.623,14.216c-1.076.187-1.971-.874-2.108-2.478-.2-2.338,1.089-4.74,2.674-5.014,1.132-.2,2.022.808,2.159,2.413C1429.448,348.812,1428.159,351.2,1426.517,351.483Z"
                    transform="translate(-1233.337 -292.368)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_43"
                    data-name="Path 43"
                    d="M1783.67,223.145a10.5,10.5,0,0,0,7.291-4.238,4.942,4.942,0,0,0,1.295-3.049,1.264,1.264,0,0,0-1.106-1.249c-.169.008-.395.016-1.243.533a2.09,2.09,0,0,1-1.1.327c-1.072.056-1.7-.518-1.852-1.8a5.938,5.938,0,0,1,.014-1.363q.95-14.016,1.9-28.022a9.873,9.873,0,0,0-.034-1.292,3.435,3.435,0,0,0-3.778-3.254c-2.425.156-5.065,1.937-6.977,4.634,1.012.385,1.341.767,1.488,2.048a12.781,12.781,0,0,1,.056,1.971q-.965,13.911-1.929,27.831a9.721,9.721,0,0,0,.024,1.7C1778.116,221.358,1780.513,223.374,1783.67,223.145Z"
                    transform="translate(-1545.381 -156.958)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_44"
                    data-name="Path 44"
                    d="M1900.449,317.084c3.552.149,6.86-1.192,9.917-4.125,1.863-1.81,2.735-3.419,2.61-4.933a1.755,1.755,0,0,0-1.42-1.638,1.869,1.869,0,0,0-1.312.358c-3.66,2.416-5.058,3.16-7.144,3.041a3.269,3.269,0,0,1-3.052-2.934l-.034-.41a13.334,13.334,0,0,0,6.183-1.237c3.673-1.653,5.463-4.323,5.19-7.626a8.291,8.291,0,0,0-7.917-7.661c-7.949-.426-14.311,7.325-13.6,15.809C1890.416,312.261,1894.81,316.846,1900.449,317.084Zm2.556-21.263a1.641,1.641,0,0,1,1.315,1.639c.125,1.509-1.312,2.432-4.255,2.858C1900.458,297.61,1901.6,295.747,1903.005,295.82Z"
                    transform="translate(-1641.873 -251.758)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_45"
                    data-name="Path 45"
                    d="M1652.513,326.389a12.417,12.417,0,0,0-1.27-1.737,12.572,12.572,0,0,0-1.771-1.67,24.132,24.132,0,0,0-7.1-3.925,34.831,34.831,0,0,0-9.574-1.99,51.242,51.242,0,0,0-6.3-.054,61.371,61.371,0,0,0-6.81.773,113.212,113.212,0,0,0-28.152,9.011q.273-5.874.547-11.746l.386-.511c.131.114.254.233.367.35a1.429,1.429,0,0,0,.357.283,6.344,6.344,0,0,0,2.557,1.53,6.653,6.653,0,0,0,2.885.1c2.912-.474,5.218-2.62,6.916-6.51a24.364,24.364,0,0,0,1.577-13.17,11.386,11.386,0,0,0-2.8-6.538,5.712,5.712,0,0,0-5.254-1.9,8.91,8.91,0,0,0-1.154.255,5.21,5.21,0,0,0-1.07.459,8.243,8.243,0,0,0-1.512,1.071,16.091,16.091,0,0,0-1.609,1.664q.035-1.273.069-2.545a5.826,5.826,0,0,0,.028-.884c-.015-.254-.037-.5-.068-.726a2.587,2.587,0,0,0-1.1-2.149,3.335,3.335,0,0,0-2.608-.362,8.98,8.98,0,0,0-1.1.3,5.572,5.572,0,0,0-1.068.51,9.264,9.264,0,0,0-2.357,1.792,33.489,33.489,0,0,0-2.55,2.994c.169.1.319.195.447.28a4.732,4.732,0,0,1,.39.294,2.621,2.621,0,0,1,.431.6,2.511,2.511,0,0,1,.223.793,7.483,7.483,0,0,1,.034.908c0,.423-.011.873-.025,1.346-.036.609-2.726,33.82-2.256,40.471.162,2.292,2.359,4.142,6.107,1.728l.073-.047q.38-.225.755-.483l.068-.054c3.414-2.247,10.838-8.08,19.534-11.357a60.687,60.687,0,0,1,9.744-2.793,46.44,46.44,0,0,1,9.2-.919,36.457,36.457,0,0,1,9.7,1.228c2.444.721,4,1.662,4.674,2.721a4.29,4.29,0,0,1,.389.743,2.129,2.129,0,0,1,.134.589q.026,1.3.032,1.815a2.443,2.443,0,0,0,.12.821l.167.266.2.315a5.428,5.428,0,0,0,3.064,2.145,7.868,7.868,0,0,0,4.172.272,3.548,3.548,0,0,0,2.907-2.266A4.832,4.832,0,0,0,1652.513,326.389Zm-59-27.812a3.781,3.781,0,0,1,1.681-2l.17-.03c.075-.014.151-.026.227-.04a1.693,1.693,0,0,1,1.429.491,2.838,2.838,0,0,1,.715,1.674,6.422,6.422,0,0,1-.484,3.561,2.832,2.832,0,0,1-1.988,1.859,1.641,1.641,0,0,1-1.48-.431,2.687,2.687,0,0,1-.776-1.682l-.014-.1c0-.024-.008-.056-.014-.1A6.163,6.163,0,0,1,1593.517,298.578Z"
                    transform="translate(-1377.168 -247.852)"
                    fill="#fafaef"
                  />
                  <path
                    id="Path_46"
                    data-name="Path 46"
                    d="M1036.017,34.962q-4.505-3.281-11.3-2.7c-1.019.11-2.172.273-3.241.437,1.022-4.077,2.994-7,4.918-7.691.536-.192,1.376.008,1.54.367.9,1.6.917,1.673,1.81,1.356,2.443-.864,4.12-4.278,3.371-7.014-.728-2.66-3.054-3.761-5.855-2.762-5,1.781-9.235,8.464-11.589,16.855a42.393,42.393,0,0,0-18.217,9.057q-7.578,6.612-6.751,13.1a5.863,5.863,0,0,0,3.151,4.632,8.608,8.608,0,0,0,6.31.688,12.687,12.687,0,0,0,4.9-2.361,17.594,17.594,0,0,0,3.982-4.372,9.625,9.625,0,0,0,1.11-2.208,5.248,5.248,0,0,0,.3-1.671,1.209,1.209,0,0,0-.22-.576.567.567,0,0,0-.47-.24,9.254,9.254,0,0,1-.972-.159,3.691,3.691,0,0,1-.687-.224,1.485,1.485,0,0,1-.567-.426,1.506,1.506,0,0,1-.237-.712,2.239,2.239,0,0,1,.079-.819,7.333,7.333,0,0,1,.346-1.021,6.36,6.36,0,0,1,.809-1.407,9.626,9.626,0,0,1,1.119-1.269,1.132,1.132,0,0,1,.294-.277,2.515,2.515,0,0,0,.365-.294,11.877,11.877,0,0,1,1.549-1.053,16.186,16.186,0,0,1,1.951-.914c-.947,5.518-2.759,16.127-3.679,21.852-.879,5.468-1.153,8.065-2.084,10.52-1.193,3.179-3.356,5.481-5.484,6.06A3.142,3.142,0,0,1,998.7,77.1a3.749,3.749,0,0,1,.1-1.74c.86-2.112.8-2.095.7-2.72-.244-1.484-1.8-2.04-3.8-1.494a19.386,19.386,0,0,0-8.557,5.911,21.451,21.451,0,0,0-4.483,16.79c1.475,8.994,8.377,13.911,16.465,11.7,11.128-3.038,17.239-14.543,17.733-33.2.147-6.908,2.03-25.275,2.959-32.846.616-.1,1.261-.189,1.92-.242a8.15,8.15,0,0,1,5.309,1.51,6.247,6.247,0,0,1,2.456,4.378l.022.17c.008.068.019.147.03.237a8.214,8.214,0,0,1-1.008,4.431,4.4,4.4,0,0,1-2.785,2.524,1.79,1.79,0,0,1-1.11-.1,1.661,1.661,0,0,1-.823-.724c-.065-.124-.128-.238-.189-.341s-.123-.193-.181-.273a.834.834,0,0,0-.407-.328c-.594-.179-2.012.36-2.808,2.648a10.812,10.812,0,0,0-.63,4.252l.034.271.034.271a5.817,5.817,0,0,0,3.1,4.564,8.681,8.681,0,0,0,6.272.747,14.622,14.622,0,0,0,9.444-7,18.219,18.219,0,0,0,2.777-12.328A12.878,12.878,0,0,0,1036.017,34.962Z"
                    transform="translate(-861.095 -16.589)"
                    fill="#fafaef"
                  />
                </g>
              </g>
            </svg>
          </OverlayStyles>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
