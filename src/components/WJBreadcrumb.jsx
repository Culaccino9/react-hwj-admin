import React from 'react'

import menuData from '../common/menuData';

import { NavLink } from 'react-router-dom';
import { Breadcrumb } from 'antd'
export default function WJBreadcrumb({ pathname }) {
    const role = sessionStorage.role
    let currentBreadcrumb = []
    menuData(role).forEach(item => {
        (item.path === pathname && currentBreadcrumb.push(item)) ||
        (item.children && item.children.forEach(i => {
            i.path === pathname && currentBreadcrumb.push(item, i)
        }))
    })
    return (
        <Breadcrumb style={{marginBottom:"20px"}}>
            {
                currentBreadcrumb && currentBreadcrumb.map(item => {
                    return (
                        <Breadcrumb.Item key={item.path}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </Breadcrumb.Item>
                    )
                })
            }
        </Breadcrumb>
    )
}
