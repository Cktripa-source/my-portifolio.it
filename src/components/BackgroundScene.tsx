import { useEffect, useRef, useState } from 'react';

const ModernBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Auto-scroll to page bottom
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 500); // Delay after mounting for smoother effect
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const particles = [];
    const colors = [
      { r: 103, g: 58, b: 183 },
      { r: 33, g: 150, b: 243 },
      { r: 0, g: 188, b: 212 },
      { r: 139, g: 195, b: 74 },
      { r: 255, g: 152, b: 0 }
    ];

    const createParticles = () => {
      particles.length = 0;
      const count = Math.floor(canvas.width * canvas.height / 8000);
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(${color.r}, ${color.g}, ${color.b}, ${Math.random() * 0.5 + 0.3})`,
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1
        });
      }
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    let animationId;

    const connectParticles = (p1, p2, distance) => {
      const max = 200;
      if (distance < max) {
        const opacity = 1 - distance / max;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = 0; j < particles.length; j++) {
          const other = particles[j];
          if (p === other) continue;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          connectParticles(p, other, dist);
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('resize', createParticles);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const gradients = [
    { colors: "from-purple-500 to-blue-500", position: "top-0 left-0" },
    { colors: "from-blue-500 to-cyan-400", position: "bottom-0 right-0" },
    { colors: "from-pink-500 to-purple-500", position: "bottom-0 left-0" },
    { colors: "from-amber-500 to-pink-500", position: "top-0 right-0" },
    { colors: "from-purple-500 to-blue-500", position: "top-0 left-0" },
    { colors: "from-blue-500 to-cyan-400", position: "bottom-0 right-0" },
    { colors: "from-pink-500 to-purple-500", position: "bottom-0 left-0" },
    { colors: "from-amber-500 to-pink-500", position: "top-0 right-0" }
  ];

  return (
    <div
      ref={containerRef}
      className="relative  w-full overflow-hidden transition-opacity duration-1000 ease-in"
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />

      {/* Animated Blobs */}
      {gradients.map((gradient, i) => (
        <div
          key={i}
          className={`fixed ${gradient.position} md:w-60 md:h-60 w-36 h-36 rounded-full 
                      bg-gradient-to-r ${gradient.colors} 
                      opacity-30 blur-3xl animate-[blob-move_25s_ease-in-out_infinite] -z-10`}
          style={{
            animationDelay: `${i * 3}s`,
            animationDuration: `${20 + i * 5}s`,
          }}
        />
      ))}

      {/* Noise & Vignette */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none -z-10" />
      <div className="fixed inset-0 shadow-vignette pointer-events-none -z-10" />
    </div>
  );
};

export default ModernBackground;
