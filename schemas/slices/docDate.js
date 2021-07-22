export default {
  title: "Date",
  name: "docDate",
  type: "date",
  description: "When was this work commissioned/created?",
  options: {
    dateFormat: "YYYY-MM-DD",
    calendarTodayLabel: "Today",
  },
  validation: (Rule) => Rule.required().warning("Choose a Date, please!"),
};
