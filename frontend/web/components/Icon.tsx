import { FC } from 'react'

export type IconName =
  | 'plus'
  | 'eye'
  | 'eye-off'
  | 'search'
  | 'sun'
  | 'moon'
  | 'checkmark'
  | 'info'
  | 'close-circle'
  | 'chevron-right'
  | 'chevron-down'
  | 'file-text'
  | 'copy'

export type IconType = React.DetailedHTMLProps<
  React.HTMLAttributes<SVGSVGElement>,
  SVGSVGElement
> & {
  name: IconName
  width?: number
  height?: number
  fill?: string
  fill2?: string
  className?: string
}

const Icon: FC<IconType> = ({ fill, fill2, height, name, width, ...rest }) => {
  switch (name) {
    case 'plus': {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='21'
          height='20'
          viewBox='0 0 21 20'
          fill='none'
          {...rest}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.4429 9.16658H11.4429V4.16659C11.4429 3.70575 11.0695 3.33325 10.6095 3.33325C10.1495 3.33325 9.7762 3.70575 9.7762 4.16659V9.16658H4.7762C4.3162 9.16658 3.94287 9.53909 3.94287 9.99992C3.94287 10.4608 4.3162 10.8333 4.7762 10.8333H9.7762V15.8333C9.7762 16.2941 10.1495 16.6666 10.6095 16.6666C11.0695 16.6666 11.4429 16.2941 11.4429 15.8333V10.8333H16.4429C16.9029 10.8333 17.2762 10.4608 17.2762 9.99992C17.2762 9.53909 16.9029 9.16658 16.4429 9.16658Z'
            fill={fill || 'white'}
          />
        </svg>
      )
    }
    case 'eye': {
      return (
        <svg
          width={width || '22'}
          height={width || '22'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.173 11.173 10.5 12 10.5C12.827 10.5 13.5 11.173 13.5 12C13.5 12.827 12.827 13.5 12 13.5ZM12 8.50002C10.0701 8.50002 8.50005 10.07 8.50005 12C8.50005 13.93 10.0701 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.50002 12 8.50002ZM12.2197 16.9976C7.91375 17.0976 5.10475 13.4146 4.17275 11.9956C5.19875 10.3906 7.78275 7.10462 11.7808 7.00262C16.0697 6.89362 18.8948 10.5856 19.8267 12.0046C18.8018 13.6096 16.2167 16.8956 12.2197 16.9976ZM21.8678 11.5026C21.2297 10.3906 17.7057 4.81662 11.7297 5.00362C6.20175 5.14362 2.98675 10.0136 2.13275 11.5026C1.95575 11.8106 1.95575 12.1896 2.13275 12.4976C2.76175 13.5946 6.16175 18.9996 12.0247 18.9996C12.1067 18.9996 12.1888 18.9986 12.2708 18.9966C17.7978 18.8556 21.0138 13.9866 21.8678 12.4976C22.0438 12.1896 22.0438 11.8106 21.8678 11.5026Z'
            fill={fill || '#9DA4AE'}
          />
        </svg>
      )
    }
    case 'eye-off': {
      return (
        <svg
          width={width || '22'}
          height={width || '22'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.9869 10.5031 11.9741 10.5061 11.9613L10.5061 11.9613C10.5088 11.9496 10.5116 11.9379 10.512 11.926L12.074 13.488C12.0621 13.4885 12.0504 13.4912 12.0388 13.494C12.0259 13.497 12.0131 13.5 12 13.5ZM4.70705 3.29301C4.31605 2.90201 3.68405 2.90201 3.29305 3.29301C2.90205 3.68401 2.90205 4.31601 3.29305 4.70701L8.92305 10.337C8.64705 10.846 8.50005 11.411 8.50005 12C8.50005 13.93 10.0701 15.5 12 15.5C12.589 15.5 13.154 15.353 13.663 15.077L19.293 20.707C19.488 20.902 19.744 21 20 21C20.2561 21 20.5121 20.902 20.7071 20.707C21.0981 20.316 21.0981 19.684 20.7071 19.293L4.70705 3.29301ZM12.2198 16.9976C7.91475 17.0976 5.10475 13.4146 4.17275 11.9956C4.62975 11.2816 5.39575 10.2356 6.45575 9.28461L5.04475 7.87261C3.52275 9.26161 2.54675 10.7796 2.13275 11.5026C1.95575 11.8106 1.95575 12.1896 2.13275 12.4976C2.76175 13.5946 6.16175 18.9996 12.0247 18.9996C12.1067 18.9996 12.1888 18.9986 12.2708 18.9966C13.4548 18.9666 14.5268 18.7106 15.4978 18.3266L13.9178 16.7466C13.3828 16.8886 12.8198 16.9826 12.2198 16.9976ZM11.7297 5.00341C17.7048 4.81641 21.2298 10.3904 21.8678 11.5024C22.0438 11.8104 22.0438 12.1894 21.8678 12.4974C21.4528 13.2204 20.4767 14.7384 18.9548 16.1274L17.5437 14.7154C18.6037 13.7644 19.3708 12.7184 19.8267 12.0044C18.8947 10.5854 16.0717 6.89441 11.7808 7.00241C11.1807 7.01741 10.6178 7.11141 10.0817 7.25341L8.50175 5.67341C9.47375 5.28941 10.5448 5.03341 11.7297 5.00341Z'
            fill={fill || '#9DA4AE'}
          />
        </svg>
      )
    }
    case 'search': {
      return (
        <svg
          width={width || '22'}
          height={width || '22'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z'
            fill={fill || '#9DA4AE'}
          />
        </svg>
      )
    }
    case 'sun': {
      return (
        <svg
          width={width || '16'}
          height={width || '16'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 6C12.552 6 13 5.553 13 5V3C13 2.447 12.552 2 12 2C11.448 2 11 2.447 11 3V5C11 5.553 11.448 6 12 6ZM21 11H19C18.448 11 18 11.447 18 12C18 12.553 18.448 13 19 13H21C21.552 13 22 12.553 22 12C22 11.447 21.552 11 21 11ZM5 11C5.552 11 6 11.447 6 12C6 12.553 5.552 13 5 13H3C2.448 13 2 12.553 2 12C2 11.447 2.448 11 3 11H5ZM6.2207 5.0283C5.8237 4.6453 5.1907 4.6573 4.8067 5.0533C4.4227 5.4503 4.4337 6.0843 4.8307 6.4673L6.2697 7.8573C6.4647 8.0453 6.7147 8.1373 6.9647 8.1373C7.2267 8.1373 7.4877 8.0353 7.6837 7.8323C8.0677 7.4353 8.0567 6.8013 7.6597 6.4183L6.2207 5.0283ZM17.7302 7.8577C17.5352 8.0447 17.2852 8.1377 17.0352 8.1377C16.7732 8.1377 16.5122 8.0347 16.3162 7.8317C15.9322 7.4357 15.9432 6.8017 16.3402 6.4177L17.7792 5.0287C18.1782 4.6457 18.8102 4.6577 19.1932 5.0537C19.5772 5.4497 19.5662 6.0837 19.1692 6.4677L17.7302 7.8577ZM12 18C11.448 18 11 18.447 11 19V21C11 21.553 11.448 22 12 22C12.552 22 13 21.553 13 21V19C13 18.447 12.552 18 12 18ZM16.316 16.1676C16.7 15.7716 17.333 15.7596 17.73 16.1426L19.169 17.5326C19.566 17.9156 19.577 18.5496 19.193 18.9466C18.997 19.1496 18.736 19.2516 18.474 19.2516C18.224 19.2516 17.974 19.1596 17.779 18.9716L16.34 17.5816C15.943 17.1986 15.932 16.5646 16.316 16.1676ZM6.27 16.1426L4.831 17.5326C4.434 17.9156 4.423 18.5496 4.807 18.9466C5.003 19.1496 5.264 19.2516 5.526 19.2516C5.776 19.2516 6.026 19.1596 6.221 18.9716L7.66 17.5816C8.057 17.1986 8.068 16.5646 7.684 16.1676C7.301 15.7716 6.668 15.7596 6.27 16.1426ZM8 12C8 9.794 9.794 8 12 8C14.206 8 16 9.794 16 12C16 14.206 14.206 16 12 16C9.794 16 8 14.206 8 12Z'
            fill={fill || '#656D7B'}
          />
        </svg>
      )
    }
    case 'moon': {
      return (
        <svg
          width={width || '16'}
          height={width || '16'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.2959 22C12.2639 22 12.2329 22 12.1999 21.999C9.40592 21.975 6.79792 20.854 4.85592 18.846C1.17892 15.041 1.06392 8.74401 4.59892 4.80901C5.69992 3.58201 7.04392 2.65901 8.59192 2.06601C8.95692 1.92401 9.37192 2.01201 9.65092 2.28801C9.93092 2.56301 10.0239 2.97601 9.88892 3.34401C8.77092 6.39901 9.53192 9.85501 11.8299 12.148C14.1269 14.441 17.5929 15.202 20.6579 14.086C21.0259 13.95 21.4389 14.046 21.7129 14.324C21.9879 14.604 22.0739 15.019 21.9339 15.384C21.4099 16.747 20.6239 17.957 19.5979 18.98C17.6449 20.93 15.0539 22 12.2959 22Z'
            fill={fill || '#656D7B'}
          />
        </svg>
      )
    }
    case 'checkmark': {
      return (
        <svg
          width='20'
          height='20'
          viewBox='3 3 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.2954 9.60549L11.7274 15.6055C11.5394 15.8525 11.2484 15.9985 10.9384 16.0005H10.9314C10.6244 16.0005 10.3344 15.8585 10.1444 15.6165L7.71243 12.5095C7.37243 12.0755 7.44843 11.4465 7.88343 11.1065C8.31843 10.7655 8.94643 10.8415 9.28743 11.2775L10.9204 13.3635L14.7044 8.39449C15.0384 7.95549 15.6664 7.86949 16.1064 8.20449C16.5454 8.53949 16.6304 9.16649 16.2954 9.60549ZM18.0004 3.00049H6.00043C4.34543 3.00049 3.00043 4.34549 3.00043 6.00049V18.0005C3.00043 19.6545 4.34543 21.0005 6.00043 21.0005H18.0004C19.6544 21.0005 21.0004 19.6545 21.0004 18.0005V6.00049C21.0004 4.34549 19.6544 3.00049 18.0004 3.00049Z'
            fill={fill || '#6837FC'}
          />
        </svg>
      )
    }
    case 'info': {
      return (
        <svg
          width={width || '28'}
          height={width || '28'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z'
            fill={fill || '#0AADDF'}
          />
        </svg>
      )
    }
    case 'close-circle': {
      return (
        <svg
          width={width || '28'}
          height={width || '28'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.707 13.2929C15.098 13.6839 15.098 14.3159 14.707 14.7069C14.512 14.9019 14.256 14.9999 14 14.9999C13.744 14.9999 13.488 14.9019 13.293 14.7069L12 13.4139L10.707 14.7069C10.512 14.9019 10.256 14.9999 10 14.9999C9.744 14.9999 9.488 14.9019 9.293 14.7069C8.902 14.3159 8.902 13.6839 9.293 13.2929L10.586 11.9999L9.293 10.7069C8.902 10.3159 8.902 9.68388 9.293 9.29288C9.684 8.90188 10.316 8.90188 10.707 9.29288L12 10.5859L13.293 9.29288C13.684 8.90188 14.316 8.90188 14.707 9.29288C15.098 9.68388 15.098 10.3159 14.707 10.7069L13.414 11.9999L14.707 13.2929ZM12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988Z'
            fill={fill || '#EF4D56'}
          />
        </svg>
      )
    }
    case 'chevron-down': {
      return (
        <svg
          width={width || '24'}
          height={width || '24'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 15.5C11.744 15.5 11.488 15.402 11.293 15.207L7.29301 11.207C6.90201 10.816 6.90201 10.184 7.29301 9.79301C7.68401 9.40201 8.31601 9.40201 8.70701 9.79301L12.012 13.098L15.305 9.91801C15.704 9.53501 16.335 9.54601 16.719 9.94301C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.5 15.407 12.25 15.5 12 15.5Z'
            fill={fill || '#1A2634'}
          />
        </svg>
      )
    }
    case 'chevron-right': {
      return (
        <svg
          width={width || '24'}
          height={width || '24'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.5 17C10.244 17 9.98801 16.902 9.79301 16.707C9.40201 16.316 9.40201 15.684 9.79301 15.293L13.098 11.988L9.91801 8.695C9.53501 8.297 9.54601 7.664 9.94301 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z'
            fill={fill || '#1A2634'}
          />
        </svg>
      )
    }
    case 'file-text': {
      return (
        <svg
          width={width || '24'}
          height={width || '24'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.7139 8C14.3199 8 13.9999 7.619 13.9999 7.15V3.978L17.7419 8H14.7139ZM14.9999 18H8.99988C8.44788 18 7.99988 17.552 7.99988 17C7.99988 16.448 8.44788 16 8.99988 16H14.9999C15.5529 16 15.9999 16.448 15.9999 17C15.9999 17.552 15.5529 18 14.9999 18ZM8.99988 12H11.9999C12.5519 12 12.9999 12.448 12.9999 13C12.9999 13.552 12.5519 14 11.9999 14H8.99988C8.44788 14 7.99988 13.552 7.99988 13C7.99988 12.448 8.44788 12 8.99988 12ZM19.7399 7.328L15.2959 2.328C15.1069 2.119 14.8379 2 14.5559 2H6.55588C5.14688 2 3.99988 3.122 3.99988 4.5V19.5C3.99988 20.878 5.14688 22 6.55588 22H17.4439C18.8539 22 19.9999 20.878 19.9999 19.5V8C19.9999 7.751 19.9069 7.512 19.7399 7.328Z'
            fill={fill || '#1A2634'}
          />
        </svg>
      )
    }
    case 'copy': {
      return (
        <svg
          width={width || '16'}
          height={width || '16'}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Icon'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9 12V13H5.667C5.299 13 5 12.701 5 12.333V5.667C5 5.299 5.299 5 5.667 5H12.333C12.701 5 13 5.299 13 5.667V9H12C10.346 9 9 10.346 9 12ZM18 9H15V5.667C15 4.196 13.804 3 12.333 3H5.667C4.196 3 3 4.196 3 5.667V12.333C3 13.804 4.196 15 5.667 15H9V18C9 19.654 10.346 21 12 21H18C19.654 21 21 19.654 21 18V12C21 10.346 19.654 9 18 9Z'
            fill={fill || '#1A2634'}
          />
        </svg>
      )
    }
    default:
      return null
  }
}

export default Icon
