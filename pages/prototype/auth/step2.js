import React, { useEffect, useState } from "react";

import Link from "next/link";
import PrototypeAuth from "@/components/Prototype/PrototypeAuth";

export default function AuthStep2() {
  const [nicknameStr, setNicknameStr] = useState(0);
  const [isAdult, setIsAdult] = useState(false);

  function isLongEnough(str, length) {
    if (str.length >= length) {
      return true;
    }
  }

  function checkAll() {
    if (
      isLongEnough(nicknameStr, 2) &&
      isAdult
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <PrototypeAuth title="Nickname">
        <div className="p-4 w-full max-w-xs text-center">
          <h1 className="h4 mb-8">Create your profile</h1>
          <ul className="step step-secondary mb-8">
            <li className={`${!isAdult  ? 'is-active' : ''}`}>
              <div>
                <i>1</i>
                <span></span>
              </div>
            </li>
            <li className={`${isAdult && isLongEnough(nicknameStr, 2) ? 'is-active' : ''}`}>
              <div>
                <i>2</i>
                <span></span>
              </div>
            </li>
            <li>
              <div>
                <i>3</i>
                <span></span>
              </div>
            </li>
          </ul>
          <div
            className="form-group text-left mb-8"
            data-success={isLongEnough(nicknameStr, 2)}
          >
            <label htmlFor="nickname">Add your nickname</label>
            <p className="text-sm text-ui-300 leading-tight mb-3">
              This is how users will see you on leaderboards or stats pages.
            </p>
            <input
              type="text"
              name="nickname"
              id="nickname"
              autoFocus
              placeholder="Example: JackAttack12"
              onChange={(event) => setNicknameStr(event.target.value)}
            />
          </div>
          <div
            className="form-group text-left mb-6"
          >
            <label htmlFor="nickname">Verify your age</label>
            <p className="text-sm text-ui-300 leading-tight link mb-1">
              Why do we need your age confirmation?
            </p>
            <div className="form-checkbox">
              <input type="checkbox" name="policy" id="ageConfirm" onChange={(event) =>
                      setIsAdult(event.target.checked)
                    } />
              <label htmlFor="ageConfirm">I confirm that am 16 years of age or older </label>
            </div>
          </div>
          <div className="form-group form-select text-left mb-8">
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
              <option value="SWE" selected>Sweden</option>
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
          <div className="flex gap-4 mb-6">
            <Link href="/prototype/auth/signup">
              <button
                type="button"
                className="button flex-1 button-secondary"
              >
                <span>Back</span>
              </button>
            </Link>
            <Link href="/prototype/auth/step3">
              <button
                type="button"
                className="button flex-1 button-primary"
                disabled={!checkAll()}
              >
                <span>Create</span>
              </button>
            </Link>
          </div>
        </div>
      </PrototypeAuth>
    </>
  );
}
