export interface LineCardProps {
  data: {
    month: string;
    amountWaiting: number;
    amountUsing: number;
    amountCollected: number;
  }[];
}

export interface PercentProps {
  color: string;
}
