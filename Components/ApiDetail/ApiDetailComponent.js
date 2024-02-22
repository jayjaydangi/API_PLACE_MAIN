import Link from "next/link";

const APIDetailPage = () => {
    return (
      <div className="w-full relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start text-left text-5xl text-colors-text-text-primary-900 font-text-lg-regular">
        <div className="w-[1440px] relative h-20 z-[3] text-xl text-colors-gray-dark-mode-900">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-20 flex flex-col items-center justify-center">
            <div className="w-full flex flex-row items-center justify-between py-0 px-container-padding-desktop box-border max-w-[1280px]">
              <div className="flex flex-row items-center justify-start gap-[0px_32px]">
                <Link href="/">
                <div className="w-[127px] relative h-8">
                  <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_63.5px)] flex flex-row items-start justify-start">
                    <img
                      className="w-8 relative rounded-spacing-md h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/content.svg"
                    />
                  </div>
                  <div className="absolute h-full w-[66.93%] top-[0%] right-[0%] bottom-[0%] left-[33.07%]">
                    <div className="absolute top-[3.13%] left-[0%] leading-[30px] font-semibold">
                      APIStore
                    </div>
                  </div>
                </div>
                </Link>
                <div className="w-[540px] flex flex-col items-start justify-start gap-[6px_0px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                    <div className="w-9 relative leading-[20px] font-medium hidden">
                      Email
                    </div>
                    <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/searchsm.svg"
                        />
                        <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                          Search APIs...
                        </div>
                      </div>
                      <img
                        className="w-4 relative h-4 hidden"
                        alt=""
                        src="/help-icon.svg"
                      />
                    </div>
                  </div>
                  <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0px_24px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                <div className="flex flex-row items-center justify-start gap-[0px_32px]">
                  <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="relative leading-[24px] font-medium">
                      Browse APIs
                    </div>
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="relative leading-[24px] font-medium">
                      Explore
                    </div>
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_12px] text-component-colors-components-buttons-secondary-button-secondary-fg">
                  <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder1.svg"
                    />
                    <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                      <div className="relative leading-[24px] font-semibold">
                        Log in
                      </div>
                    </div>
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder1.svg"
                    />
                  </div>
                  <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                      <div className="relative leading-[24px] font-semibold">
                        Sign up
                      </div>
                    </div>
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start py-spacing-6xl px-0 box-border z-[2]">
          <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border gap-[48px_0px] max-w-[1280px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_64px]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[0px_24px]">
                <img
                  className="w-20 relative rounded-[10px] h-20 object-cover"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-center gap-[24px_0px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[4px_0px]">
                      <div className="relative leading-[32px] font-semibold">
                        FinancePulse
                      </div>
                      <div className="self-stretch relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        Stay on top of financial markets and trends with
                        FinancePulse, an API delivering real-time financial data,
                        stock quotes, and market insights.
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_8px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="rounded-radius-sm bg-colors-background-bg-primary flex flex-row items-center justify-center py-[3px] px-spacing-md text-center text-xs text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[18px] font-medium">
                            Finance
                          </div>
                        </div>
                      </div>
                      <div className="relative leading-[20px]">•</div>
                      <div className="flex flex-row items-center justify-center gap-[0px_4px]">
                        <div className="relative leading-[20px]">By</div>
                        <div className="relative leading-[20px] font-medium">
                          John Doe
                        </div>
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-xs text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                      <div className="relative leading-[20px]">•</div>
                      <div className="relative leading-[20px]">
                        Last updated 5 days ago
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0px_24px] text-base">
                    <div className="w-[100px] flex flex-col items-start justify-center gap-[4px_0px]">
                      <div className="self-stretch relative leading-[24px] font-semibold">
                        482 ms
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[0px_8px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg font-body-xs">
                        <img
                          className="w-4 relative h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/modem01.svg"
                        />
                        <div className="relative leading-[140%]">Latency</div>
                        <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                          <div className="relative leading-[140%]">99+</div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon--jamicons--outline--logos--circle.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="w-[100px] flex flex-col items-start justify-center gap-[4px_0px]">
                      <div className="self-stretch relative leading-[24px] font-semibold">
                        97%
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[0px_8px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg font-body-xs">
                        <img
                          className="w-4 relative h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/clockrefresh.svg"
                        />
                        <div className="relative leading-[140%]">
                          Availability
                        </div>
                        <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                          <div className="relative leading-[140%]">99+</div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon--jamicons--outline--logos--circle.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="w-[100px] flex flex-col items-start justify-center gap-[4px_0px]">
                      <div className="self-stretch relative leading-[24px] font-semibold">
                        10%
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[0px_8px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg font-body-xs">
                        <img
                          className="w-4 relative h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/piechart01.svg"
                        />
                        <div className="relative leading-[140%]">Usage</div>
                        <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                          <div className="relative leading-[140%]">99+</div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon--jamicons--outline--logos--circle.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="w-[100px] flex flex-col items-start justify-center gap-[4px_0px]">
                      <div className="self-stretch relative leading-[24px] font-semibold">
                        4.8/5
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[0px_8px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg font-body-xs">
                        <img
                          className="w-4 relative h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/star01.svg"
                        />
                        <div className="relative leading-[140%]">Rating</div>
                        <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                          <div className="relative leading-[140%]">99+</div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon--jamicons--outline--logos--circle.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0px_16px] text-base text-colors-background-bg-primary">
                <div className="w-11 rounded-radius-md h-11 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bookmark.svg"
                  />
                </div>
                <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder2.svg"
                  />
                  <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="relative leading-[24px] font-semibold">
                      Subscribe
                    </div>
                  </div>
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px] text-base">
              <div className="self-stretch flex flex-col items-start justify-start text-colors-text-text-quarterary-500 border-b-[1px] border-solid border-colors-border-border-secondary">
                <div className="flex flex-row items-start justify-start gap-[0px_12px]">
                  <div className="box-border h-9 flex flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg border-b-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                    <div className="relative leading-[24px] font-semibold">
                      API Details
                    </div>
                  </div>
                  <div className="h-9 hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      Profile
                    </div>
                  </div>
                  <div className="h-9 hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      Password
                    </div>
                  </div>
                  <div className="h-9 hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      Team
                    </div>
                  </div>
                  <div className="h-9 hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      Plan
                    </div>
                  </div>
                  <div className="h-9 flex flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      Pricing
                    </div>
                  </div>
                  <div className="h-9 flex flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      Endpoints
                    </div>
                  </div>
                  <div className="h-9 flex flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      Discussions
                    </div>
                  </div>
                  <div className="h-9 flex flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      Reviews
                    </div>
                  </div>
                  <div className="h-9 hidden flex-row items-center justify-center pt-0 px-spacing-xs pb-spacing-lg box-border">
                    <div className="relative leading-[24px] font-semibold">
                      API
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-5xl leading-[32px] font-semibold">
                API Details
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px] text-lg">
                <div className="self-stretch flex flex-col items-start justify-center gap-[4px_0px]">
                  <div className="relative leading-[28px] font-semibold">{`Description: `}</div>
                  <div className="self-stretch relative text-base leading-[24px]">
                    The HealthFit API provides developers with access to a wide
                    range of health and fitness data, allowing them to integrate
                    personalized health information into their applications. This
                    API could offer data related to user activity, nutrition,
                    sleep patterns, and overall well-being. Developers can
                    leverage this information to create custom fitness apps,
                    health trackers, and wellness platforms. The HealthFit API
                    aims to empower users to make informed decisions about their
                    health and promote a healthier lifestyle.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[4px_0px]">
                  <div className="relative leading-[28px] font-semibold">
                    Key Features:
                  </div>
                  <div className="self-stretch relative text-base leading-[24px]">
                    <ol className="m-0 font-inherit text-inherit pl-[21px]">
                      <li className="mb-0">
                        Activity Tracking: Retrieve data on steps taken, distance
                        covered, and calories burned throughout the day.
                      </li>
                      <li className="mb-0">
                        Nutrition Insights: Access information on nutritional
                        intake, including calories consumed, macronutrient
                        breakdown, and meal suggestions.
                      </li>
                      <li className="mb-0">
                        Sleep Analytics: Provide insights into sleep patterns,
                        including duration, sleep stages, and recommendations for
                        improving sleep quality.
                      </li>
                      <li className="mb-0">
                        Wellness Scores: Calculate and provide overall wellness
                        scores based on various health metrics.
                      </li>
                      <li className="mb-0">
                        Integration with Wearables: Seamlessly connect with
                        popular fitness trackers and smartwatches for real-time
                        data synchronization.
                      </li>
                      <li className="mb-0">
                        User Profile Management: Allow users to set health goals,
                        track progress, and personalize their wellness journey.
                      </li>
                      <li>
                        API Documentation: Comprehensive documentation with sample
                        code and SDKs for easy integration.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[4px_0px]">
                  <div className="relative leading-[28px] font-semibold">
                    Potential Use Cases:
                  </div>
                  <div className="self-stretch relative text-base leading-[24px]">
                    <ul className="m-0 font-inherit text-inherit pl-[21px]">
                      <li className="mb-0">Health and fitness apps</li>
                      <li className="mb-0">Corporate wellness programs</li>
                      <li className="mb-0">Telehealth platforms</li>
                      <li className="mb-0">Wearable device integrations</li>
                      <li>Personalized coaching applications</li>
                    </ul>
                  </div>
                </div>
                <div className="self-stretch relative text-base leading-[24px]">
                  This API idea caters to the growing demand for health and
                  wellness solutions, providing developers with the tools to
                  create applications that promote a healthier lifestyle.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start py-spacing-6xl px-0 box-border gap-[32px_0px] z-[1]">
          <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  More from John Doe
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-coolgray-90">
                  Find more APIs from the same publisher
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-base">
            <div className="self-stretch flex flex-row items-start justify-start relative gap-[0px_16px]">
              <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[0] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="w-10 relative rounded h-10 object-cover"
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      WeatherlyAPI
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="relative leading-[18px]">By</div>
                      <div className="relative leading-[18px] font-medium">
                        John Doe
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        Empower fitness applications with FitnessPalAPI, offering
                        features like workout tracking, nutrition information, and
                        health monitoring.
                      </div>
                    </div>
                  </div>
                  <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/modem01.svg"
                      />
                      <div className="relative leading-[140%]">410 ms</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/clockrefresh.svg"
                      />
                      <div className="relative leading-[140%]">95%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/piechart01.svg"
                      />
                      <div className="relative leading-[140%]">98%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[1] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="w-10 relative rounded h-10 object-cover"
                    alt=""
                    src="/image-21@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      WeatherlyAPI
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="relative leading-[18px]">By</div>
                      <div className="relative leading-[18px] font-medium">
                        John Doe
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        An API delivering real-time financial data
                      </div>
                    </div>
                  </div>
                  <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/modem01.svg"
                      />
                      <div className="relative leading-[140%]">35 ms</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/clockrefresh.svg"
                      />
                      <div className="relative leading-[140%]">97%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/piechart01.svg"
                      />
                      <div className="relative leading-[140%]">99%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[2] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="w-10 relative rounded h-10 object-cover"
                    alt=""
                    src="/image-22@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      WeatherlyAPI
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="relative leading-[18px]">By</div>
                      <div className="relative leading-[18px] font-medium">
                        John Doe
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        <span>
                          NewsFlasher fetches and delivers real-time news articles
                          and updates from various sources.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/modem01.svg"
                      />
                      <div className="relative leading-[140%]">210 ms</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/clockrefresh.svg"
                      />
                      <div className="relative leading-[140%]">100%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/piechart01.svg"
                      />
                      <div className="relative leading-[140%]">96%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[3] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="w-10 relative rounded h-10 object-cover"
                    alt=""
                    src="/image-23@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      WeatherlyAPI
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="relative leading-[18px]">By</div>
                      <div className="relative leading-[18px] font-medium">
                        John Doe
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        ImageDetectPro, a powerful API for identifying objects,
                        faces, and scenes in images.
                      </div>
                    </div>
                  </div>
                  <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/modem01.svg"
                      />
                      <div className="relative leading-[140%]">255 ms</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/clockrefresh.svg"
                      />
                      <div className="relative leading-[140%]">98%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/piechart01.svg"
                      />
                      <div className="relative leading-[140%]">99%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[150px] absolute my-0 mx-[!important] top-[0px] right-[0px] h-[201px] z-[4]">
                <div className="absolute top-[0px] right-[0px] [background:linear-gradient(270deg,_#fff,_#fff_30.26%,_rgba(255,_255,_255,_0))] w-[150px] h-[201px]" />
                <div className="absolute top-[calc(50%_-_17.5px)] right-[0px] rounded-radius-md w-9 h-9 overflow-hidden flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevronright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Similar APIs
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-base">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start relative gap-[0px_16px]">
              <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[0] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="w-10 relative rounded h-10 object-cover"
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      WeatherlyAPI
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="relative leading-[18px]">By</div>
                      <div className="relative leading-[18px] font-medium">
                        John Doe
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        HealthTrackerAPI facilitates the integration of health
                        tracking features into your applications.
                      </div>
                    </div>
                  </div>
                  <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/modem01.svg"
                      />
                      <div className="relative leading-[140%]">78 ms</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/clockrefresh.svg"
                      />
                      <div className="relative leading-[140%]">99%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/piechart01.svg"
                      />
                      <div className="relative leading-[140%]">98%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[1] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="w-10 relative rounded h-10 object-cover"
                    alt=""
                    src="/image-22@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      WeatherlyAPI
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="relative leading-[18px]">By</div>
                      <div className="relative leading-[18px] font-medium">
                        John Doe
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        Stay informed about cryptocurrency markets with
                        CryptoWatchAPI
                      </div>
                    </div>
                  </div>
                  <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/modem01.svg"
                      />
                      <div className="relative leading-[140%]">12 ms</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/clockrefresh.svg"
                      />
                      <div className="relative leading-[140%]">98%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/piechart01.svg"
                      />
                      <div className="relative leading-[140%]">99%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[2] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="w-10 relative rounded h-10 object-cover"
                    alt=""
                    src="/image-24@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      WeatherlyAPI
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="relative leading-[18px]">By</div>
                      <div className="relative leading-[18px] font-medium">
                        John Doe
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        Seamlessly integrate and enhance your applications with
                        QuickConnect, an API designed for fast and secure
                        communication between different software components.
                      </div>
                    </div>
                  </div>
                  <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/modem01.svg"
                      />
                      <div className="relative leading-[140%]">255 ms</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/clockrefresh.svg"
                      />
                      <div className="relative leading-[140%]">97%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/piechart01.svg"
                      />
                      <div className="relative leading-[140%]">99%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[3] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="w-10 relative rounded h-10 object-cover"
                    alt=""
                    src="/image-25@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      WeatherlyAPI
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="relative leading-[18px]">By</div>
                      <div className="relative leading-[18px] font-medium">
                        John Doe
                      </div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        Power your applications with GeoLocationX to retrieve
                        precise geographical information
                      </div>
                    </div>
                  </div>
                  <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/modem01.svg"
                      />
                      <div className="relative leading-[140%]">12 ms</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/clockrefresh.svg"
                      />
                      <div className="relative leading-[140%]">100%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/piechart01.svg"
                      />
                      <div className="relative leading-[140%]">97%</div>
                      <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                        <div className="relative leading-[140%]">99+</div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--jamicons--outline--logos--circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[150px] absolute my-0 mx-[!important] top-[0px] right-[0px] h-[201px] z-[4]">
                <div className="absolute top-[0px] right-[0px] [background:linear-gradient(270deg,_#fff,_#fff_30.26%,_rgba(255,_255,_255,_0))] w-[150px] h-[201px]" />
                <div className="absolute top-[calc(50%_-_17.5px)] right-[0px] rounded-radius-md w-9 h-9 overflow-hidden flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevronright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start pt-spacing-7xl px-0 pb-spacing-6xl box-border gap-[64px_0px] z-[0] text-11xl">
          <div className="w-[1280px] hidden flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-center">
            <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-spacing-7xl gap-[32px] border-b-[1px] border-solid border-colors-border-border-secondary">
              <div className="w-full flex flex-col items-center justify-center gap-[16px_0px] min-w-[480px] max-w-[768px]">
                <div className="self-stretch relative leading-[38px] font-semibold">
                  Want to contribute? Add your API
                </div>
                <div className="self-stretch relative text-xl leading-[30px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  Join over 300+ developers already growing with APIStore.
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0px_12px] text-left text-base text-colors-background-bg-primary">
                <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-lg px-[18px] gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder2.svg"
                  />
                  <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="relative leading-[24px] font-semibold">
                      Add API’s
                    </div>
                  </div>
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder2.svg"
                  />
                </div>
                <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-lg px-[18px] gap-[0px_6px] text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder1.svg"
                  />
                  <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="relative leading-[24px] font-semibold">
                      Learn more
                    </div>
                  </div>
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-xl text-colors-gray-dark-mode-900">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px_64px]">
              <div className="w-width-xs flex flex-col items-start justify-start gap-[32px_0px]">
                <div className="w-[127px] relative h-8">
                  <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_63.5px)] flex flex-row items-start justify-start">
                    <img
                      className="w-8 relative rounded-spacing-md h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/content.svg"
                    />
                  </div>
                  <div className="absolute h-full w-[66.93%] top-[0%] right-[0%] bottom-[0%] left-[33.07%]">
                    <div className="absolute top-[3.13%] left-[0%] leading-[30px] font-semibold">
                      APIStore
                    </div>
                  </div>
                </div>
                <div className="w-[335px] relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg inline-block">
                  Unleashing the potential by connecting developers to a world of
                  powerful APIs.
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[0px_32px] text-sm text-colors-text-text-quarterary-500">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[96px]">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Products
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Overview
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Features
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Solutions
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Process
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Testimonials
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Contact
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[96px]">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Company
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          About us
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Careers
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Press
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          News
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Media kit
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Contact
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[96px]">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Resources
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Blogs
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Documentation
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Help Center
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Support
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden hidden flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          AngelList
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Dribbble
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[96px]">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Legal
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Terms
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Privacy
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Cookies
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Licenses
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Settings
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-center justify-start">
                      <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="relative leading-[24px] font-semibold">
                          Contact
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-base text-colors-text-text-quarterary-500">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-between pt-spacing-4xl px-0 pb-0 border-t-[1px] border-solid border-colors-border-border-secondary">
              <div className="relative leading-[24px]">
                © 2024 APIStore. All rights reserved.
              </div>
              <div className="flex flex-row items-center justify-start gap-[0px_24px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/social-icon.svg"
                />
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/social-icon1.svg"
                />
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/social-icon2.svg"
                />
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/social-icon3.svg"
                />
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/social-icon4.svg"
                />
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/social-icon5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default APIDetailPage;
  