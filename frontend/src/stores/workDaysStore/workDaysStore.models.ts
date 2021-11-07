export type WorkDaysData = {
  days: any,
};

export type Answer = { answer: string; };

export type ResponseSendWorkDaysType = {
  data: Answer
};

export type ResponseGetWorkDaysType = {
  data: {
    workDays: WorkDaysData[]
  }
};
