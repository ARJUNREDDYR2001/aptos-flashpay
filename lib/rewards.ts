export interface RewardHistory {
  event: string;
  points: number;
  time: number;
}

export interface RewardsData {
  total: number;
  history: RewardHistory[];
}

export function addReward(event: string, points: number): void {
  if (typeof window === 'undefined') return;
  
  const data: RewardsData = JSON.parse(
    globalThis.localStorage.getItem("flashpay_rewards") || '{"total":0,"history":[]}'
  );

  data.total = (data.total || 0) + points;
  data.history = [
    ...(data.history || []),
    { event, points, time: Date.now() }
  ];

  globalThis.localStorage.setItem("flashpay_rewards", JSON.stringify(data));
}

export function getRewards(): RewardsData {
  if (typeof window === 'undefined') return { total: 0, history: [] };
  
  return JSON.parse(
    globalThis.localStorage.getItem("flashpay_rewards") || '{"total":0,"history":[]}'
  );
}
