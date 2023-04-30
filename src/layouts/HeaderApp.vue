<template>
    <header>
        <nav>
            <ul class="flex gap-6 pb-10">
                <li>
                    <RouterLink :to="{name: $routeNames.contacts}" class="text-xl hover:text-light-blue" active-class="text-light-blue">
                    Contacts
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name: $routeNames.jobOpening}" class="text-xl hover:text-light-blue" active-class="text-light-blue">
                    Job openings
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>