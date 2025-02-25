import React, { useEffect, useRef, useState, useCallback } from 'react';
import Two from 'two.js';
import { Button } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

interface Arrow {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const ArrowDrawing: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const twoRef = useRef<Two | null>(null);
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const selectedArrowRef = useRef<Arrow | null>(null);
  const dragging = useRef<'start' | 'end' | 'move' | null>(null);
  const offset = useRef<{ dx: number; dy: number } | null>(null);
  const resizing = useRef<'start' | 'end' | null>(null);

  useEffect(() => {
    if (canvasRef.current && !twoRef.current) {
      twoRef.current = new Two({
        type: Two.Types.svg,
        width: 1200,
        height: 500,
        smoothing: true,
      }).appendTo(canvasRef.current);

      const savedArrows = localStorage.getItem('arrows');
      if (savedArrows) {
        setArrows(JSON.parse(savedArrows));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('arrows', JSON.stringify(arrows));
    if (twoRef.current) {
      twoRef.current.clear();
      arrows.forEach(drawArrow);
      twoRef.current.update();
    }
  }, [arrows]);

  const drawArrow = useCallback((arrow: Arrow) => {
    const two = twoRef.current;
    if (!two) return;

    const line = two.makeLine(arrow.x1, arrow.y1, arrow.x2, arrow.y2);
    line.stroke = 'black';
    line.linewidth = 3;

    const angle = Math.atan2(arrow.y2 - arrow.y1, arrow.x2 - arrow.x1);
    const arrowHeadLength = 10;

    const arrowHead = two.makePath([
      new Two.Anchor(arrow.x2, arrow.y2),
      new Two.Anchor(
        arrow.x2 - arrowHeadLength * Math.cos(angle - Math.PI / 6),
        arrow.y2 - arrowHeadLength * Math.sin(angle - Math.PI / 6),
      ),
      new Two.Anchor(
        arrow.x2 - arrowHeadLength * Math.cos(angle + Math.PI / 6),
        arrow.y2 - arrowHeadLength * Math.sin(angle + Math.PI / 6),
      ),
    ]);
    arrowHead.fill = 'black';
    arrowHead.closed = true;
  }, []);

  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('arrow', 'new');
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newArrow: Arrow = {
      id: Date.now().toString(),
      x1: x - 50,
      y1: y,
      x2: x + 50,
      y2: y,
    };

    setArrows((prev) => [...prev, newArrow]);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    for (const arrow of arrows) {
      const distStart = Math.hypot(x - arrow.x1, y - arrow.y1);
      const distEnd = Math.hypot(x - arrow.x2, y - arrow.y2);
      const midX = (arrow.x1 + arrow.x2) / 2;
      const midY = (arrow.y1 + arrow.y2) / 2;
      const distMiddle = Math.hypot(x - midX, y - midY);

      if (distStart < 10) {
        selectedArrowRef.current = arrow;
        resizing.current = 'start';
        return;
      } else if (distEnd < 10) {
        selectedArrowRef.current = arrow;
        resizing.current = 'end';
        return;
      } else if (distMiddle <= 10) {
        selectedArrowRef.current = arrow;
        dragging.current = 'move';
        offset.current = { dx: x - midX, dy: y - midY };
        return;
      }
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!selectedArrowRef.current) return;

    const { clientX, clientY } = event;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setArrows((prev) =>
      prev.map((arrow) => {
        if (arrow.id === selectedArrowRef.current?.id) {
          if (resizing.current === 'start') {
            return { ...arrow, x1: x, y1: y };
          } else if (resizing.current === 'end') {
            return { ...arrow, x2: x, y2: y };
          } else if (dragging.current === 'move') {
            const dx = x - (arrow.x1 + arrow.x2) / 2;
            const dy = y - (arrow.y1 + arrow.y2) / 2;
            return {
              ...arrow,
              x1: arrow.x1 + dx,
              y1: arrow.y1 + dy,
              x2: arrow.x2 + dx,
              y2: arrow.y2 + dy,
            };
          }
        }
        return arrow;
      }),
    );
  };

  const handleMouseUp = () => {
    selectedArrowRef.current = null;
    resizing.current = null;
    dragging.current = null;
  };

  const handleClear = () => {
    setArrows([]);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <div
          draggable
          onDragStart={handleDragStart}
          style={{
            width: '50px',
            height: '20px',
            cursor: 'grab',
          }}
        >
          <TrendingFlatIcon fontSize="large" />
        </div>
      </div>
      <div
        ref={canvasRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          border: '1px solid black',
          width: '1200px',
          height: '500px',
          position: 'relative',
        }}
      />
      <div style={{ marginTop: '10px' }}>
        <Button variant="contained" color="secondary" onClick={handleClear}>
          Xóa tất cả
        </Button>
      </div>
    </div>
  );
};

export default ArrowDrawing;
