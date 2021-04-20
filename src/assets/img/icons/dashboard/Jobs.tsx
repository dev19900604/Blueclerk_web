import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M435.478 0H76.522c-9.22 0-16.696 7.475-16.696 16.696v478.609c0 9.22 7.475 16.696 16.696 16.696h358.957c9.22 0 16.696-7.475 16.696-16.696V16.696C452.174 7.475 444.699 0 435.478 0zM213.27 33.391h85.459v21.482H213.27V33.391zm138.452 374.742H160.278c-9.22 0-16.696-7.475-16.696-16.696s7.475-16.696 16.696-16.696h191.443c9.22 0 16.696 7.475 16.696 16.696s-7.475 16.696-16.695 16.696zm0-108H160.278c-9.22 0-16.696-7.475-16.696-16.696s7.475-16.696 16.696-16.696h191.443c9.22 0 16.696 7.475 16.696 16.696s-7.475 16.696-16.695 16.696zm0-107.998H160.278c-9.22 0-16.696-7.475-16.696-16.696s7.475-16.696 16.696-16.696h191.443c9.22 0 16.696 7.475 16.696 16.696s-7.475 16.696-16.695 16.696z" />
    </svg>
  )
}

export default SvgComponent
