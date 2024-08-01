import dynamic from 'next/dynamic'
import React from 'react'

const Dashboard = dynamic(() => import('@/components/organisms/dashboard'));
const Templates = dynamic(() => import('@/components/templates'));

export default function Index() {
  return (
    <div>
      <Templates title={'Landing Page'} theme="LIGHT">
        <Dashboard />
      </Templates>
    </div>
  )
}
