const prefixCls = 'jh';

const getBaseCls = (suffix: string) => {
  return `${prefixCls}-${suffix}`;
};

/** Component */
export const activeCls = getBaseCls('active');

/** Tabs Component */
export const tabsBaseCls = getBaseCls('tabs');

export const tabsMenuListBaseCls = getBaseCls('tabs-menu-list');
export const tabsMenuBaseCls = getBaseCls('tabs-menu');
export const tabsPannelListBaseCls = getBaseCls('tabs-pannel-list');
export const tabsPannelBaseCls = getBaseCls('tabs-pannel');
