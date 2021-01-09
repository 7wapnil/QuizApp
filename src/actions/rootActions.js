export const addResponse = ({ ques_id, submitted_option = 'NA' }) => ({
  type: 'ADD_RESPONSE',
  response: {
    ques_id,
    submitted_option
  }
});