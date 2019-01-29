import React from "react";

export interface DrawingCanvas {
  getSaveData: () => string;
  loadSaveData: (saveData: string, immediate: boolean) => void;
  clear: () => void;
  undo: () => void;
}

export interface CanvasDrawProps {
  ref: Function;
  brushColor?: string;
  brushRadius?: number;
  canvasHeight?: number;
  canvasWidth?: number;
  catenaryColor?: string;
  disabled?: boolean;
  gridColor?: string;
  hideGrid?: boolean;
  imgSrc?: string;
  immediateLoading?: boolean;
  lazyRadius?: number;
  loadTimeOffset?: number;
  saveData?: string;
}

declare const CanvasDraw: React.ComponentClass<CanvasDrawProps>;

export default CanvasDraw;
