<template>
  <header class="flex justify-center">
    <div class="container pt-[24px] pb-[24px] min-h-[102px] flex items-center justify-between">
      <div class="flex gap-[72px]">
        <a href="#">
          <img class="h-[35px] w-[98px]" src="./assets/styles/images/logo-img.png" alt="">
        </a>
        <nav class="pb-[9px]">
          <ul class="pt-[4px] flex gap-[15px] lg:gap-[36px] font-poppins font-normal tracking-[0.01rem]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Tours</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <a
          class="flex items-center gap-[6px] pt-[15px] pb-[13px] pl-[34px]
        pr-[34px] rounded-[27px] border-[1.4px] border-orng-true font-poppins font-medium text-orng-true"
          href="#"
        >
          Book Now
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 8.45744L4.04598 10.2128L13.4253 2.87235L6.06897
              11.1702V15L8.82758 11.9681L13.4253 13.5638L16 0L0 8.45744Z"
              fill="#F66F4D"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
  <section class="flex justify-center">
    <div class="container flex justify-between pt-[10px] items-center">
      <div class="lg:max-w-[510px] md:max-w-[400px] pt-[34px]">
        <h1
          class="font-sen font-bold text-title-color lg:text-[84px] lg:leading-[86px] md:text-[46px] md:leading-[46px]"
        >
          Discover the Best Lovely Places
        </h1>
        <p class="font-inter font-normal text-description-color text-[18px] leading-[28px] mt-[27px]">
          Plan and book your
          perfect trip with
          expert advice, travel tips, destination information and inspiration from
          us.
        </p>
        <div class="max-w-[500px] mt-[44px] py-[11px] pl-[28px] pr-[20px] bg-white rounded-[38px]">
          <div class="flex flex-col sm:flex-row sm:items-center">
            <div class="w-[170px] pr-0 sm:pr-[34px] border-none sm:border-r-[1px] sm:border-[#eaeaeb]">
              <p class="mb-[6px] font-inter font-medium text-[18px] leading-none ">Where</p>
              <div class="flex">
                <input
                  class="font-inter font-normal w-[100px] h-[12px] mr-0 sm:mr-[27px]
                  text-input text-[12px]" type="text"
                  placeholder="Center Point, Lo..."
                >
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 4.55C9 3.95249 8.8836 3.36082 8.65746 2.80879C8.43131 2.25676
                   8.09984 1.75517 7.68198 1.33266C7.26412 0.910158 6.76804 0.575007
                    6.22208 0.346348C5.67611 0.117689 5.09095 0 4.5 0C3.90905
                     0 3.32389 0.117689 2.77792 0.346348C2.23196 0.575007 1.73588
                      0.910158 1.31802 1.33266C0.900156 1.75517 0.568688 2.25676 0.342542
                       2.80879C0.116396 3.36082 -8.80582e-09 3.95249 0 4.55C0 5.45155 0.263571
                        6.29005 0.710357 6.99725H0.705214C2.22236 9.399 4.5 13 4.5 13L8.29479
                         6.99725H8.29029C8.75341 6.26689 8.99971 5.41758 9 4.55ZM4.5 6.5C3.98851
                          6.5 3.49797 6.29455 3.13629 5.92886C2.77462 5.56316 2.57143 5.06717
                           2.57143 4.55C2.57143 4.03283 2.77462 3.53684 3.13629 3.17114C3.49797
                            2.80545 3.98851 2.6 4.5 2.6C5.01149 2.6 5.50203 2.80545 5.86371
                             3.17114C6.22538 3.53684 6.42857 4.03283 6.42857 4.55C6.42857
                              5.06717 6.22538 5.56316 5.86371 5.92886C5.50203 6.29455
                               5.01149 6.5 4.5 6.5Z" fill="#F66F4D"
                  />
                </svg>
              </div>
            </div>
            <div class="pl-0 lg:pl-[34px] md:pl-[0px] mt-[15px] sm:mt-0">
              <p class="mb-[5px] font-medium text-[18px] font-inter font-medium leading-none">Date</p>
              <div class="flex items-center">
                <p class="font-inter font-normal lg:mr-[28px] md:mr-[5px] text-input text-[12px]">09th March,2021</p>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.23656 5.16263V9.49649H4.68812V5.75088H4.67838C4.44356 5.87843 3.96094
                    6.17339 3.65625 6.38217V5.81748C3.9979 5.57766 4.3539 5.35896 4.72225 5.16263H5.23656Z"
                    fill="#F66F4D"
                  />
                  <path
                    fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.5855 9.57856C6.68444 9.57856 6.24 8.9562 6.20182 8.43618H6.75756C6.79169 8.7368
                    7.07119 9.10244 7.61068 9.10244C8.29644 9.10244 8.66775 8.41342 8.671 7.34419H8
                    .64907C8.52475 7.68056 8.1315 7.98605 7.52538 7.98605C6.83313 7.98605 6.16362
                     7.49043 6.16362 6.54795C6.16362 5.62412 6.87131 5.07812 7.62369 5.07812C8.57594
                      5.07812 9.2105 5.67451 9.2105 7.2459C9.2105 8.71246 8.60763 9.57856 7.5855
                       9.57856ZM7.63913 7.51235C8.14694 7.51235 8.60112 7.11914 8.60112 6.55361C8.60112
                        5.87763 8.17294 5.55425 7.65863 5.55425C7.1825 5.55425 6.70963 5.86871 6.70963
                         6.53739C6.70963 7.20117 7.15081 7.51235 7.63913 7.51235Z"
                    fill="#F66F4D"
                  />
                  <path
                    fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.13101 0.118969C3.05483 0.0427971 2.95149 0 2.84375 0C2.73601 0 2.63267
                     0.0427971 2.55649 0.118969C2.4803 0.19519 2.4375 0.298489 2.4375 0.40625V0.8125H1.625C1.19402
                      0.8125 0.7807 0.983688 0.47595 1.28848C0.171207 1.59321 0 2.0065 0 2.4375V11.375C0 11.806
                       0.171207 12.2193 0.47595 12.524C0.7807 12.8288 1.19402 13 1.625 13H11.375C11.806 13 12.2193
                        12.8288 12.524 12.524C12.8288 12.2193 13 11.806 13 11.375V2.4375C13 2.0065 12.8288 1.59321
                         12.524 1.28848C12.2193 0.983688 11.806 0.8125 11.375 0.8125H10.5625V0.40625C10.5625 0.298489
                          10.5197 0.19519 10.4435 0.118969C10.3673 0.0427971 10.264 0 10.1562 0C10.0485 0 9.94517
                           0.0427971 9.86899 0.118969C9.7928 0.19519 9.75 0.298489 9.75
                            0.40625V0.8125H3.25V0.40625C3.25 0.298489 3.2072 0.19519 3.13101 0.118969ZM0.8125
                             11.375V3.25H12.1875V11.375C12.1875 11.5905 12.1019 11.7972 11.9495 11.9495C11.7971
                              12.1019 11.5905 12.1875 11.375 12.1875H1.625C1.40951 12.1875 1.20285 12.1019
                               1.05048 11.9495C0.8981 11.7972 0.8125 11.5905 0.8125 11.375Z"
                    fill="#F66F4D"
                  />
                </svg>
              </div>
            </div>
            <a
              href="#" class="flex shrink-0 justify-center items-center ml-auto w-[54px]
            h-[54px] bg-accent rounded-full"
              type="submit" aria-label="Search"
            >
              <img src="./assets/styles/images/search-icon.png" alt="Search">
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src="./assets/styles/images/front-img.png" alt="">
      </div>
    </div>
  </section>
  <section class="flex justify-center mt-[150px]">
    <div class="container">
      <div class="flex justify-between">
        <div>
          <h2
            class="font-inter font-semibold text-title-color lg:text-[56px]
            lg:leading-[56px] md:text-[46px] md:leading-[46px]"
          >
            Categories
          </h2>
          <p class="font-inter font-normal text-description-color text-[16px] leading-[26px] max-w-[370px] mt-[24px]">
            Here are lots of interesting destinations to visit, but don’t
            be confused—they’re already grouped by category.
          </p>
        </div>
        <div class="flex items-start gap-[16px]">
          <img class="block" src="./assets/styles/images/arrow-left-icon.svg" alt="">
          <img class="block" src="./assets/styles/images/arrow-right-icon.svg" alt="">
        </div>
      </div>
      <div class="mt-[60px] flex gap-[30px] justify-center">
        <div class="max-w-fit">
          <div
            class="font-inter cursor-pointer font-semibold text-white-color text-[20px]
            leading-[22px] relative w-[170px] h-[230px] bg-[url('/src/assets/styles/images/beach-img.png')]
             overflow-hidden after-gradient"
          />
          <h3 class="font-inter font-medium text-title-color text-[26px] leading-[26px] text-center mt-[18px]">
            Beach
          </h3>
        </div>
        <div class="max-w-fit">
          <div
            class="font-inter cursor-pointer font-semibold text-white-color text-[20px]
             leading-[22px] relative w-[170px] h-[230px] bg-[url('/src/assets/styles/images/desert-img.png')]
              overflow-hidden after-gradient"
          />
          <h3 class="font-inter font-medium text-title-color text-[26px] leading-[26px] text-center mt-[18px]">
            Desert
          </h3>
        </div>
        <div class="max-w-fit">
          <div
            class="font-inter cursor-pointer font-semibold text-white-color
            text-[20px] leading-[22px] relative w-[170px] h-[230px]
            bg-[url('/src/assets/styles/images/mountain-img.png')] overflow-hidden after-gradient"
          />
          <h3 class="font-inter font-medium text-title-color text-[26px] leading-[26px] text-center mt-[18px]">
            Mountain
          </h3>
        </div>
        <div class="max-w-fit xl:block lg:block md:hidden">
          <div
            class="font-inter cursor-pointer font-semibold text-white-color text-[20px]
            leading-[22px] relative w-[170px] h-[230px] bg-[url('/src/assets/styles/images/temple-img.png')]
             overflow-hidden after-gradient"
          />
          <h3 class="font-inter font-medium text-title-color text-[26px] leading-[26px] text-center mt-[18px]">
            Temple
          </h3>
        </div>
        <div class="max-w-fit xl:block lg:hidden md:hidden">
          <div
            class="font-inter cursor-pointer font-semibold text-white-color
             text-[20px] leading-[22px] relative w-[170px] h-[230px]
             bg-[url('/src/assets/styles/images/tower-img.png')] overflow-hidden after-gradient"
          />
          <h3 class="font-inter font-medium text-title-color text-[26px] leading-[26px] text-center mt-[18px]">
            Tower
          </h3>
        </div>
        <div class="max-w-fit xl:block lg:hidden md:hidden">
          <div
            class="font-inter cursor-pointer font-semibold text-white-color
             text-[20px] leading-[22px] relative w-[170px] h-[230px]
             bg-[url('/src/assets/styles/images/pyramid-img.png')] overflow-hidden after-gradient"
          />
          <h3 class="font-inter font-medium text-title-color text-[26px] leading-[26px] text-center mt-[18px]">
            Pyramid
          </h3>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-[140px] flex justify-center">
    <div class="container pl-[6px] pr-[6px] flex lg:justify-between lg:flex-row md:flex-col md:items-center">
      <div class="relative w-fit">
        <img src="./assets/styles/images/experience-img.png" alt="">
        <div
          class="absolute top-[257px] xl:left-[-50px] lg:left-[00px] md:left-[-50px] bg-[#FFFFFF]
          pt-[20px] pb-[20px] pl-[10px] pr-[10px] rounded-[14px] flex flex-col justify-center text-center"
        >
          <img class="w-[80px] h-[80px] ml-[auto] mr-[auto]" src="./assets/styles/images/location-icon.svg" alt="">
          <h3 class="text-center font-poppins font-semibold text-orng-true text-[30px] leading-[30px] mt-[31px]">
            600%
          </h3>
          <p class="text-center font-poppins font-normal text-[#939597] text-[19px] leading-[30px] mt-[8px]">
            Destinations
          </p>
        </div>
        <div
          class="absolute bottom-[-7px] right-[17px] bg-[#FFFFFF]
          pt-[20px] pb-[20px] pl-[16px] pr-[20px] rounded-[14px] flex
          ustify-center text-center gap-[20px]"
        >
          <img class="w-[22px] h-[22px] ml-[auto] mr-[auto]" src="./assets/styles/images/radar-icon.svg" alt="">
          <div>
            <h3 class="text-left font-poppins font-semibold text-[#2D3134] text-[28px] leading-[30px]">
              5000+
            </h3>
            <p class="text-left font-poppins font-normal text-[#939597] text-[12px] leading-[12px] mt-[8px]">
              Customars
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-[551px]">
        <h3 class="font-inter font-semibold text-orng-true text-[20px] leading-[20px] tracking-[0.2em] mt-[60px]">
          Our Experience
        </h3>
        <h2
          class="font-inter font-semibold text-title-color lg:text-[56px]
           lg:leading-[66px] mt-[21px] md:text-[46px] md:leading-[46px]"
        >
          Our Stories Have Adventures
        </h2>
        <p class="font-inter font-normal text-description-color text-[16px] leading-[26px] mt-[20px] max-w-[467px]">
          We are experienced in bringing adventures to stay their journey, with all outdoor
          destinations in the world as
          our specialties. Start your adventure now! Nature has already called you!
        </p>
        <div class="flex mt-[39px] gap-[20px]">
          <div class="pt-[30px] pl-[25px] pb-[26px] pr-[30px] bg-[#ffffffb3] rounded-[14px] w-[166px]">
            <h4 class="font-inter font-semibold text-orng-true text-[46px] leading-[46px]">
              12K+
            </h4>
            <p class="font-inter font-normal text-description-color text-[21px] leading-[29px] mt-[18px]">
              Succes <br> Journey
            </p>
          </div>
          <div class="pt-[30px] pl-[25px] pb-[26px] pr-[30px] bg-[#ffffffb3] rounded-[14px] w-[166px]">
            <h4 class="font-inter font-semibold text-orng-true text-[46px] leading-[46px]">
              16+
            </h4>
            <p class="font-inter font-normal text-description-color text-[21px] leading-[29px] mt-[18px]">
              Awards <br> Winning
            </p>
          </div>
          <div class="pt-[30px] pl-[25px] pb-[26px] pr-[30px] bg-[#ffffffb3] rounded-[14px] w-[166px]">
            <h4 class="font-inter font-semibold text-orng-true text-[46px] leading-[46px]">
              20+
            </h4>
            <p class="font-inter font-normal text-description-color text-[21px] leading-[29px] mt-[18px]">
              Years Of <br> Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="flex justify-center mt-[140px]">
    <div class="container">
      <div class="flex justify-between">
        <div>
          <h2
            class="font-inter font-semibold text-title-color
             lg:text-[56px] lg:leading-[66px] md:text-[46px] md:leading-[46px]"
          >
            Find Popular
            <br> Destination
          </h2>
        </div>
        <div class="flex items-start gap-[16px] mt-[40px]">
          <img class="block" src="./assets/styles/images/arrow-left-icon.svg" alt="">
          <img class="block" src="./assets/styles/images/arrow-right-icon.svg" alt="">
        </div>
      </div>
      <div class="flex gap-[30px]">
        <div
          class="pl-[11px] pr-[11px] pt-[12px] pb-[36px] border-[2px]
           border-solid border-[#FFFFFF] bg-[#FAF8ED] w-fit rounded-[16px] mt-[34px]"
        >
          <img
            class="w-[362px] h-[252px] object-cover rounded-[16px]"
            src="./assets/styles/images/hiking-img.png" alt=""
          >
          <div class="pl-[12px] pr-[12px]">
            <h3 class="mt-[24px] font-inter font-semibold text-title-color text-[24px] leading-[24px] mt-[15px]">
              Mountain Hiking Tour
            </h3>
            <p class="mt-[24px] font-inter font-normal text-description-color text-[14px] leading-[14px] mt-[13px]">
              Mountain Hiking Tour
            </p>
            <div class="flex justify-between lg:flex-row md:flex-col">
              <p class="mt-[24px] font-inter font-normal text-description-color text-[16px] leading-[20px] mt-[36px]">
                <span class="font-semibold text-[24px] text-title-color">
                  $89</span> /Person
              </p>
              <a
                class="font-inter font-normal text-[14px] leading-[14px] block h-[37px] pt-[12px]
                pb-[12px] pl-[17px] pr-[17px] rounded-[46px] mt-[26px] book-btn"
                href="#"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div
          class="pl-[11px] pr-[11px] pt-[12px] pb-[36px] border-[2px] border-solid
          border-[#FFFFFF] bg-[#FAF8ED] w-fit rounded-[16px] mt-[34px]"
        >
          <img
            class="w-[362px] h-[252px] object-cover rounded-[16px]"
            src="./assets/styles/images/picchu-img.png" alt=""
          >
          <div class="pl-[12px] pr-[12px]">
            <h3 class="mt-[24px] font-inter font-semibold text-title-color text-[24px] leading-[24px] mt-[15px]">
              Machu Picchu, Peru
            </h3>
            <p class="mt-[24px] font-inter font-normal text-description-color text-[14px] leading-[14px] mt-[13px]">
              Machu Picchu, Peru
            </p>
            <div class="flex justify-between lg:flex-row md:flex-col">
              <p class="mt-[24px] font-inter font-normal text-description-color text-[16px] leading-[20px] mt-[36px]">
                <span class="font-semibold text-title-color text-[24px]">
                  $99</span> /Person
              </p>
              <a
                class="font-inter font-normal text-[14px] leading-[14px] block h-[37px] pt-[12px]
                pb-[12px] pl-[17px] pr-[17px] rounded-[46px] mt-[26px] book-btn"
                href="#"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div
          class="pl-[11px] pr-[11px] pt-[12px] pb-[36px] border-[2px]
          border-solid border-[#FFFFFF] bg-[#FAF8ED] w-fit rounded-[16px] mt-[34px]"
        >
          <img
            class="w-[362px] h-[252px] object-cover rounded-[16px]"
            src="./assets/styles/images/canyon-img.png" alt=""
          >
          <div class="pl-[12px] pr-[12px]">
            <h3 class="mt-[24px] font-inter font-semibold text-title-color text-[24px] leading-[24px] mt-[15px]">
              The Grand Canyon, Arizona
            </h3>
            <p class="mt-[24px] font-inter font-normal text-description-color text-[14px] leading-[14px] mt-[13px]">
              Mountain Hiking Tour
            </p>
            <div class="flex justify-between lg:flex-row md:flex-col">
              <p class="mt-[24px] font-inter font-normal text-description-color text-[16px] leading-[20px] mt-[36px]">
                <span class="font-semibold text-title-color text-[24px]">
                  $70</span> /Person
              </p>
              <a
                class="font-inter font-normal text-[14px] leading-[14px] block h-[37px] pt-[12px]
                pb-[12px] pl-[17px] pr-[17px] rounded-[46px] mt-[26px] book-btn"
                href="#"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="flex justify-center mt-[139px]">
    <div class="container">
      <h2
        class="font-inter font-bold text-title-color text-center lg:text-[56px]
         lg:leading-[66px] md:text-[46px] md:leading-[46px]"
      >
        Top Destinations
      </h2>
      <p class="font-inter font-normal text-title-color text-center text-[16px] leading-[16px] mt-[16px]">
        Sost Brilliant reasons Entrada should be your one-stop-shop!
      </p>
      <div
        class="flex justify-center space-x-[14px] mt-[29px] font-Poppins font-normal
        text-title-color leading-[14px] mt-[24px] rounded-[12px]"
      >
        <a
          class="pt-[8px] pb-[8px] pl-[19px] pr-[19px] border-[1px]
        border-[solid] text-[#FFFFFF] bg-[#2D3134] border-[#3D3D3D] rounded-[30px] h-[34px]"
          href="#"
        >
          London</a>
        <a
          class="pt-[8px] pb-[8px] pl-[19px] pr-[19px] border-[1px]
        border-[solid] border-[#3D3D3D] rounded-[30px] h-[34px]" href="#"
        >
          Bangkok
        </a>
        <a
          class="pt-[8px] pb-[8px] pl-[19px] pr-[19px] border-[1px]
        border-[solid] border-[#3D3D3D] rounded-[30px] h-[34px]" href="#"
        >
          England
        </a>
        <a
          class="pt-[8px] pb-[8px] pl-[19px] pr-[19px] border-[1px]
        border-[solid] border-[#3D3D3D] rounded-[30px] h-[34px]" href="#"
        >Singapore</a>
        <a
          class="pt-[8px] pb-[8px] pl-[19px] pr-[19px] border-[1px]
        border-[solid] border-[#3D3D3D] rounded-[30px] h-[34px]" href="#"
        >Italy</a>
      </div>
      <div class="gallery justify-center">
        <div
          class="gallery-box col-start-1 p-[24px] bg-[url('src/assets/styles/images/vientam-img.png')]
           flex flex-col justify-between"
        >
          <div
            class="font-inter font-normal text-title-color text-[14px] leading-[14px]
          pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#FFFFFF] w-fit rounded-[12px]"
          >
            3.5
          </div>
          <div>
            <h4 class="font-inter font-semibold text-title-color text-[20px] leading-[20px] text-[#FFFFFF] mb-[10px]">
              Vientam
            </h4>
            <p class="font-inter font-normal text-title-color text-[14px] leading-[14px] text-[#FFFFFF]">Worefall</p>
          </div>
        </div>
        <div
          class="gallery__box gallery__box-first-item p-[24px] bg-[url('src/assets/styles/images/vientam-4-img.png')]
           flex flex-col justify-between"
        >
          <div
            class="font-inter font-normal text-[#FFFFFF] text-[14px] leading-[14px]
          pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#2D3134] w-fit rounded-[12px]"
          >
            3.5
          </div>
          <div>
            <h4 class="font-inter font-semibold text-title-color text-[20px] leading-[20px] text-[#FFFFFF] mb-[10px]">
              Vientam
            </h4>
            <p class="font-inter font-normal text-title-color text-[14px] leading-[14px] text-[#FFFFFF]">Worefall</p>
          </div>
        </div>
        <div
          class="gallery__box gallery__box-second-item p-[24px]
          bg-[url('src/assets/styles/images/vientam-2-img.png')] flex flex-col justify-between"
        >
          <div
            class="font-inter font-normal text-title-color text-[14px] leading-[14px]
          pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#FFFFFF] w-fit rounded-[12px]"
          >
            3.5
          </div>
          <div>
            <h4 class="font-inter font-semibold text-title-color text-[20px] leading-[20px] text-[#FFFFFF] mb-[10px]">
              Vientam
            </h4>
            <p class="font-inter font-normal text-title-color text-[14px] leading-[14px] text-[#FFFFFF]">Worefall</p>
          </div>
        </div>
        <div
          class="gallery__box gallery__box-third-item p-[24px]
          bg-[url('src/assets/styles/images/vientam-5-img.png')] flex flex-col justify-between"
        >
          <div
            class="font-inter font-normal text-[#FFFFFF] text-[14px] leading-[14px]
          pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#2D3134] w-fit rounded-[12px]"
          >
            3.5
          </div>
          <div>
            <h4 class="font-inter font-semibold text-title-color text-[20px] leading-[20px] text-[#FFFFFF] mb-[10px]">
              Vientam
            </h4>
            <p class="font-inter font-normal text-title-color text-[14px] leading-[14px] text-[#FFFFFF]">Worefall</p>
          </div>
        </div>
        <div
          class="gallery__box p-[24px] col-span-1 row-span-2 col-start-2
          bg-[url('src/assets/styles/images/vientam-3-img.png')] flex flex-col justify-between"
        >
          <div
            class="font-inter font-normal text-[#FFFFFF] text-[14px] leading-[14px]
          pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#2D3134] w-fit rounded-[12px]"
          >
            3.5
          </div>
          <div>
            <h4 class="font-inter font-semibold text-title-color text-[20px] leading-[20px] text-[#FFFFFF] mb-[10px]">
              Vientam
            </h4>
            <p class="font-inter font-normal text-title-color text-[14px] leading-[14px] text-[#FFFFFF]">Worefall</p>
          </div>
        </div>
        <div
          class="gallery__box p-[24px] col-start-4 row-2 mt-[-17px]
          bg-[url('src/assets/styles/images/vientam-6-img.png')] flex flex-col justify-between"
        >
          <div
            class="font-inter font-normal text-[#FFFFFF] text-[14px] leading-[14px]
            pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#2D3134] w-fit rounded-[12px]"
          >
            3.5
          </div>
          <div>
            <h4 class="font-inter font-semibold text-title-color text-[20px] leading-[20px] text-[#FFFFFF] mb-[10px]">
              Vientam
            </h4>
            <p class="font-inter font-normal text-title-color text-[14px] leading-[14px] text-[#FFFFFF]">Worefall</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="flex justify-center mt-[142px]">
    <div class="container">
      <div class="flex justify-between">
        <div class="max-w-[405px] ml-[65px] mr-0 lg:mr-[50px] hidden lg:block">
          <img src="./assets/styles/images/person-img.png" alt="Guy with hairstyle">
        </div>
        <div class="mt-[38px] max-w-[100%] lg:max-w-[537px]">
          <div class="w-[67px] h-[8px] bg-[#FFBE82] rounded-[4px]" />
          <h2
            class="mb-[15px] mt-[12px] max-w-[100%] lg:max-w-[470px] font-inter font-semibold
            text-title-color lg:text-[56px] lg:leading-[66px] md:text-[46px] md:leading-[46px]"
          >
            A Customer Said About Us:
          </h2>
          <div class="bg-white p-[30px] rounded-[14px] mt-[26px]">
            <p
              class="text-inter font-normal
               text-description-color text-[18px] leading-[30px]"
            >
              Salty helped me a lot in finding the best place for our first outdoor adventure trip.
              They responded very quickly and gave me a detailed account of the place—its history,
              as well as its best features.
            </p>
            <div class="flex space-x-[3px] mt-[30px]">
              <img src="./assets/styles/images/star-icon.svg" alt="">
              <img src="./assets/styles/images/star-icon.svg" alt="">
              <img src="./assets/styles/images/star-icon.svg" alt="">
              <img src="./assets/styles/images/star-icon.svg" alt="">
              <img src="./assets/styles/images/star-icon.svg" alt="">
            </div>
            <div class="flex justify-between flex-col sm:flex-row">
              <div>
                <p class="mt-[15px] text-inter font-medium text-[20px] leading-none">Andrew Sarma</p>
                <p class="mt-[8px] text-description-color text-[12px] leading-none">Enterpreneur</p>
              </div>
              <div class="flex gap-[16px] mt-[15px]">
                <img class="w-[40px] h-[40px]" src="./assets/styles/images/arrow-left-icon.svg" alt="">
                <img class="w-[40px] h-[40px]" src="./assets/styles/images/arrow-right-icon.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="flex justify-center">
    <div class="container mt-[138px]">
      <div
        class="bg-[url('/src/assets/styles/images/background-input.png')] pt-[76px] pb-[75px] bg-cover rounded-[30px]"
      >
        <h2 class="font-inter font-semibold text-title-color text-[40px] leading-[40px] text-center">
          Sign up to our newsletter
        </h2>
        <p
          class="font-inter font-normal text-description-color text-[16px]
                                leading-[26px] text-center max-w-[415px] ml-[auto] mr-[auto] mt-[15px]"
        >
          Reciev latest news, update, and many other things every week.
        </p>
        <form class="flex justify-center mt-[40px] input-after w-fit ml-[auto] mr-[auto]">
          <input class="w-[450px] h-[60px] rounded-[12px] p-[26px]" type="text" placeholder="Enter Your email address">
        </form>
      </div>
    </div>
  </section>
  <footer class="flex justify-center mt-[140px]">
    <div class="container flex justify-between mb-[79px] space-x-[30px]">
      <div>
        <a href="#">
          <img class="h-[35px] w-[98px]" src="./assets/styles/images/logo-img.png" alt="">
          <p class="mt-[20px] font-inter font-normal text-description-color text-[16px] leading-[26px] mt-[15px]">
            Enjoy the touring <br> with Salty
          </p>
          <div class="flex gap-[14px] mt-[40px]">
            <svg
              class="socials" width="32" height="32" viewBox="0 0 32 32" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="15.5" stroke="#5B5F62" />
              <path
                d="M16.8946 22V16.7982H18.6636L18.9284 14.576H16.8945V13.1573C16.8945 12.514 17.0597 12.0755
                 17.9124 12.0755L19 12.075V10.0876C18.8119 10.0605 18.1662 10 17.4152 10C15.8471
                  10 14.7735 11.0355 14.7735 12.9373V14.576H13V16.7982H14.7735V21.9999L16.8946 22Z"
                fill="#5B5F62"
              />
            </svg>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15.5" stroke="#5B5F62" />
              <path
                fill-rule="evenodd" clip-rule="evenodd"
                d="M12.07 10.315C12.4512 10.1667 12.8877 10.0654 13.5265 10.0363C14.1666
                10.0068 14.3712 10 16.0007 10C17.6302 10 17.8347 10.0072 18.4745 10.0363C19.1128
                10.0649 19.549 10.1667 19.9309 10.315C20.325 10.4682 20.6599 10.6732 20.9933
                 11.0071C21.3268 11.341 21.5319 11.6754 21.6855 12.07C21.8338 12.4511 21.9351
                  12.8875 21.9641 13.5263C21.9932 14.1661 22 14.3706 22 16C22 17.6294 21.9932
                   17.8335 21.9641 18.4737C21.9355 19.1124 21.8338 19.5487 21.6855 19.9301C21.5319
                    20.3245 21.3273 20.6595 20.9933 20.9929C20.6594 21.3263 20.325 21.5314 19.9305
                     21.685C19.549 21.8333 19.1128 21.9346 18.474 21.9637C17.8343 21.9932 17.6297
                      22 16.0003 22C14.3708 22 14.1666 21.9927 13.5265 21.9637C12.8877 21.9346
                       12.4519 21.8333 12.07 21.685C11.6753 21.5314 11.341 21.3262 11.0071
                        20.9929C10.6732 20.6597 10.4682 20.3245 10.315 19.9301C10.1667 19.5487
                         10.0654 19.1125 10.0363 18.4737C10.0068 17.8339 10 17.6294 10 16C10
                          14.3706 10.0068 14.1661 10.0363 13.5263C10.0654 12.8876 10.1667 12.4514
                           10.315 12.07C10.4682 11.6752 10.6732 11.3405 11.0071 11.0071C11.3411
                            10.6737 11.6753 10.4682 12.07 10.315ZM15.9997 14C14.8953 14 14 14.8955
                             14 16C14 17.1045 14.8953 18 15.9997 18C17.1043 18 18 17.1043 18 16C18
                              14.8957 17.1043 14 15.9997 14ZM12.6667 16C12.6667 14.1594 14.1586
                              12.6667 15.9997 12.6667C17.8405 12.6667 19.3333 14.1591 19.3333
                               16C19.3333 17.8409 17.8405 19.3333 15.9997 19.3333C14.1586
                               19.3333 12.6667 17.8407 12.6667 16ZM20 12.6667C20.3682
                                12.6667 20.6667 12.3682 20.6667 12C20.6667 11.6318
                                 20.3682 11.3333 20 11.3333C19.6318 11.3333 19.3333
                                  11.6318 19.3333 12C19.3333 12.3682 19.6318 12.6667 20 12.6667Z"
                fill="#5B5F62"
              />
            </svg>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15.5" stroke="#5B5F62" />
              <path
                d="M19.0226 10.0027V10H19.7259L19.9829 10.0506C20.1542 10.0835 20.3098 10.1265 20.4495
                 10.1798C20.5893 10.2331 20.7245 10.2952 20.8552 10.3663C20.986 10.4373 21.1046 10.5097
                  21.2111 10.5834C21.3165 10.6562 21.4112 10.7334 21.4951 10.8151C21.578 10.8977
                   21.7074 10.919 21.8832 10.879C22.0591 10.8391 22.2485 10.7836 22.4513 10.7125C22.6542
                    10.6415 22.8548 10.5616 23.0532 10.4728C23.2516 10.384 23.3724 10.3276 23.4157
                     10.3037C23.458 10.2788 23.4806 10.2655 23.4833 10.2637L23.486 10.2597L23.4995
                      10.253L23.5131 10.2464L23.5266 10.2397L23.5401 10.2331L23.5428 10.2291L23.5469
                       10.2264L23.551 10.2238L23.5537 10.2198L23.5672 10.2158L23.5807 10.2131L23.578
                        10.2331L23.5739 10.253L23.5672 10.273L23.5604 10.293L23.5537 10.3063L23.5469
                         10.3196L23.5401 10.3396C23.5356 10.3529 23.5311 10.3707 23.5266 10.3929C23.5221
                          10.4151 23.4793 10.5039 23.3981 10.6593C23.317 10.8147 23.2155 10.9723 23.0938
                           11.1321C22.9721 11.2919 22.8629 11.4126 22.7665 11.4943C22.6691 11.5769 22.6046
                            11.6346 22.5731 11.6675C22.5415 11.7012 22.5031 11.7323 22.4581 11.7607L22.3904
                             11.8047L22.3769 11.8113L22.3634 11.818L22.3607 11.822L22.3566 11.8246L22.3526
                              11.8273L22.3499 11.8313L22.3363 11.838L22.3228 11.8446L22.3202 11.8486L22.316
                               11.8513L22.312 11.8539L22.3093 11.8579L22.3066 11.8619L22.3025 11.8646L22.2985
                                11.8673L22.2958 11.8713H22.3634L22.7421 11.7913C22.9946 11.7381 23.2358 11.6737
                                 23.4657 11.5982L23.8309 11.4784L23.8715 11.465L23.8918 11.4584L23.9053
                                  11.4517L23.9188 11.4451L23.9324 11.4384L23.9459 11.4317L23.9729 11.4277L24
                                   11.4251V11.4517L23.9932 11.4544L23.9865 11.4584L23.9838 11.4624L23.9797
                                    11.465L23.9756 11.4677L23.9729 11.4717L23.9702 11.4757L23.9662
                                     11.4784L23.9621 11.481L23.9594 11.485L23.9567 11.489L23.9527
                                      11.4917L23.9459 11.505L23.9391 11.5183L23.9351 11.521C23.9333
                                       11.5236 23.876 11.5991 23.7633 11.7474C23.6506 11.8966 23.5898
                                       11.972 23.5807 11.9738C23.5717 11.9765 23.5591 11.9898 23.5428
                                       12.0138C23.5275 12.0386 23.432 12.1376 23.2561 12.3108C23.0803
                                        12.4839 22.9081 12.638 22.7394 12.7729C22.5699 12.9088 22.4843
                                         13.0757 22.4825 13.2737C22.4798 13.4708 22.4693 13.6937 22.4513
                                          13.9423C22.4333 14.1909 22.3995 14.4595 22.3499 14.748C22.3003
                                           15.0366 22.2236 15.3629 22.1199 15.727C22.0163 16.091 21.89
                                            16.4462 21.7412 16.7924C21.5924 17.1387 21.4369 17.4495 21.2746
                                             17.7248C21.1123 18 20.9635 18.2331 20.8282 18.424C20.693 18.6149
                                              20.5555 18.7947 20.4157 18.9634C20.2759 19.1321 20.0992 19.3221
                                               19.8855 19.5334C19.6708 19.7439 19.5537 19.8593 19.5338 19.8797C19.5131
           19.8992 19.4247 19.9721 19.2687 20.0981C19.1136 20.225 18.9468 20.352 18.7682
            20.479C18.5906 20.6051 18.4274 20.7103 18.2786 20.7947C18.1298 20.8791 17.9504
            20.9754 17.7403 21.0837C17.5311 21.1929 17.3047 21.2941 17.0613 21.3873C16.8178
             21.4805 16.5609 21.5672 16.2904 21.647C16.0198 21.727 15.7583 21.7891 15.5059
              21.8335C15.2534 21.8779 14.9671 21.9156 14.647 21.9468L14.1668 21.9933V22H13.2876V21.9933L13.1727
               21.9867C13.096 21.9822 13.0329 21.9778 12.9833 21.9734C12.9337 21.969 12.7466 21.9445 12.422
                21.9001C12.0974 21.8557 11.8427 21.8113 11.6578 21.7669C11.473 21.7225 11.1979 21.6382 10.8327
                 21.5139C10.4675 21.3896 10.1551 21.264 9.8954 21.137C9.63662 21.0109 9.47431 20.931 9.40847
                  20.8972C9.34355 20.8644 9.27052 20.8236 9.18936 20.7747L9.06763 20.7015L9.06494 20.6975L9.06086
                   20.6948L9.05681 20.6922L9.0541 20.6881L9.04058 20.6815L9.02705 20.6748L9.02436 20.6708L9.02029
                    20.6681L9.01623 20.6655L9.01352 20.6615L9.01084 20.6575L9.00677 20.6548H9V20.6282L9.01352
                     20.6309L9.02705 20.6348L9.08791 20.6415C9.1285 20.6459 9.23896 20.6526 9.4193 20.6615C9.59965
                      20.6704 9.79125 20.6704 9.99414 20.6615C10.197 20.6526 10.4044 20.6326 10.6163 20.6016C10.8282
                       20.5705 11.0785 20.5172 11.367 20.4417C11.6556 20.3663 11.9207 20.2766 12.1623 20.1727C12.4031
                        20.0679 12.5744 19.9898 12.6763 19.9383C12.7773 19.8877 12.9315 19.7936 13.1389 19.6559L13.45
                         19.4495L13.4527 19.4455L13.4567 19.4429L13.4608 19.4402L13.4635 19.4362L13.4662 19.4321L13.4702
                          19.4295L13.4743 19.4268L13.477 19.4229L13.4905 19.4189L13.5041 19.4162L13.5068 19.4029L13.5108
      19.3895L13.5149 19.3869L13.5176 19.3829L13.4094 19.3763C13.3372 19.3719 13.2674 19.3673 13.1997
      19.3629C13.1321 19.3585 13.0262 19.3385 12.8819 19.303C12.7376 19.2674 12.5821 19.2142 12.4152 19.1432C12.2484
       19.0722 12.0861 18.9878 11.9283 18.8901C11.7705 18.7925 11.6564 18.7112 11.5861 18.6464C11.5167 18.5825
        11.4265 18.4919 11.3156 18.3747C11.2056 18.2566 11.11 18.1354 11.0289 18.0111C10.9477 17.8868 10.8702
         17.7434 10.7962 17.5809L10.684 17.3385L10.6772 17.3185L10.6704 17.2985L10.6664 17.2853L10.6637
          17.2719L10.684 17.2745L10.7042 17.2786L10.853 17.2985C10.9522 17.3119 11.1078 17.3163 11.3197
           17.3119C11.5316 17.3075 11.6781 17.2986 11.7592 17.2853C11.8404 17.2719 11.89 17.263 11.908
            17.2586L11.9351 17.252L11.9689 17.2453L12.0027 17.2386L12.0054 17.2347L12.0095
             17.2319L12.0135 17.2293L12.0162 17.2253L11.9892 17.2187L11.9621 17.212L11.9351
              17.2053L11.908 17.1986L11.881 17.192C11.8629 17.1876 11.8314 17.1787 11.7863
               17.1653C11.7412 17.1521 11.6195 17.1032 11.4211 17.0189C11.2227 16.9345
                11.0649 16.8524 10.9477 16.7725C10.8302 16.6923 10.7181 16.6047 10.6123
                 16.5101C10.5068 16.4142 10.3909 16.2908 10.2646 16.1399C10.1384 15.9889
                  10.0257 15.8135 9.92651 15.6137C9.82732 15.4139 9.75293 15.2231 9.70333
                   15.041C9.65394 14.8601 9.62135 14.6751 9.60596 14.4883L9.5816 14.2087L9.59513
                    14.2113L9.60865 14.2153L9.62219 14.222L9.63571 14.2286L9.64923 14.2353L9.66276
                     14.242L9.87241 14.3352C10.0122 14.3973 10.1858 14.4506 10.3931 14.495C10.6006
                      14.5394 10.7245 14.5638 10.7651 14.5682L10.826 14.5749H10.9477L10.945
                       14.5709L10.9409 14.5682L10.9369 14.5656L10.9342 14.5616L10.9315
                        14.5576L10.9274 14.555L10.9234 14.5523L10.9207 14.5483L10.9071
                        14.5416L10.8936 14.535L10.8909 14.531L10.8868 14.5283L10.8828
                         14.5257L10.8801 14.5217L10.8665 14.515L10.853 14.5083L10.8503
                          14.5044C10.8476 14.5026 10.8088 14.4741 10.734 14.4191C10.66
                           14.3632 10.5825 14.2908 10.5014 14.202C10.4202 14.1132 10.339
                            14.02 10.2579 13.9223C10.1766 13.8244 10.1042 13.7197 10.0415
                             13.6093C9.97837 13.4983 9.91163 13.3572 9.8413 13.1858C9.77187
                              13.0153 9.71912 12.8435 9.68305 12.6704C9.64699 12.4972 9.6267
                               12.3263 9.62219 12.1576C9.61768 11.9889 9.62218 11.8446 9.63571
                                11.7248C9.64923 11.6049 9.67628 11.4695 9.71687 11.3185C9.75744
                                 11.1676 9.81606 11.0078 9.89269 10.8391L10.0077 10.586L10.0144
                                  10.566L10.0212 10.5461L10.0253 10.5434L10.028 10.5394L10.0307
                                   10.5354L10.0347 10.5327L10.0388 10.5354L10.0415
                                    10.5394L10.0442 10.5434L10.0482 10.5461L10.0523 10.5487L10.055
                                     10.5527L10.0577 10.5567L10.0618 10.5594L10.0685 10.5727L10.0753
                                      10.586L10.0794 10.5887L10.0821 10.5927L10.2646 10.7925C10.3864
                                       10.9256 10.5307 11.0744 10.6975 11.2386C10.8643 11.4029 10.9567
                                        11.4881 10.9747 11.4943C10.9928 11.5014 11.0153 11.5219 11.0424
            11.5556C11.0694 11.5885 11.1596 11.667 11.3129 11.7913C11.4662 11.9156 11.6668
             12.0599 11.9148 12.2242C12.1628 12.3884 12.4378 12.5505 12.7399
              12.7103C13.0419 12.8701 13.3666 13.0144 13.7137 13.1432C14.0609
               13.2719 14.3043 13.3563 14.4441 13.3962C14.5839 13.4362 14.8228
                13.4872 15.1609 13.5494C15.4991 13.6116 15.7538 13.6515 15.9251
                 13.6693C16.0965 13.687 16.2137 13.6972 16.2768 13.6999L16.3715
                  13.7026L16.3688 13.6826L16.3648 13.6626L16.3377 13.4961C16.3196
                   13.3851 16.3106 13.2297 16.3106 13.03C16.3106 12.8302 16.3265
                    12.646 16.358 12.4773C16.3895 12.3085 16.4369 12.1376 16.5 11.9645C16.5631
                     11.7913 16.6249 11.6524 16.6853 11.5476C16.7466 11.4437 16.8268 11.3252
                      16.9261 11.192C17.0252 11.0588 17.1538 10.9212 17.3116 10.7791C17.4694
                       10.6371 17.6497 10.5105 17.8526 10.3996C18.0554 10.2886 18.2425
                        10.2042 18.4138 10.1465C18.5852 10.0888 18.7295 10.0511
                         18.8467 10.0333C18.9639 10.0155 19.0226 10.0053 19.0226 10.0027Z"
                fill="#5B5F62"
              />
            </svg>
          </div>
        </a>
      </div>
      <div class="max-w-[754px] w-[100%] flex justify-between">
        <div>
          <h3 class="font-inter font-medium text-title-color text-[18px] leading-[18px] mt-[6px]">Resources</h3>
          <ul class="mt-[25px] text-[#676A6C] flex flex-col gap-[10px]">
            <li><a href="#">Download</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Guide Book</a></li>
            <li><a href="#">App Directory</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-inter font-medium text-title-color text-[18px] leading-[18px] mt-[6px]">Travellers</h3>
          <ul class="mt-[25px] text-[#676A6C] flex flex-col gap-[10px]">
            <li><a href="#">Why Travellers</a></li>
            <li><a href="#">Enterprice</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Instagram post</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-inter font-medium text-title-color text-[18px] leading-[18px] mt-[6px]">Company</h3>
          <ul class="mt-[25px] text-[#676A6C] flex flex-col gap-[10px]">
            <li><a href="#">Travelling</a></li>
            <li><a href="#">About Locato</a></li>
            <li><a href="#">Success</a></li>
            <li><a href="#">Information</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-inter font-medium text-title-color text-[18px] leading-[18px] mt-[6px]">Get App</h3>
          <ul class="mt-[25px] text-[#676A6C] flex flex-col gap-[10px] tracking-[-0.4px]">
            <li><a href="#">App Store</a></li>
            <li><a href="#">Google Play Store</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">

.after-gradient::after {
  content: "Visite";
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0%;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  border-radius: 85px;
  opacity: 0;
  transition: all ease-in-out 0.25s;
}

.after-gradient:hover::after {
  opacity: 1;
}

.book-btn {
  border: 1px solid #2D3134;
  color: #2D3134;
  transition: all ease-in-out 0.25s;
}

.book-btn:hover {
  color: #FFFFFF;
  background: #2D3134;
}

.input-after {
  position: relative;
}

.input-after::after {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  width: 66px;
  height: 60px;
  background-image: url('assets/styles/images/input-icon.png');
}

.gallery {
  margin-top: 50px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 270px 370px 170px 270px;
  grid-template-rows: 250px 246px;

  &__box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    border-radius: 20px;
    background-size: cover;

    &-first-item {
      grid-column: 3 / span 2;
      grid-row: 1;
    }

    &-second-item {
      margin-top: -4px;
      grid-column: 1;
      grid-row: 2;
    }

    &-third-item {
      margin-top: -17px;
      grid-column: 3;
      grid-row: 2;
    }
  }
}

@media(max-width:1230px) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 180px 230px;
  }
}

</style>
