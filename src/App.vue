<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable max-len -->
<template>
  <div class="xl:w-[1170px] xl:mx-[auto] mx-10">
    <header class="h-[102px] mt-6">
      <div class="flex items-center">
        <img src="./assets/assets/Logo.svg" alt="Logo" />

        <ul class="flex font-normal lg:ml-[72px] ml-4">
          <li class="link">
            <a id="first" class="link" href="#first">Home</a>
          </li>
          <li class="ml-9">
            <a id="second" class="link" href="#second">About us</a>
          </li>
          <li class="ml-9">
            <a id="third" class="link" href="#third">Destinations</a>
          </li>
          <li class="ml-9">
            <a id="fourth" class="link" href="#fourth">Tours</a>
          </li>
          <li class="ml-9">
            <a id="fifth" class="link" href="#fifth">Blog</a>
          </li>
        </ul>

        <a
          href="#"
          class="flex lg:px-[34px] px-2 py-2 lg:py-5 border-[1px] rounded-[50px] border-primary ml-[auto]"
        >
          <span class="text-primary font-medium">Book Now</span>
          <img class="ml-[9px]" src="./assets/assets/book.svg" alt="book" />
        </a>
      </div>
    </header>
    <main>
      <section class="about xl:flex">
        <div class="lg:mt-[74px]">
          <h1
            class="text-[84px] leading-[86px] mx-[auto] xl:mr-[109px] xl:ml-[0px] mb-[26px] max-w-[577px]"
          >
            Discover the Best Lovely Places
          </h1>

          <p
            class="text-[18px] leading-[24px] xl:max-w-[500px] text-gray-light mb-[44px] mx-[auto] xl:mx-[0] max-w-[577px]"
          >
            Plan and book your perfect trip with expert advice, travel tips,
            destination information and inspiration from us.
          </p>
          <div
            class="flex bg-[#FDFEFF] max-w-[500px] rounded-[100px] h-[76px] items-center pl-[28px] pr-[20px] mx-[auto] xl:mx-[0]"
          >
            <div class="mr-[68px]">
              <p class="text-[18px] leading-[17px] mb-[8px]">Where</p>
              <div class="flex">
                <p
                  class="text-[12px] leading-[12px] mr-[26px] text-[#9498A4] cursor-pointer"
                >
                  Center Point, Lo...
                </p>
                <img src="./assets/assets/location.svg" alt="locaition" />
              </div>
            </div>

            <div
              class="before:block before:absolute before:h-[47px] before:w-[1px] relative inline-block before:top-[-5px] before:left-[-35px] before:bg-[#EAEAEB]"
            >
              <p class="text-[18px] leading-[17px] mb-[8px]">Date</p>
              <div class="flex">
                <p
                  class="text-[12px] leading-[12px] mr-[26px] text-[#9498A4] cursor-pointer"
                >
                  09th March 2021
                </p>

                <img src="./assets/assets/date.svg" alt="date" />
              </div>
            </div>
            <img
              class="ml-[auto] cursor-pointer"
              src="./assets/assets/search.svg"
              alt="search"
            />
          </div>
        </div>
        <div
          class="relative w-[470px] h-[596px] xl:ml-[auto] mx-[auto] xl:mx-[0]"
        >
          <img
            class="absolute top-[29px] left-[15px]"
            src="./assets/assets/about-img.png"
            alt="about image"
          />
          <img
            class="absolute top-[134px] right-[-22px]"
            src="./assets/assets/orion.svg"
            alt=""
          />
          <img
            class="absolute top-[72px] left-[54px] rotate-[-33.79deg)]"
            src="./assets/assets/map.svg"
            alt=""
          />
          <div
            class="w-[133px] h-[145.7px] bg-white rounded-[10px] absolute bottom-[52.3px] left-[-42px]"
          >
            <img
              class="rounded-t-[10px]"
              src="./assets/assets/sand.jpg"
              alt="sand"
            />
            <div
              class="absolute top-[28px] right-[-15px] flex pt-[7px] pl-[6px] pr-[5px] pb-[6px] bg-white rounded-[5px]"
            >
              <img
                class="mr-[5px]"
                src="./assets/assets/marker.svg"
                alt="marker"
              />
              <p class="text-[10px] leading-[12px]">Dubai</p>
            </div>
            <p class="mt-[11px] text-[12px] leading-[15px] text-center">
              Dubai moruvumi
            </p>
            <div class="flex absolute bottom-[-15px] right-[4px]">
              <img
                class="w-[33.3px] h-[33.3px] rounded-[50%] border-[2.5px] border-white"
                src="./assets/assets/avatar1.png"
                alt="avatar1"
              />
              <img
                class="w-[33.3px] h-[33.3px] rounded-[50%] border-[2.5px] border-white translate-x-[-10px]"
                src="./assets/assets/avatar2.png"
                alt="avatar2"
              />
              <img
                class="w-[33.3px] h-[33.3px] rounded-[50%] border-[2.5px] border-white translate-x-[-20px]"
                src="./assets/assets/avatar3.png"
                alt="avatar3"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="categories lg:mt-[139px] mt-10">
        <div class="flex mb-[24px]">
          <h2 class="font-semibold text-[56px] leading-[56px]">Categories</h2>
          <div class="flex ml-[auto]">
            <div
              class="bg-white w-[54px] h-[54px] rounded-[50%] flex justify-center items-center border-[1px] border-gray-dark mr-[16px] cursor-pointer"
            >
              <img src="./assets/assets/arr-left.svg" alt="arrow left" />
            </div>
            <div
              class="bg-gray-dark w-[54px] h-[54px] rounded-[50%] flex justify-center items-center border-[1px] text-white-dark cursor-pointer"
            >
              <img src="./assets/assets/arr-right.svg" alt="arrow right" />
            </div>
          </div>
        </div>
        <p class="leading-[24px] max-w-[370px] text-gray-light mb-[60px]">
          Here are lots of interesting destinations to visit, but don’t be
          confused—they’re already grouped by category.
        </p>
        <div class="flex justify-between">
          <div class="ml-[10px] cursor-pointer">
            <img src="./assets/assets/beach.png" alt="beach" />
            <p class="text-center">Beach</p>
          </div>
          <div class="ml-[10px] cursor-pointer">
            <img src="./assets/assets/desert.png" alt="Desert" />
            <p class="text-center">Desert</p>
          </div>
          <div class="ml-[10px] cursor-pointer">
            <img src="./assets/assets/mountain.png" alt="Mountain" />
            <p class="text-center">Mountain</p>
          </div>
          <div class="ml-[10px] cursor-pointer">
            <img src="./assets/assets/temple.png" alt="Temple" />
            <p class="text-center">Temple</p>
          </div>
          <div class="ml-[10px] cursor-pointer">
            <img src="./assets/assets/tower.png" alt="Tower" />
            <p class="text-center">Tower</p>
          </div>
          <div class="mx-[10px] cursor-pointer">
            <img src="./assets/assets/pyramid.png" alt="Pyramid" />
            <p class="text-center">Pyramid</p>
          </div>
        </div>
      </section>
      <section class="stories lg:mt-[140px] mt-10 xl:flex justify-between">
        <div class="w-[492px] h-[659px] relative xl:mx-[0] mx-[auto]">
          <img
            class="absolute left-[4px]"
            src="./assets/assets/stories.png"
            alt="boy"
          />
          <div
            class="absolute bottom-[184px] left-[-53px] flex flex-col items-center py-[20px] bg-white rounded-[14px] w-[140px]"
          >
            <img class="mb-[30px]" src="./assets/assets/star-marker.svg" />
            <p
              class="text-primary text-[30px] leading-[30px] text-center mb-[8px]"
            >
              600%
            </p>
            <p class="text-[19px] text-[#939597] font-normal">Destinations</p>
          </div>
          <div
            class="absolute px-[21px] py-[20px] bg-white rounded-[10px] w-[171px] bottom-[77px] right-[10px]"
          >
            <div class="flex items-center mb-[10px]">
              <img
                class="mr-[16px]"
                src="./assets/assets/network.svg"
                alt="network"
              />
              <p class="text-[28px] leading-[30px]">5000+</p>
            </div>
            <p class="ml-[38px] text-gray-light">Customers</p>
          </div>
        </div>
        <div>
          <p
            class="font-semibold text-[20px] leading-[20px] text-primary max-w-[max-content] xl:mx-[0] mx-[auto]"
          >
            Our Experience
          </p>
          <h2
            class="text-gray-dark font-semibold text-[56px] leading-[66px] max-w-[467px] mb-[20px] xl:mx-[0] mx-[auto]"
          >
            Our Stories Have Adventures
          </h2>
          <p
            class="leading-[26px] text-gray-light max-w-[467px] mb-[40px] xl:mx-[0] mx-[auto]"
          >
            We are experienced in bringing adventures to stay their journey,
            with all outdoor destinations in the world as our specialties. Start
            your adventure now! Nature has already called you!
          </p>
          <div class="flex justify-center">
            <div
              class="pt-[30px] pb-[26px] bg-white rounded-[14px] w-[166px] mr-[20px]"
            >
              <p
                class="font-semibold text-[46px] leading-[46px] text-primary text-center mb-[18px]"
              >
                12K+
              </p>
              <p
                class="text-center lg:text-[22px] text-[4] leading-[29px] text-[#939597]"
              >
                Success Journey
              </p>
            </div>
            <div
              class="pt-[30px] pb-[26px] bg-white rounded-[14px] w-[166px] mr-[20px]"
            >
              <p
                class="font-semibold text-[46px] leading-[46px] text-primary text-center mb-[18px]"
              >
                16+
              </p>
              <p
                class="text-center lg:text-[22px] text-[4] leading-[29px] text-[#939597]"
              >
                Awards Winning
              </p>
            </div>
            <div class="pt-[30px] pb-[26px] bg-white rounded-[14px] w-[166px]">
              <p
                class="font-semibold text-[46px] leading-[46px] text-primary text-center mb-[18px]"
              >
                20+
              </p>
              <p
                class="text-center lg:text-[22px] text-[4] leading-[29px] text-[#939597]"
              >
                Years Of Experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="destination mt-[55px] lg:mb-[35px]">
        <div class="flex mb-[24px] items-center">
          <h2 class="font-semibold text-[56px] leading-[56px] max-w-[400px]">
            Find Popular Destination
          </h2>
          <div class="flex ml-[auto]">
            <div
              class="bg-white w-[54px] h-[54px] rounded-[50%] flex justify-center items-center border-[1px] border-gray-dark mr-[16px] cursor-pointer"
            >
              <img src="./assets/assets/arr-left.svg" alt="arrow left" />
            </div>
            <div
              class="bg-gray-dark w-[54px] h-[54px] rounded-[50%] flex justify-center items-center border-[1px] text-white-dark cursor-pointer"
            >
              <img src="./assets/assets/arr-right.svg" alt="arrow right" />
            </div>
          </div>
        </div>
        <div class="flex xl:w-[max-content]">
          <div
            class="w-[386px] px-[12px] pt-[12px] pb-[36px] border-[2px] border-white rounded-[16px] mr-[30px] h-[100%]"
          >
            <img
              class="rounded-[16px] lg:max-w-[362px] max-w-[250px]"
              src="./assets/assets/des-1.jpg"
              alt="Mountain Hiking Tour"
            />
            <h5
              class="font-semibold lg:text-[24px] text-4 leading-[24px] text-gray-dark mt-[24px] mb-[14px]"
            >
              Mountain Hiking Tour
            </h5>
            <p class="text-[14px] leading-[14px] text-gray-light mb-[35px]">
              Mountain Hiking Tour
            </p>
            <div class="flex">
              <p
                class="font-semibold text-[24px] leading-[20px] text-gray-dark"
              >
                $89<span class="text-[16px] leading-[20px] text-gray-light"
                  >/Person</span
                >
              </p>
              <a
                class="ml-[auto] w-[100px] h-[37px] flex justify-center items-center rounded-[46px] bg-gray-dark"
                href="#"
                ><p class="text-white text-[14px] leading-[14px]">
                  Book Now
                </p></a
              >
            </div>
          </div>
          <div
            class="w-[386px] px-[12px] pt-[12px] pb-[36px] border-[2px] border-white rounded-[16px] mr-[30px] h-[100%]"
          >
            <img
              class="rounded-[16px] lg:max-w-[362px] max-w-[250px]"
              src="./assets/assets/des-2.jpg"
              alt="Mountain Hiking Tour"
            />
            <h5
              class="font-semibold lg:text-[24px] text-4 leading-[24px] text-gray-dark mt-[24px] mb-[14px]"
            >
              Machu Picchu, Peru
            </h5>
            <p class="text-[14px] leading-[14px] text-gray-light mb-[35px]">
              Machu Picchu, Peru
            </p>
            <div class="flex">
              <p
                class="font-semibold text-[24px] leading-[20px] text-gray-dark"
              >
                $99<span class="text-[16px] leading-[20px] text-gray-light"
                  >/Person</span
                >
              </p>
              <a
                class="ml-[auto] w-[100px] h-[37px] flex justify-center items-center rounded-[46px] bg-white border-gray-dark border-[1px]"
                href="#"
                ><p class="text-gray-dark text-[14px] leading-[14px]">
                  Book Now
                </p></a
              >
            </div>
          </div>
          <div
            class="w-[386px] px-[12px] pt-[12px] pb-[36px] border-[2px] border-white rounded-[16px] mr-[30px] h-[100%]"
          >
            <img
              class="rounded-[16px] lg:max-w-[362px] max-w-[250px]"
              src="./assets/assets/des-3.jpg"
              alt="Mountain Hiking Tour"
            />
            <h5
              class="font-semibold lg:text-[24px] text-4 leading-[24px] text-gray-dark mt-[24px] mb-[14px]"
            >
              The Grand Canyon, Arizona
            </h5>
            <p class="text-[14px] leading-[14px] text-gray-light mb-[35px]">
              Mountain Hiking Tour
            </p>
            <div class="flex">
              <p
                class="font-semibold text-[24px] leading-[20px] text-gray-dark"
              >
                $70<span class="text-[16px] leading-[20px] text-gray-light"
                  >/Person</span
                >
              </p>
              <a
                class="ml-[auto] w-[100px] h-[37px] flex justify-center items-center rounded-[46px] bg-white border-gray-dark border-[1px]"
                href="#"
                ><p class="text-gray-dark text-[14px] leading-[14px]">
                  Book Now
                </p></a
              >
            </div>
          </div>
          <div
            class="w-[386px] px-[12px] pt-[12px] pb-[36px] border-[2px] border-white rounded-[16px] h-[100%]"
          >
            <img
              class="rounded-l-[16px] lg:max-w-[362px] max-w-[250px]"
              src="./assets/assets/des-3.jpg"
              alt="Mountain Hiking Tour"
            />
            <h5
              class="font-semibold lg:text-[24px] text-4 leading-[24px] text-gray-dark mt-[24px] mb-[14px]"
            >
              Rome, Italy
            </h5>
            <p class="text-[14px] leading-[14px] text-gray-light mb-[35px]">
              Mountain Hiking Tour
            </p>
            <div class="flex">
              <p
                class="font-semibold text-[24px] leading-[20px] text-gray-dark"
              >
                $90<span class="text-[16px] leading-[20px] text-gray-light"
                  >/Person</span
                >
              </p>
              <a
                class="ml-[auto] w-[100px] h-[37px] flex justify-center items-center rounded-[46px] bg-gray-dark"
                href="#"
                ><p class="text-white text-[14px] leading-[14px]">
                  Book Now
                </p></a
              >
            </div>
          </div>
        </div>
      </section>
      <section class="top-destinations lg:mt-[115px] mb-[16px]">
        <div>
          <h2
            class="font-semibold text-[56px] leadeing-[66px] text-gray-dark text-center"
          >
            Top Destinations
          </h2>
          <p class="text-center text-gray-light mb-[28px]">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
          </p>

          <div class="flex justify-center">
            <a href="#" class="mr-[14px]">
              <p
                class="text-[14px] leading-[14px] text-white px-[20px] py-[10px] bg-gray-dark w-[min-content] rounded-[30px]"
              >
                London
              </p>
            </a>
            <a href="#" class="mr-[14px]">
              <p
                class="text-[14px] leading-[14px] text-gray-dark px-[20px] py-[10px] bg-white w-[min-content] rounded-[30px] border-[1px] border-gray-dark"
              >
                Bangkok
              </p>
            </a>
            <a href="#" class="mr-[14px]">
              <p
                class="text-[14px] leading-[14px] text-gray-dark px-[20px] py-[10px] bg-white w-[min-content] rounded-[30px] border-[1px] border-gray-dark"
              >
                England
              </p>
            </a>
            <a href="#" class="mr-[14px]">
              <p
                class="text-[14px] leading-[14px] text-gray-dark px-[20px] py-[10px] bg-white w-[min-content] rounded-[30px] border-[1px] border-gray-dark"
              >
                Singapore
              </p>
            </a>
            <a href="#">
              <p
                class="text-[14px] leading-[14px] text-gray-dark px-[20px] py-[10px] bg-white w-[min-content] rounded-[30px] border-[1px] border-gray-dark"
              >
                Italy
              </p>
            </a>
          </div>

          <div class="grid xl:ggrid ggrid2 mt-[53px]">
            <div class="relative cursor-pointer">
              <img class="grid1" src="./assets/assets/des1.png" alt="" />
              <span
                class="bg-white px-[10px] py-[5px] rounded-[16px] absolute top-[24px] left-[24px] text-[14px]"
                >3.5</span
              >
              <div class="flex flex-col absolute left-[24px] bottom-[24px]">
                <span class="font-semibold text-[20px] text-white"
                  >Vientam</span
                >
                <span class="text-[14px] text-white">Worefall</span>
              </div>
            </div>
            <div class="relative grid2 cursor-pointer">
              <img src="./assets/assets/des2.png" alt="" />
              <span
                class="bg-white px-[10px] py-[5px] rounded-[16px] absolute top-[24px] left-[24px] text-[14px]"
                >3.5</span
              >
              <div class="flex flex-col absolute left-[24px] bottom-[-240px]">
                <span class="font-semibold text-[20px] text-white"
                  >Vientam</span
                >
                <span class="text-[14px] text-white">Worefall</span>
              </div>
            </div>
            <div class="relative grid3 xl:block hidden cursor-pointer">
              <img src="./assets/assets/des3.png" alt="" />
              <span
                class="bg-white px-[10px] py-[5px] rounded-[16px] absolute top-[24px] left-[24px] text-[14px]"
                >3.5</span
              >
              <div class="flex flex-col absolute left-[24px] bottom-[24px]">
                <span class="font-semibold text-[20px] text-white"
                  >Vientam</span
                >
                <span class="text-[14px] text-white">Worefall</span>
              </div>
            </div>
            <div class="relative grid4 cursor-pointer">
              <img src="./assets/assets/des4.png" alt="" />
              <span
                class="bg-white px-[10px] py-[5px] rounded-[16px] absolute top-[24px] left-[24px] text-[14px]"
                >3.5</span
              >
              <div class="flex flex-col absolute left-[24px] bottom-[24px]">
                <span class="font-semibold text-[20px] text-white"
                  >Vientam</span
                >
                <span class="text-[14px] text-white">Worefall</span>
              </div>
            </div>
            <div class="relative grid5 xl:block hidden cursor-pointer">
              <img src="./assets/assets/des5.png" alt="" />
              <span
                class="bg-white px-[10px] py-[5px] rounded-[16px] absolute top-[24px] left-[24px] text-[14px]"
                >3.5</span
              >
              <div class="flex flex-col absolute left-[24px] bottom-[24px]">
                <span class="font-semibold text-[20px] text-white"
                  >Vientam</span
                >
                <span class="text-[14px] text-white">Worefall</span>
              </div>
            </div>
            <div class="relative grid6 xl:block hidden cursor-pointer">
              <img src="./assets/assets/des6.png" alt="" />
              <span
                class="bg-white px-[10px] py-[5px] rounded-[16px] absolute top-[24px] left-[24px] text-[14px]"
                >3.5</span
              >
              <div class="flex flex-col absolute left-[24px] bottom-[24px]">
                <span class="font-semibold text-[20px] text-white"
                  >Vientam</span
                >
                <span class="text-[14px] text-white">Worefall</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="review mt-[116px] flex lg:mb-[124px] mb-10">
        <img
          class="border-[2px] px-[8px] pt-[8px] pb-[16px] ml-[60px] lg:h-[100%] h-[250px] lg:mr-2 mr-6"
          src="./assets/assets/guy.png"
          alt="guy"
        />

        <div class="ml-[auto] mt-[51px]">
          <h2
            class="font-semibold text-[56px] leading-[66px] text-gray-dark max-w-[467px] relative before:block before:absolute before:h-[8px] before:w-[67px] before:top-[-12px] before:bg-[#FFD482] before:rounded-[4px]"
          >
            A customer said about us:
          </h2>

          <div class="p-[30px] bg-white rounded-[14px] max-w-[537px] mt-[26px]">
            <p class="text-[18px] leading-[30px] text-gray-light mb-[26px]">
              Salty helped me a lot in finding the best place for our first
              outdoor adventure trip. They responded very quickly and gave me a
              detailed account of the place—its history, as well as its best
              features.
            </p>
            <div class="flex">
              <img
                class="mr-[3.64px] cursor-pointer"
                src="./assets/assets/star.svg"
                alt="star"
              />
              <img
                class="mr-[3.64px] cursor-pointer"
                src="./assets/assets/star.svg"
                alt="star"
              />
              <img
                class="mr-[3.64px] cursor-pointer"
                src="./assets/assets/star.svg"
                alt="star"
              />
              <img
                class="mr-[3.64px] cursor-pointer"
                src="./assets/assets/star.svg"
                alt="star"
              />
              <img
                class="cursor-pointer"
                src="./assets/assets/star.svg"
                alt="star"
              />
            </div>
            <div class="flex mt-[17px]">
              <div>
                <p class="font-medium text-[20px] leading-[20px] mb-[8px]">
                  Andrew Sarma
                </p>
                <p class="text-[12px] leading-[12px] text-gray-light">
                  Enterpreneur
                </p>
              </div>
              <div class="flex ml-[auto]">
                <div
                  class="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center border-[1px] border-gray-dark mr-[16px] cursor-pointer"
                >
                  <img src="./assets/assets/arr-left.svg" alt="arrow left" />
                </div>
                <div
                  class="bg-gray-dark w-[40px] h-[40px] rounded-[50%] flex justify-center items-center border-[1px] text-white-dark cursor-pointer"
                >
                  <img src="./assets/assets/arr-right.svg" alt="arrow right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="sign-up lg:mb-[61px] relative">
        <img class="absolute w-[100%]" src="./assets/assets/curves.svg" />
        <div class="bg-[#FFD482] py-[75px]">
          <h2
            class="font-semibold text-[40px] leading-[40px] text-gray-dark tracking-[0.15px] text-center mb-[16px]"
          >
            Sign up to our newsletter
          </h2>
          <p
            class="text-[16px] leading-[26px] text-center max-w-[415px] mx-[auto] text-gray-light mb-[40px]"
          >
            Review latest news, update, and many other things every week.
          </p>
          <form
            class="flex content-center relative px-[10px] py-[8px] bg-white w-[450px] rounded-[12px] mx-[auto]"
          >
            <input
              class="text-[14px] leading-[14px] placeholder:text-[14px] placeholder:leading-[14px] w-[100%]"
              type="text"
              placeholder="Enter Your email address"
            />
            <button
              class="relative w-[40px] h-[40px] bg-primary rounded-[12px]"
            >
              <img
                class="absolute top-[6px]"
                src="./assets/assets/icon-send1.png"
                alt="send-icon"
              />
            </button>
          </form>
        </div>
      </section>
    </main>
    <footer class="footer py-[79px] flex">
      <div>
        <img class="mb-[20px]" src="./assets/assets/Logo.svg" alt="logo" />
        <p
          class="mb-[40px] text-[16px] leading-[26px] text-gray-light max-w-[141px]"
        >
          Enjoy the touring with Salty
        </p>
        <div class="flex">
          <a href="#"
            ><img
              class="mr-[14px]"
              src="./assets/assets/facebook.svg"
              alt="facebook"
          /></a>
          <a href="#"
            ><img
              class="mr-[14px]"
              src="./assets/assets/instagram.svg"
              alt="instagram"
          /></a>
          <a href="#"
            ><img src="./assets/assets/twitter.svg" alt="twitter"
          /></a>
        </div>
      </div>
      <div class="flex ml-[auto]">
        <div class="lg:mr-[113px] mr-[25px]">
          <h6 class="footer__title">Resources</h6>
          <ul>
            <li class="footer__link"><a href="#">Download</a></li>
            <li class="footer__link"><a href="#">Help Center</a></li>
            <li class="footer__link"><a href="#">Guide Book</a></li>
            <li class="footer__link"><a href="#">App Directory</a></li>
          </ul>
        </div>
        <div class="lg:mr-[113px] mr-[25px]">
          <h6 class="footer__title">Travelers</h6>
          <ul>
            <li class="footer__link"><a href="#"> Why Travelers</a></li>
            <li class="footer__link"><a href="#">Enterprise</a></li>
            <li class="footer__link"><a href="#">Customer Stories</a></li>
            <li class="footer__link"><a href="#">Instagram post</a></li>
          </ul>
        </div>
        <div class="lg:mr-[113px] mr-[25px]">
          <h6 class="footer__title">Company</h6>
          <ul>
            <li class="footer__link"><a href="#">Travelling</a></li>
            <li class="footer__link"><a href="#">About Location</a></li>
            <li class="footer__link"><a href="#">Success</a></li>
            <li class="footer__link"><a href="#">Information</a></li>
          </ul>
        </div>
        <div>
          <h6 class="footer__title">Get App</h6>
          <ul>
            <li class="footer__link"><a href="#">App Store</a></li>
            <li class="footer__link"><a href="#">Google Play Store</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// YOUR CODE HERE
</script>

<style lang="scss">
*,
*::before,
*::after {
  // box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}
body {
  @apply bg-white-dark font-main;
}

.link {
  @apply before:block before:absolute before:h-[2px] before:w-[12px]
   relative  before:top-[25px] cursor-pointer before:bg-white-dark target:before:bg-primary;
}
.footer__title {
  @apply font-medium text-[18px] leading-[18px] text-gray-dark mb-[22px];
}
.footer__link {
  @apply font-normal text-[14px] leading-[34px] text-[#676A6C];
}

.ggrid {
  grid-template-columns: 270px 370px 170px 270px;
  grid-template-rows: 263px 263px;
  grid-column-gap: 30px;
}
.ggrid2 {
  grid-template-columns: 270px 370px;
  grid-template-rows: 263px 263px;
  grid-column-gap: 30px;
  max-width: max-content;
  margin: 53px auto 0;
}

.grid1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  align-self: start;
}
.grid2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.grid3 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
}
.grid4 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  align-self: end;
}
.grid5 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
.grid6 {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
