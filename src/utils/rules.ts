export const rules = {
  required: (message: string = 'Requared field') => ({
    required: true,
    message,
  }),
};
