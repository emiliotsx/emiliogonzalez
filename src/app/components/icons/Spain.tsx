export default function Spain({ variant = 'small' }: { variant: VariantIcon }) {
  return (
    <svg
      viewBox="0 -4 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${variant === 'small' ? 'size-4' : 'size-8'} dark:text-green-medium dark:text-shadow-green`}
    >
      <g clipPath="url(#clip0_503_3600)">
        <rect width="28" height="20" rx="2" fill="white" />
        <mask id="mask0_503_3600" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
          <rect width="28" height="20" rx="2" fill="white" />
        </mask>
        <g mask="url(#mask0_503_3600)">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" fill="#DD172C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 20H28V14.6667H0V20Z" fill="#DD172C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 14.6667H28V5.33334H0V14.6667Z" fill="#FFD133" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7.33337 9.33333H8.66671V10H7.33337V9.33333Z" fill="#FFEDB1" />
          <path d="M6.39116 8.99999H8.27543C8.47044 8.99999 8.6238 9.16666 8.60761 9.361L8.43633 11.4164C8.39314 11.9347 7.95987 12.3333 7.43978 12.3333H7.2268C6.70671 12.3333 6.27345 11.9347 6.23026 11.4164L6.05898 9.36101C6.04278 9.16667 6.19615 8.99999 6.39116 8.99999Z" stroke="#A41517" strokeWidth="0.666667" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6 10H8.66667V10.6667H8L7.33333 12L6.66667 10.6667H6V10Z" fill="#A41517" />
          <rect x="4" y="8" width="1.33333" height="4.66667" rx="0.666667" fill="#A41517" />
          <rect x="9.33337" y="8" width="1.33333" height="4.66667" rx="0.666667" fill="#A41517" />
          <path d="M6 7.73332C6 7.14422 6.47756 6.66666 7.06667 6.66666H7.6C8.1891 6.66666 8.66667 7.14422 8.66667 7.73332V7.73332C8.66667 7.8806 8.54728 7.99999 8.4 7.99999H6.26667C6.11939 7.99999 6 7.8806 6 7.73332V7.73332Z" fill="#A41517" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_503_3600">
          <rect width="28" height="20" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}