export default state => ({
  isConnected: state.healthCheck.isConnected,
  toasts: state.toasts.data,
  hasToast: state.toasts.hasToast,
});
