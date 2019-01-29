import React from "react";

export interface CanvasDrawProps {
  brushColor: string;
  brushRadius: number;
  canvasHeight: number;
  canvasWidth: number;
  catenaryColor: string;
  disabled: boolean;
  gridColor: string;
  hideGrid: boolean;
  imgSrc: string;
  immediateLoading: boolean;
  lazyRadius: number;
  loadTimeOffset: number;
  saveData: string;
}

declare const CanvasDraw: React.ComponentClass<Partial<CanvasDrawProps>, any>;

export default CanvasDraw;
