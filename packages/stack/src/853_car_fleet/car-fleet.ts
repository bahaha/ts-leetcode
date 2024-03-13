export function carFleet(
  target: number,
  positions: number[],
  speeds: number[],
): number {
  const estimateTime: number[] = [];
  // order by its position decr
  const cars: { pos: number; speed: number }[] = [];
  for (let i = 0; i < positions.length; i++) {
    cars.push({ pos: positions[i], speed: speeds[i] });
  }
  cars.sort((a, b) => b.pos - a.pos);

  for (const car of cars) {
    estimateTime.push((target - car.pos) / car.speed);
    if (
      estimateTime.length >= 2 &&
      // lead car estimate time was after than the car behind it
      estimateTime[estimateTime.length - 2] >=
        estimateTime[estimateTime.length - 1]
    ) {
      // cars fleet, take as one car
      estimateTime.pop();
    }
  }

  return estimateTime.length;
}
