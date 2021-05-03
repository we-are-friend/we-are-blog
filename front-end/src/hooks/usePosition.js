import { useState, useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0);
  const elementPosition = useRef({ x: 10, y: 150 });
  const viewportPosition = useRef({ x: 0, y: 0 });
  let throttleTimeout = null;

  const getPos = (el, axis) => Math.round(el.current[axis]);

  const setPos = (el, pos) => {
    el.current = pos;
    if (throttleTimeout !== null) return;
    // Only re-render the component every 0.1s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300);
  };

  return {
    getElementX: () => getPos(elementPosition, 'x'),
    getElementY: () => getPos(elementPosition, 'y'),
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),
    setElementPosition: (pos) => setPos(elementPosition, pos),
    setViewportPosition: (pos) => setPos(viewportPosition, pos),
    renderCount,
  };
};

const usePosition = () => {
  const positionsStore = PositionStore();
  // const viewportRef = useRef();
  const redBoxRef = useRef();

  // Viewport scroll position
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos);
      // const { style } = viewportRef.current;
      // style.top = `${150 + currPos.y}px`;
      // style.left = `${10 + currPos.x}px`;
    },
    [positionsStore],
    null,
    true,
    200,
  );

  // Element scroll position
  useScrollPosition(
    ({ currPos }) => positionsStore.setElementPosition(currPos),
    [],
    redBoxRef,
    false,
    300,
  );
  return positionsStore;
};

export default usePosition;
