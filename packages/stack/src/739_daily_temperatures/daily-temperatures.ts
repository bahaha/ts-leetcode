type Temp = {
  day: number;
  temp: number;
};

export function dailyTemperatures(temperatures: number[]): number[] {
  const answer = new Array(temperatures.length).fill(0);
  const decreasingTemps: Temp[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];
    while (
      decreasingTemps.length &&
      temp > decreasingTemps[decreasingTemps.length - 1].temp
    ) {
      const { day } = decreasingTemps.pop()!;
      answer[day] = i - day;
    }
    decreasingTemps.push({ day: i, temp });
  }

  return answer;
}
