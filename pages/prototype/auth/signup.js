import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import PrototypeAuth from "../../../components/Prototype/PrototypeAuth";
import Tooltip from "../../../components/Tooltip/Tooltip";

export default function AuthLogin() {
  const [emailStr, setEmailStr] = useState(0);
  const [passwordStr, setPasswordStr] = useState(0);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordHeight, setPasswordHeight] = useState(0);
  const [confirmHeight, setConfirmHeight] = useState(0);
  const [nicknameStr, setNicknameStr] = useState(0);
  const [isAdult, setIsAdult] = useState(false);
  const refPassword = useRef(null);
  const refConfirm = useRef(null);

  function isEmail(str) {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(str).toLowerCase());
  }

  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  function containsLowercase(str) {
    return /[a-z]/.test(str);
  }
  function containsDigit(str) {
    if (str.length) {
      return /[0-9]/.test(str);
    }
  }
  function isLongEnough(str, length) {
    if (str.length >= length) {
      return true;
    }
  }

  useEffect(() => {
    if (refPassword.current) {
      setPasswordHeight(refPassword.current.clientHeight);
    }
  }, [refPassword]);

  useEffect(() => {
    if (refConfirm.current) {
      setConfirmHeight(refConfirm.current.clientHeight);
    }
  }, [refConfirm]);

  function checkAll(str) {
    if (
      containsUppercase(str) &&
      containsLowercase(str) &&
      containsDigit(str) &&
      isLongEnough(str, 8) &&
      isEmail(emailStr) &&
      isAdult
    ) {
      return true;
    } else {
      return false;
    }
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <PrototypeAuth title="Login">
        <div className="p-4 w-full max-w-xs text-center">
          <img
            className="mb-10 mx-auto"
            width="175"
            height="auto"
            src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
            alt="Stryda logo"
          />
          <div className="form-group mb-4" data-success={isEmail(emailStr)}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              autoFocus
              autoComplete="off"
              tabIndex={1}
              placeholder="Email..."
              onChange={(event) => setEmailStr(event.target.value)}
            />
          </div>
          <div className="form-group mb-4" data-success={checkAll(passwordStr)}>
            <label htmlFor="password">Create password</label>
            <div className="input-group">
              <button
                onClick={togglePassword}
                tabIndex={2}
                className="button button-sm button-ghost"
              >
                {!passwordShown ? <span>Show</span> : <span>Hide</span>}
              </button>
              <input
                type={passwordShown ? "text" : "password"}
                tabIndex={1}
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Password..."
                onChange={(event) => setPasswordStr(event.target.value)}
              />
            </div>
          </div>
          <div
            className="transition-all duration-300 ease overflow-hidden"
            style={{
              height: `${isLongEnough(passwordStr, 1) ? passwordHeight : 0}px`,
            }}
          >
            <div ref={refPassword}>
              <ul className="flex items-start justify-between text-sm">
                <li className="flex flex-col items-center gap-1">
                  <span
                    className={`transition-all duration-500 ease-in-out ${
                      containsLowercase(passwordStr)
                        ? "text-success-500"
                        : "text-ui-400"
                    }`}
                  >
                    lowercase
                  </span>
                  <span
                    className={`transition-all duration-500 ease-in-out rounded-full h-1 ${
                      containsLowercase(passwordStr)
                        ? "w-7 bg-success-500"
                        : "w-1 bg-ui-400"
                    }`}
                  />
                </li>
                <li className="flex flex-col items-center gap-1">
                  <span
                    className={`transition-all duration-500 ease-in-out ${
                      containsUppercase(passwordStr)
                        ? "text-success-500"
                        : "text-ui-400"
                    }`}
                  >
                    uppercase
                  </span>
                  <span
                    className={`transition-all duration-500 ease-in-out rounded-full h-1 ${
                      containsUppercase(passwordStr)
                        ? "w-7 bg-success-500"
                        : "w-1 bg-ui-400"
                    }`}
                  />
                </li>
                <li className="flex flex-col items-center gap-1">
                  <span
                    className={`transition-all duration-500 ease-in-out ${
                      containsDigit(passwordStr)
                        ? "text-success-500"
                        : "text-ui-400"
                    }`}
                  >
                    digit
                  </span>
                  <span
                    className={`transition-all duration-500 ease-in-out rounded-full h-1 ${
                      containsDigit(passwordStr)
                        ? "w-7 bg-success-500"
                        : "w-1 bg-ui-400"
                    }`}
                  />
                </li>
                <li className="flex flex-col items-center gap-1">
                  <span
                    className={`transition-all duration-500 ease-in-out ${
                      isLongEnough(passwordStr, 8)
                        ? "text-success-500"
                        : "text-ui-400"
                    }`}
                  >
                    8 characters
                  </span>
                  <span
                    className={`transition-all duration-500 ease-in-out rounded-full h-1 ${
                      isLongEnough(passwordStr, 8)
                        ? "w-7 bg-success-500"
                        : "w-1 bg-ui-400"
                    }`}
                  />
                </li>
              </ul>
              <div className="h-4" />
            </div>
          </div>
          <div
            className="form-group text-left mb-4"
            data-success={isLongEnough(nicknameStr, 2)}
          >
            <div className="flex items-center justify-between gap-4 mb-1">
              <label className="label" htmlFor="nickname">
                Add your nickname
              </label>
              <Tooltip
                tooltip={
                  <div className=" w-28 text-sm text-center leading-tight">
                    This is how users will see you on leaderboards or stats
                    pages.
                  </div>
                }
              >
                <button className="text-0">
                  <span className="icon icon-16 icon-c-info text-ui-400" />
                </button>
              </Tooltip>
            </div>
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Example: JackAttack12"
              onChange={(event) => setNicknameStr(event.target.value)}
            />
          </div>
          <div className="form-group form-select text-left mb-4">
            <label htmlFor="favorite-game">Confirm location</label>
            <select id="favorite-game">
              <option value="AFG">Afghanistan</option>
              <option value="ALB">Albania</option>
              <option value="DZA">Algeria</option>
              <option value="ASM">American Samoa</option>
              <option value="AND">Andorra</option>
              <option value="AGO">Angola</option>
              <option value="AIA">Anguilla</option>
              <option value="ATG">Antigua &amp; Barbuda</option>
              <option value="ARG">Argentina</option>
              <option value="ARM">Armenia</option>
              <option value="ABW">Aruba</option>
              <option value="AUS">Australia</option>
              <option value="AUT">Austria</option>
              <option value="AZE">Azerbaijan</option>
              <option value="BHS">Bahamas</option>
              <option value="BHR">Bahrain</option>
              <option value="BGD">Bangladesh</option>
              <option value="BRB">Barbados</option>
              <option value="BLR">Belarus</option>
              <option value="BEL">Belgium</option>
              <option value="BLZ">Belize</option>
              <option value="BEN">Benin</option>
              <option value="BMU">Bermuda</option>
              <option value="BTN">Bhutan</option>
              <option value="BOL">Bolivia</option>
              <option value="BIH">Bosnia &amp; Herzegovina</option>
              <option value="BWA">Botswana</option>
              <option value="BRA">Brazil</option>
              <option value="IOT">British Indian Ocean Territory</option>
              <option value="VGB">British Virgin Islands</option>
              <option value="BRN">Brunei</option>
              <option value="BGR">Bulgaria</option>
              <option value="BFA">Burkina Faso</option>
              <option value="BDI">Burundi</option>
              <option value="KHM">Cambodia</option>
              <option value="CMR">Cameroon</option>
              <option value="CAN">Canada</option>
              <option value="CPV">Cape Verde</option>
              <option value="BES">Caribbean Netherlands</option>
              <option value="CYM">Cayman Islands</option>
              <option value="CAF">Central African Republic</option>
              <option value="CHL">Chile</option>
              <option value="CHN">China</option>
              <option value="COL">Colombia</option>
              <option value="COM">Comoros</option>
              <option value="COG">Congo - Brazzaville</option>
              <option value="COK">Cook Islands</option>
              <option value="CRI">Costa Rica</option>
              <option value="CIV">Côte d’Ivoire</option>
              <option value="HRV">Croatia</option>
              <option value="CUB">Cuba</option>
              <option value="CUW">Curaçao</option>
              <option value="CYP">Cyprus</option>
              <option value="CZE">Czechia</option>
              <option value="DNK">Denmark</option>
              <option value="DJI">Djibouti</option>
              <option value="DMA">Dominica</option>
              <option value="DOM">Dominican Republic</option>
              <option value="ECU">Ecuador</option>
              <option value="EGY">Egypt</option>
              <option value="SLV">El Salvador</option>
              <option value="GNQ">Equatorial Guinea</option>
              <option value="ERI">Eritrea</option>
              <option value="EST">Estonia</option>
              <option value="ETH">Ethiopia</option>
              <option value="FLK">Falkland Islands</option>
              <option value="FRO">Faroe Islands</option>
              <option value="FJI">Fiji</option>
              <option value="FIN">Finland</option>
              <option value="FRA">France</option>
              <option value="GUF">French Guiana</option>
              <option value="PYF">French Polynesia</option>
              <option value="GAB">Gabon</option>
              <option value="GMB">Gambia</option>
              <option value="GEO">Georgia</option>
              <option value="DEU">Germany</option>
              <option value="GHA">Ghana</option>
              <option value="GIB">Gibraltar</option>
              <option value="GRC">Greece</option>
              <option value="GRL">Greenland</option>
              <option value="GRD">Grenada</option>
              <option value="GLP">Guadeloupe</option>
              <option value="GUM">Guam</option>
              <option value="GTM">Guatemala</option>
              <option value="GIN">Guinea</option>
              <option value="GNB">Guinea-Bissau</option>
              <option value="GUY">Guyana</option>
              <option value="HTI">Haiti</option>
              <option value="HND">Honduras</option>
              <option value="HKG">Hong Kong SAR China</option>
              <option value="HUN">Hungary</option>
              <option value="ISL">Iceland</option>
              <option value="IND">India</option>
              <option value="TCD">Indonesia</option>
              <option value="IRN">Iran</option>
              <option value="IRQ">Iraq</option>
              <option value="IRL">Ireland</option>
              <option value="ISR">Israel</option>
              <option value="ITA">Italy</option>
              <option value="JAM">Jamaica</option>
              <option value="JPN">Japan</option>
              <option value="JOR">Jordan</option>
              <option value="KAZ">Kazakhstan</option>
              <option value="KEN">Kenya</option>
              <option value="KIR">Kiribati</option>
              <option value="KWT">Kuwait</option>
              <option value="KGZ">Kyrgyzstan</option>
              <option value="LAO">Laos</option>
              <option value="LVA">Latvia</option>
              <option value="LBN">Lebanon</option>
              <option value="LSO">Lesotho</option>
              <option value="LBR">Liberia</option>
              <option value="LBY">Libya</option>
              <option value="LIE">Liechtenstein</option>
              <option value="LTU">Lithuania</option>
              <option value="LUX">Luxembourg</option>
              <option value="MAC">Macau SAR China</option>
              <option value="MKD">Macedonia</option>
              <option value="MDG">Madagascar</option>
              <option value="MWI">Malawi</option>
              <option value="MYS">Malaysia</option>
              <option value="MDV">Maldives</option>
              <option value="MLI">Mali</option>
              <option value="MLT">Malta</option>
              <option value="MHL">Marshall Islands</option>
              <option value="MTQ">Martinique</option>
              <option value="MRT">Mauritania</option>
              <option value="MUS">Mauritius</option>
              <option value="MYT">Mayotte</option>
              <option value="MEX">Mexico</option>
              <option value="FSM">Micronesia</option>
              <option value="MDA">Moldova</option>
              <option value="MCO">Monaco</option>
              <option value="MNG">Mongolia</option>
              <option value="MNE">Montenegro</option>
              <option value="MSR">Montserrat</option>
              <option value="MAR">Morocco</option>
              <option value="MOZ">Mozambique</option>
              <option value="MMR">Myanmar (Burma)</option>
              <option value="NAM">Namibia</option>
              <option value="NRU">Nauru</option>
              <option value="NPL">Nepal</option>
              <option value="NLD">Netherlands</option>
              <option value="NCL">New Caledonia</option>
              <option value="NZL">New Zealand</option>
              <option value="NIC">Nicaragua</option>
              <option value="NER">Niger</option>
              <option value="NGA">Nigeria</option>
              <option value="NIU">Niue</option>
              <option value="NFK">Norfolk Island</option>
              <option value="PRK">North Korea</option>
              <option value="MNP">Northern Mariana Islands</option>
              <option value="NOR">Norway</option>
              <option value="OMN">Oman</option>
              <option value="PAK">Pakistan</option>
              <option value="PLW">Palau</option>
              <option value="PSE">Palestinian Territories</option>
              <option value="PAN">Panama</option>
              <option value="PNG">Papua New Guinea</option>
              <option value="PRY">Paraguay</option>
              <option value="PER">Peru</option>
              <option value="PHL">Philippines</option>
              <option value="POL">Poland</option>
              <option value="PRT">Portugal</option>
              <option value="PRI">Puerto Rico</option>
              <option value="QAT">Qatar</option>
              <option value="REU">Réunion</option>
              <option value="ROU">Romania</option>
              <option value="RUS">Russia</option>
              <option value="RWA">Rwanda</option>
              <option value="WSM">Samoa</option>
              <option value="SMR">San Marino</option>
              <option value="STP">São Tomé &amp; Príncipe</option>
              <option value="SAU">Saudi Arabia</option>
              <option value="SEN">Senegal</option>
              <option value="SRB">Serbia</option>
              <option value="SYC">Seychelles</option>
              <option value="SLE">Sierra Leone</option>
              <option value="SGP">Singapore</option>
              <option value="SXM">Sint Maarten</option>
              <option value="SVK">Slovakia</option>
              <option value="SVN">Slovenia</option>
              <option value="SLB">Solomon Islands</option>
              <option value="SOM">Somalia</option>
              <option value="ZAF">South Africa</option>
              <option value="KOR">South Korea</option>
              <option value="SSD">South Sudan</option>
              <option value="ESP">Spain</option>
              <option value="LKA">Sri Lanka</option>
              <option value="BLM">St. Barthélemy</option>
              <option value="SHN">St. Helena</option>
              <option value="KNA">St. Kitts &amp; Nevis</option>
              <option value="LCA">St. Lucia</option>
              <option value="MAF">St. Martin</option>
              <option value="SPM">St. Pierre &amp; Miquelon</option>
              <option value="VCT">St. Vincent &amp; Grenadines</option>
              <option value="SDN">Sudan</option>
              <option value="SUR">Suriname</option>
              <option value="SWZ">Swaziland</option>
              <option value="SWE" selected>
                Sweden
              </option>
              <option value="CHE">Switzerland</option>
              <option value="SYR">Syria</option>
              <option value="TWN">Taiwan</option>
              <option value="TJK">Tajikistan</option>
              <option value="TZA">Tanzania</option>
              <option value="THA">Thailand</option>
              <option value="TLS">Timor-Leste</option>
              <option value="TGO">Togo</option>
              <option value="TKL">Tokelau</option>
              <option value="TON">Tonga</option>
              <option value="TTO">Trinidad &amp; Tobago</option>
              <option value="TUN">Tunisia</option>
              <option value="TUR">Turkey</option>
              <option value="TKM">Turkmenistan</option>
              <option value="TCA">Turks &amp; Caicos Islands</option>
              <option value="TUV">Tuvalu</option>
              <option value="VIR">U.S. Virgin Islands</option>
              <option value="UGA">Uganda</option>
              <option value="UKR">Ukraine</option>
              <option value="ARE">United Arab Emirates</option>
              <option value="GBR">United Kingdom</option>
              <option value="USA">United States</option>
              <option value="URY">Uruguay</option>
              <option value="UZB">Uzbekistan</option>
              <option value="VUT">Vanuatu</option>
              <option value="VAT">Vatican City</option>
              <option value="VEN">Venezuela</option>
              <option value="VNM">Vietnam</option>
              <option value="WLF">Wallis &amp; Futuna</option>
              <option value="YEM">Yemen</option>
              <option value="ZMB">Zambia</option>
              <option value="ZWE">Zimbabwe</option>
            </select>
          </div>
          <div className="form-group text-left mb-2">
            <div className="flex items-center justify-between gap-4">
              <label className="label" htmlFor="ageConfirm">
                Verify your age
              </label>
              <Tooltip
                tooltip={
                  <div className=" w-28 text-sm text-center leading-tight">
                    Here we explain why we need why we need the user to verify
                    his age.
                  </div>
                }
              >
                <button className="text-0">
                  <span className="icon icon-16 icon-c-info text-ui-400" />
                </button>
              </Tooltip>
            </div>
            <div className="form-checkbox">
              <input
                type="checkbox"
                name="policy"
                id="ageConfirm"
                onChange={(event) => setIsAdult(event.target.checked)}
              />
              <label htmlFor="ageConfirm">
                I confirm that am 16 years of age or older.
              </label>
            </div>
          </div>

          <Link href="/prototype/auth/step3">
            <button
              type="button"
              className="button button-primary w-full mb-4"
              disabled={!checkAll(passwordStr)}
            >
              <span>Create free account</span>
            </button>
          </Link>
          <div
            className="transition-all duration-300 ease overflow-hidden"
            style={{
              height: `${checkAll(passwordStr) ? confirmHeight : 0}px`,
            }}
          >
            <div ref={refConfirm}>
              <p className="text-sm ">
                By clicking CREATE FREE ACCOUNT, you certify that you are at
                least 16 years old, and you have read and agree to the{" "}
                <a href="#" className="link">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="link">
                  Privacy Policy
                </a>
              </p>
              <div className="h-4" />
            </div>
          </div>

          <p className="text-sm mb-4">
            <Link href="/prototype/auth/login">
              <a className="link link-main">Already have an account? Log in</a>
            </Link>
          </p>
        </div>
      </PrototypeAuth>
    </>
  );
}
