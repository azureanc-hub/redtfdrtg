import { motion } from 'framer-motion';

interface AnimatedGreenRobotProps {
  size?: number;
  color?: string;
  animationSpeed?: number;
}

export default function AnimatedGreenRobot({
  size = 1000,
  color = '#00FF00',
  animationSpeed = 2
}: AnimatedGreenRobotProps) {
  const scale = size / 1000;

  return (
    <div
      style={{
        position: 'absolute',
        right: '20px',
        bottom: '80px',
        width: `${size * 0.15}px`,
        height: `${size * 0.25}px`,
        pointerEvents: 'none',
        zIndex: 50
      }}
    >
      <motion.svg
        viewBox="0 0 200 300"
        style={{
          width: '100%',
          height: '100%',
          filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.6))'
        }}
        animate={{
          filter: [
            'drop-shadow(0 0 8px rgba(0, 255, 0, 0.6))',
            'drop-shadow(0 0 16px rgba(0, 255, 0, 0.8))',
            'drop-shadow(0 0 8px rgba(0, 255, 0, 0.6))'
          ]
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <motion.g
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: animationSpeed * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {/* Left Antenna */}
          <line x1="70" y1="20" x2="70" y2="5" stroke={color} strokeWidth="2" />
          <circle cx="70" cy="5" r="3" stroke={color} strokeWidth="2" fill="none" />

          {/* Right Antenna */}
          <line x1="130" y1="20" x2="130" y2="5" stroke={color} strokeWidth="2" />
          <circle cx="130" cy="5" r="3" stroke={color} strokeWidth="2" fill="none" />

          {/* Head - rounded rectangle with grid */}
          <rect x="60" y="20" width="80" height="50" rx="8" stroke={color} strokeWidth="2.5" fill="none" />

          {/* Head grid lines - vertical */}
          <line x1="85" y1="20" x2="85" y2="70" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1="100" y1="20" x2="100" y2="70" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1="115" y1="20" x2="115" y2="70" stroke={color} strokeWidth="1.5" opacity="0.6" />

          {/* Head grid lines - horizontal */}
          <line x1="60" y1="37" x2="140" y2="37" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1="60" y1="53" x2="140" y2="53" stroke={color} strokeWidth="1.5" opacity="0.6" />

          {/* Eye/Sensor - concentric circles with rotation */}
          <motion.g
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: animationSpeed * 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{ originX: '100px', originY: '45px' }}
          >
            <circle cx="100" cy="45" r="12" stroke={color} strokeWidth="2" fill="none" />
            <circle cx="100" cy="45" r="8" stroke={color} strokeWidth="2" fill="none" />
            <circle cx="100" cy="45" r="4" stroke={color} strokeWidth="2" fill="none" />
            <line x1="100" y1="45" x2="112" y2="45" stroke={color} strokeWidth="2" />
          </motion.g>

          {/* Body - rectangle with grid pattern */}
          <rect x="70" y="80" width="60" height="90" stroke={color} strokeWidth="2.5" fill="none" />

          {/* Body grid - vertical lines (3 columns, so 2 dividers) */}
          <line x1="90" y1="80" x2="90" y2="170" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1="110" y1="80" x2="110" y2="170" stroke={color} strokeWidth="1.5" opacity="0.6" />

          {/* Body grid - horizontal lines (5 rows, so 4 dividers) */}
          <line x1="70" y1="98" x2="130" y2="98" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1="70" y1="116" x2="130" y2="116" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1="70" y1="134" x2="130" y2="134" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1="70" y1="152" x2="130" y2="152" stroke={color} strokeWidth="1.5" opacity="0.6" />

          {/* Center power indicator */}
          <circle cx="100" cy="125" r="8" stroke={color} strokeWidth="2" fill="none" opacity="0.8" />
          <circle cx="100" cy="125" r="4" stroke={color} strokeWidth="2" fill={color} opacity="0.3" />

          {/* Left Leg with bounce animation */}
          <motion.g
            animate={{
              y: [-2, 2, -2]
            }}
            transition={{
              duration: animationSpeed * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0
            }}
          >
            {/* Upper leg segment */}
            <line x1="80" y1="170" x2="70" y2="210" stroke={color} strokeWidth="2.5" />
            <line x1="85" y1="170" x2="75" y2="210" stroke={color} strokeWidth="2.5" />
            <ellipse cx="82.5" cy="170" rx="5" ry="3" stroke={color} strokeWidth="2" fill="none" />

            {/* Knee joint */}
            <circle cx="72.5" cy="210" r="5" stroke={color} strokeWidth="2" fill="none" />

            {/* Lower leg segment */}
            <line x1="70" y1="215" x2="65" y2="255" stroke={color} strokeWidth="2.5" />
            <line x1="75" y1="215" x2="70" y2="255" stroke={color} strokeWidth="2.5" />

            {/* Foot */}
            <ellipse cx="67.5" cy="255" rx="8" ry="4" stroke={color} strokeWidth="2.5" fill="none" />
            <line x1="60" y1="255" x2="75" y2="255" stroke={color} strokeWidth="2.5" />
          </motion.g>

          {/* Right Leg with bounce animation (opposite phase) */}
          <motion.g
            animate={{
              y: [2, -2, 2]
            }}
            transition={{
              duration: animationSpeed * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0
            }}
          >
            {/* Upper leg segment */}
            <line x1="115" y1="170" x2="125" y2="210" stroke={color} strokeWidth="2.5" />
            <line x1="120" y1="170" x2="130" y2="210" stroke={color} strokeWidth="2.5" />
            <ellipse cx="117.5" cy="170" rx="5" ry="3" stroke={color} strokeWidth="2" fill="none" />

            {/* Knee joint */}
            <circle cx="127.5" cy="210" r="5" stroke={color} strokeWidth="2" fill="none" />

            {/* Lower leg segment */}
            <line x1="125" y1="215" x2="130" y2="255" stroke={color} strokeWidth="2.5" />
            <line x1="130" y1="215" x2="135" y2="255" stroke={color} strokeWidth="2.5" />

            {/* Foot */}
            <ellipse cx="132.5" cy="255" rx="8" ry="4" stroke={color} strokeWidth="2.5" fill="none" />
            <line x1="125" y1="255" x2="140" y2="255" stroke={color} strokeWidth="2.5" />
          </motion.g>

          {/* Arms */}
          <line x1="70" y1="95" x2="45" y2="120" stroke={color} strokeWidth="2.5" />
          <circle cx="45" cy="120" r="4" stroke={color} strokeWidth="2" fill="none" />

          <line x1="130" y1="95" x2="155" y2="120" stroke={color} strokeWidth="2.5" />
          <circle cx="155" cy="120" r="4" stroke={color} strokeWidth="2" fill="none" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
