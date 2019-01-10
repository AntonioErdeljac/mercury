export default state => ({
  data: state.events.data,
  hasFailedToLoad: state.events.hasFailedToLoad,
  isLoading: state.events.isLoading,
});
