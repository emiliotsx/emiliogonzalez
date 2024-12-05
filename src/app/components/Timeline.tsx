import { format } from "@formkit/tempo"

import TimelineIcon from "./icons/Timeline"

export default function Timeline({ position, startDate, endDate, company, description, locale, label }: Props) {

  const startMonth = format(startDate, "MMMM YYYY", locale)
  const dates = `${startMonth.charAt(0).toUpperCase()}${startMonth.slice(1)} - ${!!endDate ? format(endDate, "MMMM YYYY", "es") : ""}`

  return (
    <ol className="relative border-s border-green w-4/5 animate-element">
      <li className="ms-8">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green rounded-full -start-3 ring-8 ring-green-medium">
          <TimelineIcon />
        </span>
        <h3 className="flex items-center text-lg font-extrabold text-green-medium">
          {position}
        </h3>
        <h4 className="flex items-center mb-1 text-base font-semibold text-green dark:text-green-medium">
          {company}
        </h4>
        <time className="block mb-2 text-sm font-semibold leading-none text-gray-500 dark:text-gray-50">
          {dates}
          {!endDate && (
            <span className="bg-green text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-1 dark:text-green-medium dark:border-2 dark:border-green-medium">
              {label}
            </span>
          )}
        </time>
        <p className="my-8 text-base font-normal text-wrap tracking-tight text-green dark:text-white">{description}</p>
      </li>
    </ol>
  )
}

interface Props extends Experience {
  locale: string
  label: string
}