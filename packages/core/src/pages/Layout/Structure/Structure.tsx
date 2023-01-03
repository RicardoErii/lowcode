import React, { FC, useState } from 'react'
import { Menu, MenuProps } from 'antd'

import {
  BarChartOutlined,
  FileOutlined,
  ApartmentOutlined
} from '@ant-design/icons'

import { ViewNode } from '@lowcode/concept'

import style from './Structure.module.scss'
import Material from './Material/Material'

const items: MenuProps['items'] = [
  {
    label: 'Outline Tree',
    icon: <FileOutlined />,
    key: '1'
  },
  {
    key: '2',
    label: '组件库',
    icon: <ApartmentOutlined />
  },
  {
    key: '3',
    label: '源码面板',
    icon: <BarChartOutlined />
  }
]

const Structure: FC<{ selectNode?: ViewNode }> = ({ selectNode }) => {
  const [selectKey, setSelectKey] = useState('')
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const resetMenu = () => {
    setSelectKey('')
    setSelectedKeys([])
  }

  const menuClick = ({ key }: { key: string }) => {
    if (key === selectKey) {
      resetMenu()
      return
    }
    setSelectKey(key)
    setSelectedKeys([key])
  }

  return (
    <div className={style.structure}>
      <Menu
        mode="inline"
        items={items}
        onClick={menuClick}
        selectedKeys={selectedKeys}></Menu>
      <div className="containter">
        {selectKey === '2' && <Material resetMenu={resetMenu} />}
      </div>
    </div>
  )
}

export default Structure
