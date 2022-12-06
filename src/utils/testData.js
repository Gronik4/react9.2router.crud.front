const Now = Date.now();
const min = 2*60*1000;

export const test = [
  {
    idP: '123',
    created: Now - min * 2,
    content: 'Какой-то пост относящийся к теме React',
  },
  {
    idP: '124',
    created: Now - min,
    content: 'Еще какой-то пост относящийся к теме React',
  }
]
