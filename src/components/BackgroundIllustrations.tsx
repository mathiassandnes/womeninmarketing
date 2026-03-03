export default function BackgroundIllustrations() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
      {/* Organic swirl - top right */}
      <svg
        className="absolute -top-20 -right-20 w-[500px] h-[500px] text-brand-purple"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20C140 20 170 50 170 90C170 130 140 150 120 170C100 190 60 180 40 150C20 120 30 80 60 50C75 35 85 20 100 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M100 40C130 40 150 60 150 90C150 120 130 140 110 155C90 170 60 160 45 140C30 115 40 85 60 65C72 53 85 40 100 40Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M100 60C120 60 135 72 135 90C135 108 120 125 105 135C90 145 70 140 58 125C46 110 52 88 65 75C74 66 87 60 100 60Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* Abstract circles - bottom left */}
      <svg
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] text-brand-pink"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
        <circle cx="80" cy="80" r="50" stroke="currentColor" strokeWidth="1" />
        <circle cx="120" cy="120" r="50" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Wavy line - middle */}
      <svg
        className="absolute top-[40%] -right-10 w-[400px] h-[300px] text-brand-blue"
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 75C30 45 50 105 80 75C110 45 130 105 160 75C190 45 200 75 200 75"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 90C30 60 50 120 80 90C110 60 130 120 160 90C190 60 200 90 200 90"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* Scattered dots - top left */}
      <svg
        className="absolute top-[15%] left-[5%] w-[300px] h-[300px] text-brand-purple"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="4" fill="currentColor" />
        <circle cx="80" cy="50" r="3" fill="currentColor" />
        <circle cx="150" cy="30" r="5" fill="currentColor" />
        <circle cx="50" cy="120" r="3.5" fill="currentColor" />
        <circle cx="130" cy="100" r="4" fill="currentColor" />
        <circle cx="170" cy="150" r="3" fill="currentColor" />
        <circle cx="40" cy="170" r="4.5" fill="currentColor" />
        <circle cx="100" cy="160" r="3" fill="currentColor" />
      </svg>

      {/* Abstract leaf shapes - bottom right */}
      <svg
        className="absolute bottom-[20%] right-[3%] w-[350px] h-[350px] text-brand-pink"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 30C100 30 140 70 140 110C140 150 120 170 100 170C80 170 60 150 60 110C60 70 100 30 100 30Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M60 100C60 100 100 80 130 90C160 100 170 130 160 150C150 170 120 170 100 155C80 140 60 100 60 100Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
