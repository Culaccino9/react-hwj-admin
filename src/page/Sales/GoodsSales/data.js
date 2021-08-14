export const fundFlowGraphData = {
    nodes: [
      {
        id: '1',
        value: {
          text: 'Company1',
          // 建议使用 bae64 数据
          icon: 'https://gw.alipayobjects.com/zos/antfincdn/28B4PgocL4/bbd3e7ef-6b5e-4034-893d-1b5073ad9aa4.png',
        },
      },
      {
        id: '2',
        value: { text: 'Company2' },
      },
      {
        id: '3',
        value: { text: 'Company3' },
      },
      {
        id: '4',
        value: { text: 'Company4' },
      },
      {
        id: '5',
        value: { text: 'Company5' },
      },
      {
        id: '6',
        value: { text: 'Company6' },
      },
      {
        id: '7',
        value: { text: 'Company7' },
      },
      {
        id: '8',
        value: { text: 'Company8' },
      },
      {
        id: '9',
        value: { text: 'Company9' },
      },
    ],
    edges: [
      {
        source: '1',
        target: '2',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '3',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '2',
        target: '5',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '5',
        target: '6',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '3',
        target: '4',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '4',
        target: '7',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '8',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '9',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
    ],
  };

export const sankeyData = [
    {
      source: '宵夜',
      target: '流向',
      value: 160,
    },
    {
      source: '正餐',
      target: '流向',
      value: 40,
    },
    {
      source: '下午茶',
      target: '流向',
      value: 10,
    },
    {
      source: '早点',
      target: '流向',
      value: 47,
    },
    {
      source: '晚餐',
      target: '流向',
      value: 8,
    },
    {
      source: '流向',
      target: '烧烤',
      value: 30,
    },
    {
      source: '流向',
      target: '火锅',
      value: 40,
    },
    {
      source: '流向',
      target: '炸鸡',
      value: 35,
    },
    {
      source: '流向',
      target: '汉堡',
      value: 25,
    },
    {
      source: '流向',
      target: '啤酒',
      value: 10,
    },
    {
      source: '流向',
      target: '串串香',
      value: 30,
    },
    {
      source: '流向',
      target: '重庆小面',
      value: 40,
    },
    {
      source: '流向',
      target: '甜点',
      value: 45,
    },
  ];