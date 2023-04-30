<template>
  <header>
    <nav>
      <ul class="flex gap-3 pb-[20px]">
        <li>
          <RouterLink active-class="text-[#ffb400]" :to="{name: $routeNames.contacts }">
            Contacts
          </RouterLink>
        </li>
        <li>
          <RouterLink active-class="text-[#ffb400]" :to="{name: $routeNames.jobOpening }">
            Job Openings
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
