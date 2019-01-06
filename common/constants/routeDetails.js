const paths = require('./paths');

module.exports = {
  overview: {
    icon: 'fa-chart-pie',
    title: 'navigation.overview',
    uri: paths.client.BASE,
  },
  calendar: {
    icon: 'fa-calendar',
    title: 'navigation.calendar',
    uri: paths.client.CALENDAR,
  },
  chat: {
    icon: 'fa-comment',
    title: 'navigation.chat',
    uri: paths.client.CHAT,
  },
  events: {
    icon: 'fa-calendar-check',
    title: 'navigation.events',
    uri: paths.client.EVENTS,
  },
  products: {
    icon: 'fa-box-open',
    title: 'navigation.products',
    uri: paths.client.PRODUCTS,
  },
  settings: {
    icon: 'fa-cogs',
    title: 'navigation.settings',
    uri: paths.client.SETTINGS,
  },
};
