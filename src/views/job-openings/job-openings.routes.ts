import type { RouteRecordRaw } from 'vue-router'

import JobOpening from './JobOpening.vue'

export const JobOpeningRouteNames = {
    jobOpening: 'JobOpening',
}

export const JobOpeningRoutes: RouteRecordRaw[] = [
    {
        path: '/job-opening',
        name: JobOpeningRouteNames.jobOpening,
        component: JobOpening
    }
]
