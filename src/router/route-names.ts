import { contactRouteNames } from '@/views/contacts/contacts.routes'
import { JobOpeningRouteNames } from '@/views/job-openings/job-openings.routes'

export const routeNames = {
  ...contactRouteNames,
  ...JobOpeningRouteNames
}
