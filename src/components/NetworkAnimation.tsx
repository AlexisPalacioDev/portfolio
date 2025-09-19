import React, { useEffect, useRef } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  connections: number[];
}

interface DataPacket {
  id: number;
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  trail: Array<{ x: number; y: number; alpha: number }>;
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);
  const lastTimeRef = useRef<number>(0);
  const scrollEnergyRef = useRef<number>(1); // Factor de energía base
  const lastScrollTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuración inicial
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Detector de scroll para energía de la red
    const handleScroll = () => {
      const currentTime = Date.now();
      lastScrollTimeRef.current = currentTime;
      scrollEnergyRef.current = Math.min(scrollEnergyRef.current + 0.5, 3); // Max 3x energía
    };

    const handleWheel = (e: WheelEvent) => {
      const currentTime = Date.now();
      lastScrollTimeRef.current = currentTime;
      const intensity = Math.abs(e.deltaY) / 100;
      scrollEnergyRef.current = Math.min(scrollEnergyRef.current + intensity * 0.3, 4); // Max 4x energía
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Crear nodos iniciales
    const createNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 80000); // Densidad adaptativa
      
      for (let i = 0; i < Math.min(nodeCount, 12); i++) {
        nodes.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 3 + 2,
          connections: []
        });
      }

      // Crear conexiones
      nodes.forEach(node => {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < connectionCount; i++) {
          const targetId = Math.floor(Math.random() * nodes.length);
          if (targetId !== node.id && !node.connections.includes(targetId)) {
            node.connections.push(targetId);
          }
        }
      });

      nodesRef.current = nodes;
    };

    // Crear paquetes de datos
    const createDataPacket = () => {
      const nodes = nodesRef.current;
      if (nodes.length === 0) return;

      const fromNode = Math.floor(Math.random() * nodes.length);
      const node = nodes[fromNode];
      
      if (node.connections.length > 0) {
        const toNode = node.connections[Math.floor(Math.random() * node.connections.length)];
        
        packetsRef.current.push({
          id: Date.now() + Math.random(),
          fromNode,
          toNode,
          progress: 0,
          speed: Math.random() * 0.008 + 0.002, // Velocidad original
          trail: []
        });
      }
    };

    // Función de animación
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const packets = packetsRef.current;

      // Decaimiento de energía con el tiempo
      const timeSinceLastScroll = currentTime - lastScrollTimeRef.current;
      if (timeSinceLastScroll > 100) {
        scrollEnergyRef.current = Math.max(scrollEnergyRef.current - 0.02, 1);
      }

      const energy = scrollEnergyRef.current;

      // Actualizar posiciones de nodos
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Rebote en bordes
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Mantener dentro de límites
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Revisar qué nodos tienen actividad reciente (paquetes que llegan/salen)
      const activeNodes = new Set();
      packets.forEach(packet => {
        // Marcar nodos como activos cuando hay paquetes cerca
        if (packet.progress > 0.9) {
          activeNodes.add(packet.toNode);
        }
        if (packet.progress < 0.1) {
          activeNodes.add(packet.fromNode);
        }
      });

      // Dibujar conexiones con iluminación basada en actividad
      nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = nodes[targetId];
          if (target) {
            
            // Iluminar cable si alguno de los nodos tiene actividad
            const isActive = activeNodes.has(node.id) || activeNodes.has(target.id);
            
            if (isActive) {
              // Cable iluminado con azul brillante
              ctx.strokeStyle = `rgba(59, 130, 246, 0.8)`;
              ctx.lineWidth = 2;
              ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
              ctx.shadowBlur = 6;
            } else {
              // Cable normal - más visible en modo claro
              const isDark = document.documentElement.classList.contains('dark');
              if (isDark) {
                ctx.strokeStyle = `rgba(185, 194, 211, 0.15)`;
              } else {
                ctx.strokeStyle = `rgba(75, 85, 99, 0.3)`;
              }
              ctx.lineWidth = 1;
              ctx.shadowBlur = 0;
            }
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });
      });
      
      // Limpiar efectos de shadow
      ctx.shadowBlur = 0;

      // Actualizar y dibujar paquetes de datos
      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i];
        const fromNode = nodes[packet.fromNode];
        const toNode = nodes[packet.toNode];

        if (!fromNode || !toNode) {
          packets.splice(i, 1);
          continue;
        }

        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        // Calcular posición del paquete
        const x = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * packet.progress;
        
        // Agregar posición actual a la estela
        packet.trail.push({ x, y, alpha: 1 });
        
        // Limitar longitud de estela y decaer alpha
        if (packet.trail.length > 8) packet.trail.shift();
        packet.trail.forEach((point, index) => {
          point.alpha = (index + 1) / packet.trail.length;
        });
        
        // Dibujar estela
        packet.trail.forEach((point, index) => {
          if (index === 0) return;
          
          const trailSize = 2 + index * 0.5;
          const trailAlpha = point.alpha * 0.6;
          
          ctx.fillStyle = `rgba(59, 130, 246, ${trailAlpha})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fill();
        });

        // Dibujar paquete con efecto de energía (blur y transparencia)
        const baseGlowSize = 6;
        const glowSize = baseGlowSize;
        
        // Efecto de blur/energía
        ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
        ctx.shadowBlur = 15;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        gradient.addColorStop(0, `rgba(59, 130, 246, 0.7)`); // Más transparente
        gradient.addColorStop(0.5, `rgba(59, 130, 246, 0.4)`);
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo más transparente con efecto de energía
        const baseCoreSize = 2;
        const coreSize = baseCoreSize;
        ctx.fillStyle = `rgba(59, 130, 246, 0.9)`; // Más transparente
        ctx.beginPath();
        ctx.arc(x, y, coreSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Limpiar efecto shadow para otros elementos
        ctx.shadowBlur = 0;
      }

      // Dibujar nodos con efecto de energía transparente
      nodes.forEach(node => {
        // Tamaño base fijo pequeño
        const baseSize = node.size;
        const finalSize = baseSize;
        
        // Efecto de blur/energía para nodos
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
          ctx.shadowColor = 'rgba(47, 52, 65, 0.6)';
          ctx.shadowBlur = 8;
          
          // Sombra del nodo más suave
          ctx.fillStyle = 'rgba(185, 194, 211, 0.1)';
          ctx.beginPath();
          ctx.arc(node.x + 1, node.y + 1, finalSize, 0, Math.PI * 2);
          ctx.fill();

          // Nodo principal más transparente con efecto de energía
          ctx.fillStyle = `rgba(47, 52, 65, 0.4)`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
          ctx.fill();

          // Brillo central más transparente
          ctx.fillStyle = `rgba(255, 255, 255, 0.2)`;
          ctx.beginPath();
          ctx.arc(node.x - 0.5, node.y - 0.5, finalSize * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.shadowColor = 'rgba(75, 85, 99, 0.4)';
          ctx.shadowBlur = 6;
          
          // Sombra del nodo para modo claro
          ctx.fillStyle = 'rgba(75, 85, 99, 0.2)';
          ctx.beginPath();
          ctx.arc(node.x + 1, node.y + 1, finalSize, 0, Math.PI * 2);
          ctx.fill();

          // Nodo principal para modo claro
          ctx.fillStyle = `rgba(75, 85, 99, 0.6)`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
          ctx.fill();

          // Brillo central para modo claro
          ctx.fillStyle = `rgba(255, 255, 255, 0.4)`;
          ctx.beginPath();
          ctx.arc(node.x - 0.5, node.y - 0.5, finalSize * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Limpiar efecto shadow
        ctx.shadowBlur = 0;
      });

      // Crear nuevos paquetes ocasionalmente
      if (Math.random() < 0.02) {
        createDataPacket();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    createNodes();
    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ 
        opacity: 0.7,
        mixBlendMode: 'normal'
      }}
      aria-hidden="true"
    />
  );
}