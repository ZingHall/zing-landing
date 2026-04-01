export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      className="fill-primary"
      viewBox="0 0 16 16"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9.5 6.125L11.0937 3.59372L12.125 2H14V3.875L12.3828 6.38282L11.375 8H14V14H6.5V9.875L5.01152 12.3125L3.875 14H2V12.125L3.59372 9.59372L4.625 8H2V2H9.5V6.125Z"
        fill="#FF4D13"
      />
    </svg>
  )
}
