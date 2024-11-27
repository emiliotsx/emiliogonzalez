import { format } from "@formkit/tempo"

export default function Timeline({ position, startDate, endDate, company, description }: Experience) {

  const startMonth = format(startDate, "MMMM YYYY", "es")
  const dates = `${startMonth.charAt(0).toUpperCase()}${startMonth.slice(1)} - ${!!endDate ? format(endDate, "MMMM YYYY", "es") : ''}`

  return (
    <ol className="relative border-s border-green w-4/5">
      <li className="ms-8">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green rounded-full -start-3 ring-8 ring-green-medium">
          <svg
            className="w-2.5 h-2.5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
            />
          </svg>
        </span>
        <h3 className="flex items-center text-lg font-extrabold text-green-medium">
          {position}
        </h3>
        <h4 className="flex items-center mb-1 text-base font-semibold text-green">
          {company}
        </h4>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
          {dates}
          {!endDate && (
            <span className="bg-green text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-1">
              Actualmente
            </span>
          )}
        </time>
        <p className="my-8 text-base font-normal text-gray-500 text-wrap tracking-tight">{description}</p>
      </li>
    </ol>
  )
}