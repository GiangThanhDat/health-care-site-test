type CircularProgressProps = {
  percentage: number
  dateText: string
  size?: number
  strokeWidth?: number
}

export function CircularProgress({
  percentage,
  dateText,
  size = 150,
  strokeWidth = 10,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = circumference - (percentage / 100) * circumference

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            opacity: 0.2,
          }}
        />
        {/* Progress Circle */}
        <circle
          stroke="url(#grad1)"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          filter="url(#glow)"
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
            />
            {/* White Color */}
            <stop
              offset="100%"
              style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
            />
            {/* White Color */}
          </linearGradient>

          {/* White Glow Filter Definition */}
          <filter id="white-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* Center Text */}
      <div className="absolute flex items-end gap-x-1">
        <span className="font-inter leading-[30px] text-lg text-center shadow-inner font-normal text-white glow-text">
          {dateText}
        </span>
        <span className="font-inter leading-[30px] text-[25px] text-center shadow-inner font-normal text-white glow-text">{`${percentage}%`}</span>
      </div>
    </div>
  )
}
