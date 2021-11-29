const demo_nodes = {
  CONFIRM: {
    group: 14,
  },
  DOWNLOAD: {
    group: 14,
  },
  DOWNLOAD_COMPLETE: {
    group: 14,
  },
  POSTINSTALL: {
    group: 14,
  },
  SUCCESS: {
    group: 14,
  },
  CALL_INTERNET: {
    group: 14,
  },
  SUBSTATE_INSTALL: {
    group: 14,
  },
  SUBSTATE_CANCEL_BACKGROUND: {
    group: 14,
  },
  SUBSTATE_DOWNLOAD: {
    group: 14,
  },
  SUBSTATE_ERROR: {
    group: 14,
  },
  ERROR: {
    group: 14,
  },
  RECOVERY: {
    group: 14,
  },
  UP_TO_DATE: {
    group: 14,
  },
};
const links = [
  {
    source: 'CHECK',
    target: 'CONFIRM',
    label: 'pass',
  },
  {
    source: 'CHECK',
    target: 'UP_TO_DATE',
    label: 'no_update',
  },
  {
    source: 'CONFIRM',
    target: 'DOWNLOAD',
    label: 'INSTALL',
  },
  {
    source: 'CONFIRM',
    target: 'ROOT',
    label: 'SKIP',
  },
  {
    source: 'DOWNLOAD',
    target: 'DOWNLOAD_COMPLETE',
    label: 'pass',
  },
  {
    source: 'DOWNLOAD',
    target: 'ERROR',
    label: 'fail',
  },
  {
    source: 'DOWNLOAD',
    target: 'UP_TO_DATE',
    label: 'no_update',
  },
  {
    source: 'DOWNLOAD_COMPLETE',
    target: 'ERROR',
    label: 'fail',
  },
  {
    source: 'DOWNLOAD_COMPLETE',
    target: 'POSTINSTALL',
    label: 'after_reboot',
  },
  {
    source: 'POSTINSTALL',
    target: 'SUCCESS',
    label: 'pass',
  },
  {
    source: 'POSTINSTALL',
    target: 'RECOVERY',
    label: 'fail',
  },
  {
    source: 'CALL_INTERNET',
    target: 'SUBSTATE_INSTALL',
    label: 'USB UPDATE',
  },
  {
    source: 'SUBSTATE_INSTALL',
    target: 'SUBSTATE_CANCEL_BACKGROUND',
    label: 'OK',
  },
  {
    source: 'SUBSTATE_CANCEL_BACKGROUND',
    target: 'SUBSTATE_DOWNLOAD',
    label: 'pass',
  },
  {
    source: 'SUBSTATE_DOWNLOAD',
    target: 'DOWNLOAD_COMPLETE',
    label: 'pass',
  },
  {
    source: 'SUBSTATE_DOWNLOAD',
    target: 'SUBSTATE_ERROR',
    label: 'fail',
  },
  {
    source: 'SUBSTATE_DOWNLOAD',
    target: 'UP_TO_DATE',
    label: 'no_update',
  },
  {
    source: 'SUBSTATE_ERROR',
    target: 'SUBSTATE_INSTALL',
    label: 'RETRY',
  },
  {
    source: 'SUBSTATE_ERROR',
    target: 'ROOT',
    label: 'CANCEL',
  },
  {
    source: 'ERROR',
    target: 'RECOVERY',
    label: 'RETRY',
  },
  {
    source: 'ERROR',
    target: 'CALL_INTERNET',
    label: 'Call PTS',
  },
  {
    source: 'RECOVERY',
    target: 'DOWNLOAD_COMPLETE',
    label: 'pass',
  },
  {
    source: 'RECOVERY',
    target: 'CHECK',
    label: 'fail',
  },
  {
    source: 'UP_TO_DATE',
    target: 'ROOT',
    label: 'OK',
  },
];
